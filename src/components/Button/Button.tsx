import React from 'react'
/** @jsx jsx */ import { jsx, css } from '@emotion/core'

type Props = {}

const Button: React.FC<Props> = ({ children }) => {
  return <button css={css({ color: 'blue' })}>{children}</button>
}

export default Button
