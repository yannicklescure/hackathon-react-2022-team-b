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
  min-height: 100%;
  background: url(${({image}) => image});
  background-repeat: no-repeat;
  background-size: 100%;
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