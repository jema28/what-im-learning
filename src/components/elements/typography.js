import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { typography, color, letter_spacing_negative as ls } from '../../utils'

const { size } = typography
const { white, secondary } = color

const COLOR_MODIFIERS = {
  white: () => `
    color: ${white}
  `,
  lightest: () => `
    color: ${secondary.lightest}
  `,
  lighter: () => `
    color: ${secondary.lighter}
  `,
  light: () => `
    color: ${secondary.light}
  `,
  medium: () => `
    color: ${secondary.medium}
  `,
  dark: () => `
    color: ${secondary.dark}
  `,
  darkest: () => `
    color: ${secondary.darker}
  `
}

const SIZE_MODIFIERS = {
  large: () => `
    font-size: ${size.s_md};
  `
}

export const H1 = styled.h1`
  font-size: ${size.xxl};
  letter-spacing: ${ls.xl};
  writing-mode: vertical-rl;
  white-space: nowrap;
  position: absolute;
  left: -25px;
  top: 100px;

  ${applyStyleModifiers(COLOR_MODIFIERS)}
`

export const H2 = styled.h2`
  font-size: ${size.md_lg};
  letter-spacing: ${ls.lg};

  ${applyStyleModifiers(COLOR_MODIFIERS)}
`

export const H3 = styled.h3`
  font-size: ${size.md};
  letter-spacing: ${ls.xs};

  ${applyStyleModifiers(COLOR_MODIFIERS)}
`

export const H4 = styled.h4`
  font-size: ${size.s};
  letter-spacing: ${ls.xs};

  ${applyStyleModifiers(COLOR_MODIFIERS)}
`

export const Link = styled.a`
  font-size: ${size.xs};
  font-weight: bold;
  letter-spacing: ${ls.xxs};
  text-decoration: underline;

  ${applyStyleModifiers(COLOR_MODIFIERS)}
`

export const P = styled.p`
  font-size: ${size.xs};

  ${applyStyleModifiers(COLOR_MODIFIERS)}
  ${applyStyleModifiers(SIZE_MODIFIERS)}
`
