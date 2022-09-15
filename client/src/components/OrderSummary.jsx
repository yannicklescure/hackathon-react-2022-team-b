import styled from 'styled-components';
import { COLORS } from '../constants';

const OrderSummary = ({ total, price, color, colorPrice, carbon, fuel, nbTicket}) => {

  const newTotal = nbTicket * total

  return (
    <Wrapper color={color}>
      <StyledH2>Récapitulatif de la commande</StyledH2>
      <StyledElement>
        <p>Prix HT:</p>
        <p>{price} DC</p>
      </StyledElement>
      <StyledElement>
        <p>Couleur VIP:</p>
        <p>{colorPrice} DC</p>
      </StyledElement>
      <StyledElement>
        <p>Taxes carbone:</p>
        <p>{carbon} DC</p>
      </StyledElement>
      <StyledElement>
        <p>Taxes carburant:</p>
        <p>{fuel} DC</p>
      </StyledElement>
      <StyledElement>
        <p>Nombre de billet:</p>
        <p>{nbTicket}</p>
      </StyledElement>
      <StyledElementBold>
        <p>Total:</p>
        <p>{newTotal} DC</p>
      </StyledElementBold>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${({color}) => color};
  display: flex;
  flex-direction: column;
  border: 1px solid ${COLORS.black};
  padding: 16px;
  gap: 16px;
`;
const StyledH2 = styled.h2`
  margin-bottom: 8px;
`;
const StyledElement = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledElementBold = styled(StyledElement)`
  font-weight: bold;
`;

export default OrderSummary;