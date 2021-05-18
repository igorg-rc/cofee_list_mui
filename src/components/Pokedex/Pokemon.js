import { Button, CircularProgress, Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import axios from 'axios'
import { FirstCharUppercase } from './utils/Functions'

export const Pokemon = () => {
  const match = useRouteMatch()
  const history = useHistory()
  const [pokemon, setPokemon] = useState(undefined)

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${match.params.pokemonId}`)
      .then(response => {
        const { data } = response
        setPokemon(data)
      })
      .catch(error => {
        setPokemon(false)
      })

  }, [match.params.pokemonId])

  // 1. pokemon=undefined, that means we're getting the info
  // -> return loading progress

  // 2. pokemon = good data, that means we've gotten info
  // -> return actual data

  // 3. pokemon = bad data / false
  // -> return pokemon not found

  const generatePokemon = () => {
    const { id, name, species, height, weight, types, sprites } = pokemon
    const imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
    const { front_default } = sprites

    return (
      <>
        <Typography variant="h2">
          {`${id}.${FirstCharUppercase(name)}`}
          <img src={front_default} alt={name} />
        </Typography>
        <img src={imgUrl} style={{ width: '300px', height: '300px' }} alt={name} />
        <Typography variant="h4">Pokemon Info</Typography>
        <Typography variant="h6">
          { "Species:" }
          <a href={species.url}>{species.name}</a>
        </Typography>
        <Typography variant="h6">Height: {height}</Typography>
        <Typography variant="h6">Weight: {weight}</Typography>
        <Typography variant="h6">Types: 
          {types.map(typeInfo => {
            const { type } = typeInfo
            const { name } = type

            return <Typography key={name}>{`${name}`}</Typography>
          })}
        </Typography>
      </>
    )
  }

  return (
    <div style={{ height: '100vh' }}>
      {pokemon === undefined && <CircularProgress />}
      {pokemon !== undefined && pokemon && generatePokemon(pokemon)}
      {pokemon === false && <Typography> Pokemon not found</Typography>}

      {pokemon !== undefined && (
        <Button variant="contained" color="primary" onClick={() => history.push("/")}>
          back to pokedex
        </Button>
      )}
    </div>
  )
}