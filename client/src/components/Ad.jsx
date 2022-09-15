import styled from 'styled-components';
import AdImage from "../assets/mars-product.jpg";
import { COLORS } from '../constants';

const OrderSummary = () => {
  return (
    <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
      <PromotionalMessage>Achetez nos toutes nouvelles BITES BOUCHÉES!</PromotionalMessage>
      <Wrapper image={AdImage} />
    </Link>
  )
}

const Wrapper = styled.div`
  height: 300px;
  background: url(${({image}) => image});
  background-repeat: no-repeat;
  background-size: 100%;
  background-size: cover;
  background-position: center;
`;
const PromotionalMessage = styled.p`
  color: ${COLORS.red2};
  font-weight: bold;
  text-align: center;
  margin-top: 1rem;
`;
const Link = styled.a`
  text-decoration: none;
`;

export default OrderSummary;