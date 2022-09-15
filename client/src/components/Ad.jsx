import styled from 'styled-components';
import AdImage from "../assets/mars-product.jpg";

const OrderSummary = () => {
  return (
      <Wrapper image={AdImage}>
      </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100%;
  background: url(${({image}) => image});
   background-repeat: no-repeat;
   background-size: 100%;
`;

const PromotionalMessage = styled.div`
  
`;

export default OrderSummary;