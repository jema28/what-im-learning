# Creating a Design System in Styled Components

_Building our design systems in code._

## Utils

We'll start by creating our theme: colour, typography, spacing, shadows, global styles in utils folder and export them in an index.js file.

### Creating theme

```js
// src/utils/colors.js

export const color = {
  primary: '#130F40',
  accent: '#F0932B',
  white: '#FFF',
  secondary: {
    lightest: '#d3d1db',
    lighter: '#AEB5CE',
    light: '#908DA6',
    medium: '#5a567a',
    dark: '#423E67',
    darkest: '#282452'
  },
  background: {
    light: '#FFF',
    medium: '#F9F9F9',
    dark: '#21194D',
    darkest: '#1F174B'
  }
}
```

```js
// src/utils/typography.js

export const typography = {
  font: {
    heading: `font-family: 'Karla', sans-serif`,
    body: `font-family: 'Darker Grotesque', sans-serif`
  },
  size: {
    xs: '16px',
    s: '20px',
    s_md: '25px',
    md: '30px',
    md_lg: '38.55px',
    lg: '40px',
    xl: '50px',
    xxl: '90px'
  }
}
```

```js
// src/utils/spacing.js

export const letter_spacing_negative = {
  tiny: '-0.5px',
  xxs: '-1px',
  xs: '-2px',
  s: '-2.5px',
  md: '-3.5px',
  lg: '-4px',
  xl: ' -6px',
  xxl: '-12px',
  xxxl: '-14.8px',
  huge: '-20px'
}
```

### Global.js

1.  We access global style from styled components:

```js
import { **createGlobalStyle** } from 'styled-components'
```

2.  Then destructure variables we need from colour and typography:

```js
const { primary, white } = color
const { font } = typography
```

3.  Add our theme variables using this syntax: `${<variable>}`

```js
background: ${primary};
```

