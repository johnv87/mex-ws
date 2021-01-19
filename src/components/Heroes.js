import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendMessage } from '../redux/actions'
import {
  StyledButton,
  StyledHeroCardWrapper,
  StyledHeroesMain,
} from '../styled.components/styled'
import HeroCard from './HeroCard'

function Heroes() {
  const dispatch = useDispatch()
  const heroes = useSelector(state => state.socketReducer.heroes) || []

  const createNewHero = () => {
    dispatch(sendMessage('message_to_create_new_hero'))
  }

  useEffect(() => {
    dispatch(sendMessage('get_list'))
  }, [dispatch])

  return (
    <StyledHeroesMain className='heroes'>
      {heroes.map(hero => (
        //Hero card
        <StyledHeroCardWrapper
          key={hero.id + hero.name + hero.race}
          className={`heroes__${hero.race.toLowerCase()}`}
        >
          <div className='hero__header'>
            <h3 className='hero__header__title'>{hero.race}</h3>
            <StyledButton className='add__btn' onClick={createNewHero}>
              <i className='far fa-plus-square' />
            </StyledButton>
          </div>
          <HeroCard id={hero.id} name={hero.name} race={hero.race} />
        </StyledHeroCardWrapper>
      ))}
    </StyledHeroesMain>
  )
}

export default Heroes
