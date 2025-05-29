import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import logo from '../images/dresses/dress3.jfif';
import logo1 from '../images/dresses/dress1.jfif';
import logo2 from '../images/dresses/dress2.jfif';
import { dresses } from '../data';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  min-height: 100vh;
  background-color: #f9f9f9;
  padding: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const CarouselWrapper = styled.div`
  flex: 1;
  height: 90vh;
  margin-right: 40px;

  @media (max-width: 768px) {
    height: 40vh;
    margin-right: 0;
    margin-bottom: 20px;
  }

  .carousel-inner, .carousel-item, img {
    border-radius: 12px;
    overflow: hidden;
  }
`;

const FormWrapper = styled.form`
  flex: 1;
  max-width: 500px;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;

  h2 {
    text-align: center;
    color: #6e3fbb;
    font-weight: bold;
  }

  input {
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #6e3fbb;
      box-shadow: 0 0 5px rgba(110, 63, 187, 0.4);
    }
  }

  button {
    background-color: #6e3fbb;
    color: white;
    padding: 12px;
    font-size: 1.1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background-color: #5a32a0;
    }
  }
`;

function Order() {
  const { id } = useParams();
  const [foundImg,setFoundImg]=useState({})
  useEffect(() => {
    const foundImg = dresses.find(img => img.id === Number(id));
    setFoundImg(foundImg)
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone_num: '',
    color: '',
    size: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,

    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      id: id + '-' + new Date().toISOString(),
      name: formData.name,
      address: formData.address,
      phone_num: formData.phone_num,
      color: formData.color,
      size: formData.size,
      dress_id: id,

      timestamp: new Date().toISOString(),
    };

    const googleSheetUrl = "https://script.google.com/macros/s/AKfycbxuwsYySpGKp6dVlQuVgHOE_0fnEnU0fb_iGtb96wdkbg5GsvhwTym_WCSZv0nPmkG5tg/exec";

    try {
      const response = await fetch(googleSheetUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      alert('Order submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting order');
    }
  };

  return (
    <Wrapper>
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

      <FormWrapper onSubmit={handleSubmit}>
        <h2>Order Dress {foundImg.title}</h2>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Your Address" value={formData.address} onChange={handleChange} required />
        <input type="tel" name="phone_num" placeholder="Your Phone Number" value={formData.phone_num} onChange={handleChange} required />
        <input type="text" name="color" placeholder="Preferred Color" value={formData.color} onChange={handleChange} required />
        <input type="text" name="size" placeholder="Dress Size" value={formData.size} onChange={handleChange} required />
        <button type="submit">Submit Order</button>
      </FormWrapper>
    </Wrapper>
  );
}

export default Order;
