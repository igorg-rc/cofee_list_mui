import { makeStyles, Grid } from '@material-ui/core'
import { Header } from './Header'
import { Content } from './Content'

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

export const CofeeListIndex = () => {
  const classes = useStyles()

  return (
    <>
      <Grid container direction="column">
        <Grid item>
        <Header />
        </Grid>
        <Grid item container>
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
