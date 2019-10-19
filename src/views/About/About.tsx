import React, { FC } from 'react'
import styled from 'styled-components'

const About: FC = () => {
  return (
    <Wrapper>
      <H1>About</H1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border-top: 4px solid #888;
`

const H1 = styled.h1`
  color: #f93;
`

export default About
