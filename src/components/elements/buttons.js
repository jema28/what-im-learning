import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { color } from '../../utils'

const { primary, white, secondary, background, accent } = color

const BUTTON_MODIFIERS = {
  dark: () => `
    color: ${secondary.lighest}
    background: ${background.dark};
    border: 4px solid ${primary};
  `
}

export const Button = styled.button`
  height: 68px;
  width: 180px;
  background: ${background.darkest};
  border: 4px solid ${accent};
  color: ${white};
  font-size: 20px;
  font-weight: bold;

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`
