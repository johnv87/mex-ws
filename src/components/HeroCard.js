import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendMessage } from '../redux/actions'
import {
  StyledButton,
  StyledHeroCard,
  StyledInput,
  StyledNavLink,
} from '../styled.components/styled'

export default function HeroCard({ id, name, race }) {
  const dispatch = useDispatch()
  const [hero, setHero] = useState({ name, race, id })
  const [edit, setEdit] = useState(false)
  //  Handle input changes
  const changeHandler = e => {
    setHero({ ...hero, [e.target.name]: e.target.value })
  }

  //  Handle submit
  const submitHandler = (
    message = 'logic_to_update_hero_or_delete_hero',
    selectedHero
  ) => {
    dispatch(sendMessage(message, null, selectedHero))
    setHero({ name, id, race })
    setEdit(false)
  }

  return (
    <StyledHeroCard className='card' key={id}>
      {/*Hero Title*/}
      <div className='card__header'>
        <div className='card__header__title'>
          {!edit ? (
            <StyledNavLink
              to={`/hero/${name.toLowerCase()}`}
              className={'card__header__link'}
            >
              {!edit && (
                <span className='hero__view__data__text'>Name: {name}</span>
              )}
            </StyledNavLink>
          ) : (
            <StyledInput
              type='text'
              name='name'
              value={hero.name}
              onChange={changeHandler}
            />
          )}
        </div>
      </div>

      {/*Edit Buttons*/}
      <div className='hero__buttons'>
        {/*Edit Button*/}
        <StyledButton
          theme='warning'
          className='hero__button--change'
          onClick={
            edit === false
              ? () => setEdit(true)
              : () => submitHandler('update_hero', hero)
          }
          disabled={edit && !hero.name.trim()}
        >
          {!edit ? (
            <i className='fas fa-edit' />
          ) : (
            <i className='far fa-check-square' />
          )}
        </StyledButton>

        {/*Delete Button*/}
        {!edit && (
          <StyledButton
            theme='danger'
            className='hero__button--delete'
            onClick={() => submitHandler('delete_hero', hero)}
          >
            <span>
              <i className='fas fa-trash-alt' />
            </span>
          </StyledButton>
        )}

        {/*Cancel Button*/}
        {edit && (
          <StyledButton
            theme='danger'
            className='hero__button--cancel'
            onClick={() => {
              setHero({ ...hero })
              setEdit(false)
            }}
          >
            <span>Cancel</span>
          </StyledButton>
        )}
      </div>
    </StyledHeroCard>
  )
}
