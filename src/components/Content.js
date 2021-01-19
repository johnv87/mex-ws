import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { sendMessage } from '../redux/actions'
import { StyledContent } from '../styled.components/styled'
import About from './About'
import Heroes from './Heroes'
import HeroView from './HeroView'

export default function Content() {
  const dispatch = useDispatch()
  const store = useSelector(state => state.socketReducer)
  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    dispatch(sendMessage('get_list', 150))
    setHeroes(store.heroes)
  }, [dispatch, store.heroes])

  return !heroes.length ? (
    <div style={{ marginTop: '4rem' }}>Loading...</div>
  ) : store.error ? (
    <div>{store.error}</div>
  ) : (
    <StyledContent className='content'>
      <Switch>
        <Route exact path={'/'}>
          <Heroes />
        </Route>
        <Route path={'/about'} component={About} />
        {store.heroes.map(hero => (
          <Route key={hero.name + hero.id} path={`/hero/${hero.name}`}>
            <HeroView id={hero.id} name={hero.name} race={hero.race} />
          </Route>
        ))}
        <Redirect path={'*'} to={'/'} />
      </Switch>
    </StyledContent>
  )
}
