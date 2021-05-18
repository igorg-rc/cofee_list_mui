import { useEffect, useState } from 'react'
import { makeStyles, fade } from '@material-ui/core/styles'
import { AppBar, Toolbar, Grid, Card, CardContent, Typography, CircularProgress, CardMedia, TextField } from '@material-ui/core'
import axios from 'axios'
import { useHistory } from 'react-router'
import { FirstCharUppercase } from './utils/Functions'
import { Search } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  pokedexContainer: {
    paddingTop: '20px',
    paddingLeft: '20px',
    paddingRight: '50px'
  },
  cardMedia: {
    margin: 'auto'
  },
  cardContent: {
    textAlign: 'center'
  },
  searchContainer: {
    display: 'flex',
    margin: 'auto',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    paddingLeft: '20px',
    paddingRight: '20px',
    marginTop: '50px',
    marginBottom: '50px'
  },
  searchIcon: {
    alignSelf: 'flex-end',
    marginBottom: '10px'
  },
  searchInput: {
    width: '300px',
    margin: '5px'
  }
}))

export const Pokedex = () => {
  const classes = useStyles()
  const history = useHistory()
  const [pokemonData, setPokemonData] = useState({})
  const [filter, setFilter] = useState("")

  const handleSearchChange = e => {
    setFilter(e.target.value)
  }

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=100`)
      .then(response => {
        const { data } = response
        const { results } = data
        const newPokemonData = {}

        results.forEach((pokemon, index) => {
          newPokemonData[index + 1] = {
            id: index + 1,
            name: pokemon.name,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
          }
        })
        setPokemonData(newPokemonData)
      })
  }, [])
  
  const getPokemonCard = pokemonId => {
    console.log(pokemonData[`${pokemonId}`])

    const { id, name, sprite } = pokemonData[pokemonId]
    
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={pokemonId}>
        <Card onClick={() => history.push(`/${pokemonId}`)}>
          <CardMedia 
            className={classes.cardMedia}
            image={sprite}
            style={{ width: '130px', height: '130px' }}
          />
          <CardContent className={classes.cardContent}>
            <Typography>{`${id}. ${FirstCharUppercase(name)}`}</Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.searchContainer}>
            <Search className={classes.searchIcon} />
            <TextField className={classes.searchInput} label="Pokemon" onChange={handleSearchChange} />
          </div>
        </Toolbar>
      </AppBar>
      { pokemonData ? 
      (
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {
            Object.keys(pokemonData).map(pokemonId =>
              pokemonData[pokemonId].name.includes(filter) && 
              getPokemonCard(pokemonId)
            )
          }
        </Grid>
      )
      : <CircularProgress />
      }

    </>
  )
}