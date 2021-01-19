import { bounceIn, fadeIn, slideInLeft, slideInRight } from 'react-animations'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import './_variables'
import { colors } from './_variables'
import { respondTo } from './respondScreen'

export const StyledApp = styled.div`
  background-color: ${colors['white-fa']};
`

const contentAnimation = keyframes(fadeIn)
export const StyledContent = styled.div`
  margin: 3rem auto;
  max-width: 960px;
  padding-top: 1rem;
  animation: ${contentAnimation} 250ms ease-in-out forwards;
`

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background: ${colors['white-fa']};
  height: 100%;
  max-height: 3rem;
  box-shadow: 0 2px 6px 2px ${colors['black-125']};
  z-index: 1030;

  & .nav__brand {
    color: blue;
    text-decoration: none;
  }
`

export const StyledNavLink = styled(NavLink)`
  display: block;
  border: 1px solid transparent;
  border-radius: 6px;
  text-decoration: none;
  text-align: center;
  color: ${colors.blue};

  &:hover {
    color: ${colors['blue-active']};
  }

  &.active {
    text-decoration: underline;
  }
`

export const StyledHeroesMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  height: 100%;
  width: calc(100% - 1rem);

  ${respondTo.xs`
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  `}
  ${respondTo.sm`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  `}
`

const heroBounceIn = keyframes(bounceIn)
const aSlideInLeft = keyframes(slideInLeft)
const aSlideInRight = keyframes(slideInRight)
export const StyledHeroCardWrapper = styled.div`
  height: 100%;
  width: 100%;
  opacity: 0;

  &:nth-child(odd) {
    animation: ${aSlideInRight} ease-in;
    opacity: 1;
  }
  &:nth-child(even) {
    animation: ${aSlideInLeft} ease-in;
    opacity: 1;
  }

  &:nth-of-type(1) {
    animation-duration: 350ms;
  }
  &:nth-of-type(2) {
    animation-duration: 390ms;
  }
  &:nth-of-type(3) {
    animation-duration: 430ms;
  }
  &:nth-of-type(4) {
    animation-duration: 470ms;
  }

  ${respondTo.xs`
    width: calc(50% - .125rem);
    &:nth-child(n) {
      animation: ${heroBounceIn} ease-in;
    }
    
    &:nth-of-type(1) {
      animation-duration: 350ms;
    }
    &:nth-of-type(2) {
      animation-duration: 390ms;
    }
    &:nth-of-type(3) {
      animation-duration: 430ms;
    }
    &:nth-of-type(4) {
      animation-duration: 470ms;
    }
  `}

  ${respondTo.sm`
    width: calc(25% - .25rem);
  `}
  
  & .hero__header {
    display: flex;
    align-items: center;

    ${respondTo.sm`
      justify-content: center;
    `}
  }
`

export const StyledHeroCard = styled.div`
  border: 1px solid ${colors['black-125']};
  border-radius: 8px;
  margin-bottom: 0.25rem;
  height: 100%;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.125);

  & .card__header {
    border-bottom: 1px solid ${colors['black-125']};
    background: ${colors['black-03']};
    height: fit-content;
    width: 100%;

    &__title {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 0 0.5rem;
      min-height: 64px;
    }

    &__link {
      padding: 1rem;
      height: 100%;
      width: calc(100% - 2rem);
    }
  }
`

export const StyledButton = styled.button`
  border: 1px solid transparent;
  border-radius: 8px;
  ${props => {
    switch (props.theme) {
      case 'success':
        return {
          'border-color': colors.success,
          'background-color': colors.success,
          color: colors['white-fa'],

          '&:hover': {
            'background-color': colors['success-darker'],
            color: 'white',
          },
        }
      case 'warning':
        return {
          'border-color': colors.warning,
          'background-color': colors.warning,
          color: colors.dark,

          '&:hover': {
            'background-color': colors['warning-darker'],
          },
        }
      case 'danger':
        return {
          'border-color': colors.danger,
          'background-color': colors.danger,
          color: colors['white-fa'],

          '&:hover': {
            'background-color': colors['danger-darker'],
          },
        }
      default:
        return {
          'background-color': '#fff',
          color: 'initial',
        }
    }
  }};
  cursor: pointer;
  outline: 0;
  padding: 0.5rem 0.75rem;
  align-self: center;

  &:disabled {
    background-color: ${colors['grey-light']};
    border-color: ${colors.secondary};
    color: ${colors.secondary};
    cursor: not-allowed;
  }

  &.add__btn {
    background: #fff;
    border: 1px solid transparent;
    color: ${colors.blue};
    font-size: 1.25rem;
    padding: 0.25rem;
  }

  &.hero__button--change,
  &.hero__button--delete,
  &.hero__button--cancel {
    border: 1px solid transparent;
    background: transparent;
    padding: 0.25rem 0.25rem 0.35rem 0.35rem;
  }
    & .fas, & .far, &.hero__button--cancel {
    background: transparent;
    ${props => {
      switch (props.theme) {
        case 'warning':
          return { color: colors.warning }
        case 'danger':
          return { color: colors.danger }
      }
    }}
`

export const StyledInput = styled.input`
  display: block;
  border: 1px solid rgba(0,0,0,.125)};
  border-radius: 4px;
  color: ${colors.dark};
  padding: 0.5rem;
  width: calc(100% - 1rem);
  max-width: 280px;
  margin: 0 auto 0.75rem;

  &:focus {
    outline-color: ${colors.blue};
  }
`
