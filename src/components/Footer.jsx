import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles'

function Footer() {

    const Div = styled.div`
  
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:40px;
   
    color:${colors.mainDark}

    `
    const year = new Date().getFullYear()
    return (
        <Div>© copyright {year === 2025 ? year : `2025-${year}`}</Div>
    )
}

export default Footer