```js
// src/utils/global.js

import { **createGlobalStyle** } from 'styled-components'
// npm i polished and import normalize
import { normalize } from 'polished'
import { color, typography } from './index'

const { primary, white } = color
const { font } = typography

export const GlobalStyle = **createGlobalStyle**`
  @import url('https://fonts.googleapis.com/css?family=Darker+Grotesque|Karla:700&display=swap')
  \${normalize()};

  html {
  box-sizing: border-box;
  }

  _, _:before,\*:after {
  box-sizing: inherit;
  }


    body {
      margin: 0;
      padding: 0;
      background: ${primary};
      color: ${white};
      ${font.body};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    h1, h2, h3, h4, a {
      margin: 0;
      padding: 0;
      ${font.heading};
    }
`
```

Export all utils in one place:

```js
// src/utils/index.js

export * from './color'
export * from './typography'
export * from './spacing'
export * from './splitTitle'
```

## Elements

Next, we'll create our reusable elements such as typography and buttons.

### Creating styled components

To create styled components we use this syntax:

```js
export const ElementName = styled.<element>`
  ...
`
```

### Adding nested styles

You can add nested styles (like in sass) like this:

```js
export const Link = styled.a`
  font-size: ${size.xs};
  font-weight: bold;
  letter-spacing: ${ls.xxs};
  text-decoration: underline;
  transition: all 0.5s;

  &:hover {
    color: ${accent};
  }
`
```

### Importing utils and elements

Because we're exporting all utils in an index.js, we can import all utils we need in one import:

```js
import { typography, color, letter_spacing_negative } from '../../utils'
```

### Examples

```js
// src/components/elements/typography.js

import styled from 'styled-components'
import { typography, color, letter_spacing_negative as ls } from '../../utils'

const { size } = typography
const { white, accent, secondary } = color

export const H1 = styled.h1`
  font-size: ${size.xxl};
  letter-spacing: ${ls.xl};
  writing-mode: vertical-rl;
  white-space: nowrap;
  position: absolute;
  left: -25px;
  top: 100px;
`

export const H2 = styled.h2`
  font-size: ${size.md_lg};
  letter-spacing: ${ls.lg};
`

export const H3 = styled.h3`
  font-size: ${size.md};
  letter-spacing: ${ls.xs};
`

export const H4 = styled.h4`
  font-size: ${size.s};
  letter-spacing: ${ls.xs};
`

export const Link = styled.a`
  font-size: ${size.xs};
  font-weight: bold;
  letter-spacing: ${ls.xxs};
  text-decoration: underline;
  transition: all 0.5s;

  &:hover {
    color: ${accent};
  }
`

export const P = styled.p`
  font-size: ${size.s};
`

export const Span = styled.span`
  ...;
`
```

```js
// src/components/elements/buttons.js

import styled from 'styled-components'
import { color } from '../../utils'

const { white, background, accent } = color

export const Button = styled.button`
  height: 68px;
  width: 180px;
  background: ${background.darkest};
  border: 4px solid ${accent};
  color: ${white};
  font-size: 20px;
  font-weight: bold;
`
```

## Adding modifiers

Once we've got our base elements we want to add colour and size modifiers.

1.  Start by npm installing `styled-components-modifiers` and importing `applyStyleModifiers`
2.  Create a modifiers object e.g.

```js
const BUTTON_MODIFIERS = {
  dark: () => `
    color: ${secondary.lighest}
    background: ${background.dark};
    border: 4px solid ${primary};
  `
}
```

3.  Call applyStyleModifiers with modifiers variables as a parameter in the relevant styled components.

```js
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
```

### Examples

```js
// src/components/elements/typography.js

import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { typography, color, letter_spacing_negative as ls } from '../../utils'

const { size } = typography
const { white, accent, secondary } = color

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
  darker: () => `
    color: ${secondary.darker}
  `,
  darkest: () => `
  color: ${secondary.darkest}
`
}

const SIZE_MODIFIERS = {
  size_small_medium: () => `
    font-size: ${size.s_md};
`,
  size_medium: () => `
    font-size: ${size.md};
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

  ${applyStyleModifiers(COLOR_MODIFIERS)};
`

export const H2 = styled.h2`
  font-size: ${size.md_lg};
  letter-spacing: ${ls.lg};

  ${applyStyleModifiers(COLOR_MODIFIERS)};
`

export const H3 = styled.h3`
  font-size: ${size.md};
  letter-spacing: ${ls.xs};

  ${applyStyleModifiers(COLOR_MODIFIERS)};
`

export const H4 = styled.h4`
  font-size: ${size.s};
  letter-spacing: ${ls.xs};

  ${applyStyleModifiers(COLOR_MODIFIERS)};
`

export const Link = styled.a`
  font-size: ${size.xs};
  font-weight: bold;
  letter-spacing: ${ls.xxs};
  text-decoration: underline;
  transition: all 0.5s;

  &:hover {
    color: ${accent};
  }

  ${applyStyleModifiers(COLOR_MODIFIERS)};
  ${applyStyleModifiers(SIZE_MODIFIERS)};
`

export const P = styled.p`
  font-size: ${size.s};

  ${applyStyleModifiers(COLOR_MODIFIERS)};
  ${applyStyleModifiers(SIZE_MODIFIERS)};
`

export const Span = styled.span`
  ${applyStyleModifiers(COLOR_MODIFIERS)};
`
```

```js
// src/components/elements/buttons.js

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
```

Lastly, export all elements in an index.js:

```js
// src/components/elements/index.js

export * from './typography'
export * from './buttons'
```

## Using elements/modifiers

1.  We now import our elements like this:

```js
import { H1, Span } from '../elements'
```

2.  And use them in our components. Note here we use our colour modifiers by passing them in as props.

```js
const Header = ({ pageTitle }) => {
  return (
    <header>
      <H1>
        <Span **modifiers="darkest"**>{subtitle}</Span>{' '}
        <Span **modifiers="medium"**>{title}</Span>
      </H1>
    </header>
  )
}
```

## Using global styles

In our main app/layout component we add our global style:

```js
import React from 'react'
import PropTypes from 'prop-types'
import { GlobalStyle } from '../../utils/global'
import { Header } from './index'

const Layout = ({ children }) => (
  <>
    **
    <GlobalStyle />
    **
    <Header pageTitle="what i'm learning" />
    <main>{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
```

## Extending styled components

To add more properties to our styled components we extend them using this syntax:

```js
const ExtendedStyledComponent = styled(props => (
  <StyledComponentName {...props} />
))`
  ...;
`
```

```js
import React from 'react'
import styled from 'styled-components'
import { Link } from '../elements'

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
`

**const NavLink = styled(props => <Link {...props} />)`**
  margin-top: 50px;
  margin-right: 25px;
  &:last-child {
    margin-right: 100px;
  }
`

const Navbar = () => (
  <Nav>
    <NavLink>portfolio</NavLink>
    <NavLink>book tracker</NavLink>
  </Nav>
)

export default Navbar
```
