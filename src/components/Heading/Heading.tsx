/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import styles from './Heading.module.scss'

type Props = {
  tag?: string
  color?: string
}

const Heading: React.FC<Props> = ({ children, tag, color }) => {
  return (
    <div
      css={css`
        font-size: 32px;
      `}
    >
      <h2
        css={css`
          color: ${color};
        `}
      >
        {children}
      </h2>
      <StyledHeading>{children}</StyledHeading>
      <h2 className={styles.heading} style={{ color: `${color}` }}>
        HEADING with CSS Modules
      </h2>
    </div>
  )
}

export default Heading

const StyledHeading = styled.div`
  color: blue;
  font-style: italic;
`
