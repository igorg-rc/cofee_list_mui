import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import {Pokedex} from './Pokedex'
import {Pokemon} from './Pokemon'

export const PokemonIndex = () => {
  return (
    <div style={{ marginTop: '-20px', height: '100%', backgroundColor: 'lightGrey' }}>
      <Router>

        <Switch>
          <Route exact path="/" render={props => <Pokedex {...props} />} />
          <Route path="/:pokemonId" render={props => <Pokemon {...props} />} />
        </Switch>
      </Router>
    </div>
  )
}