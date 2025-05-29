import React from 'react';
import styled from 'styled-components';
import Btn from '../components/Btn'
import { useNavigate } from 'react-router';

const CardContainer = styled.div`
  width: 300px;
  height: 400px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  overflow: hidden;
  text-align: center;
  padding: 20px;

  h3, p, span {
    color: #6e3fbb; /* اللون البنفسجي للكروت */
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
  }

  span {
    display: block;
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;


function Card({ id, title, img, price }) {
  const navigate = useNavigate()
  const goTo = (id) => {
    navigate(`/order/${id}`)
  }
  return (
    <CardContainer>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <span>{price} DZD</span>
      <Btn content={"buy"} handleClick={() => goTo(id)} />
    </CardContainer>
  );
}

export default Card;
