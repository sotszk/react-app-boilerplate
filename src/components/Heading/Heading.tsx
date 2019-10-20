import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

type Props = {
  tag?: string
}

const Heading: React.FC<Props> = ({ children, tag }) => {
  return (
    <div
      css={css`
        font-size: 32px;
      `}
    >
      <h2
        css={css`
          color: blue;
        `}
      >
        {children}
      </h2>
      <StyledHeading>{children}</StyledHeading>
    </div>
  )
}

export default Heading

const StyledHeading = styled.div`
  color: blue;
  font-style: italic;
`
