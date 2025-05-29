
import logo from '../images/dresses/dress3.jfif';
import logo1 from '../images/dresses/dress1.jfif';
import logo2 from '../images/dresses/dress2.jfif';
import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import { dresses } from '../data';

const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 40px;
  background-color: #f9f9f9;
  text-align: center;
`;

const CarouselWrapper = styled.div`
  width: 100%;
  height: 90vh;
  margin-bottom: 40px;

  
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin: 40px 0;
  color: #6e3fbb;
  font-weight: bold;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;



function Home() {
    return (
        <Wrapper>
            {/* Carousel Section */}
            <CarouselWrapper>
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide h-100"
                    data-bs-ride="carousel"
                    data-bs-interval="2000" // slide every 1 second
                >
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner h-100">
                        <div className="carousel-item active h-100">
                            <img src={logo} className="d-block w-100 h-100 object-fit-cover" alt="..." />
                        </div>
                        <div className="carousel-item h-100">
                            <img src={logo1} className="d-block w-100 h-100 object-fit-cover" alt="..." />
                        </div>
                        <div className="carousel-item h-100">
                            <img src={logo2} className="d-block w-100 h-100 object-fit-cover" alt="..." />
                        </div>
                    </div>
                </div>
            </CarouselWrapper>

            {/* Title Section */}
            <Title>Discover</Title>

            {/* Cards Section */}
            <CardsContainer>
                {dresses.map((dress, index) => {
                  return  <Card id={dress.id} title={dress.title} img={dress.image} key={index} price={dress.price} />
                })}
            </CardsContainer>
        </Wrapper>
    );
}

export default Home;
