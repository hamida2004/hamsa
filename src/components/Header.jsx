import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles'
import logo from '../images/HamSa.png'

function Header() {

  const Div = styled.div`
     position:fixed;
    top:0px;
    left:0px;
    z-index:9088797;
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;
    height:40px;
    padding:40px;

    `
  const Logo = styled.img`
    height:32px;
    `
  return (
    <Div>
      <Logo src={logo} />
    </Div>
  )
}

export default Header