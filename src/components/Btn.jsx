import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles'

const Button = styled.button`
  min-width: 120px;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${colors.light};
  background-color: ${colors.main};
  text-decoration: none;
  margin: 20px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.secondary || '#6e3fbb'};
  }
`;

function Btn({ content, handleClick }) {
  return (
    <Button onClick={handleClick}>
      {content}
    </Button>
  )
}

export default Btn
