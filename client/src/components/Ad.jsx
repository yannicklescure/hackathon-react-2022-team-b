import styled from 'styled-components';
import AdImage from "../assets/mars-product.jpg";
import { COLORS } from '../constants';

const OrderSummary = () => {
  return (
    <Link href="https://www.youtube.com/watch?v=a3Z7zEc7AXQ" target="_blank">
      <PromotionalMessage>Disponible dans nos fusées !</PromotionalMessage>
      <Container image={AdImage} />
    </Link>
  )
}

const Container = styled.div`
  height: 300px;
  background: url(${({image}) => image});
  background-repeat: no-repeat;
  background-size: 100%;
  background-size: cover;
  background-position: center;
  border: 1px solid ${COLORS.black};
`;
const PromotionalMessage = styled.p`
  color: ${COLORS.red2};
  font-weight: bold;
  text-align: center;
`;
const Link = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid ${COLORS.black};
  padding: 8px;
  background-color: ${COLORS.linen};
`;

export default OrderSummary;