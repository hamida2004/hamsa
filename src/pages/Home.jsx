import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import { dresses } from '../data';

// جلب جميع الصور من المجلد src/images/main
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../images/dresses/main', false, /\.(png|jpe?g|jfif|svg)$/));

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
          data-bs-interval="2000"
        >
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-current={index === 0 ? 'true' : undefined}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="carousel-inner h-100">
            {images.map((img, index) => (
              <div
                key={index}
                className={`carousel-item h-100 ${index === 0 ? 'active' : ''}`}
              >
                <img
                  src={img}
                  className="d-block w-100 h-100 object-fit-cover"
                  alt={`slide-${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </CarouselWrapper>

      {/* Title Section */}
      <Title>Discover</Title>

      {/* Cards Section */}
      <CardsContainer>
        {dresses.map((dress, index) => (
          <Card
            id={dress.id}
            title={dress.title}
            img={dress.image}
            key={index}
            price={dress.price}
          />
        ))}
      </CardsContainer>
    </Wrapper>
  );
}

export default Home;
