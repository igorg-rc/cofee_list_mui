import { Button, makeStyles, Typography, Grid } from '@material-ui/core'
import { Header } from './components/Header'
import { Content } from './components/Content'
import { CofeeCard, CoffeeCard } from './components/CofeeCard'

const useStyles = makeStyles({
  textStyle: {
    textAlign: 'center',
    color: 'indigo',
    fontWeight: 700
  },
  btnStyle: {
    padding: 15,
    margin: 5
  }
})

function App() {
  const classes = useStyles()

  return (
    <>
      <Grid container direction="column">
        <Grid item>
        <Header />
        </Grid>
        <Grid item container spacing={2}>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <Content />
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
