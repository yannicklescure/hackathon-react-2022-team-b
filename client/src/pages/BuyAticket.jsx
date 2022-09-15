import styled from "styled-components";
import {COLORS} from "../constants";
import TicketForm from "../components/TicketForm";
import OrderSummary from "../components/OrderSummary";
import FalseTimer from "../components/FalseTimer";
import Ad from "../components/Ad";

const BuyAticket = () => {
  return (
    <Wrapper>
      <StyledH1>Achetez un billet dès <Warning>maintenant!</Warning></StyledH1>
      <Container>
        <TicketForm></TicketForm>
        <div>
          <FalseTimer></FalseTimer>
          <OrderSummary></OrderSummary>
          <Ad></Ad>
        </div>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: 950px;
  margin: 0 auto;
  background-color: red;
  min-height: 100vh;
`;
const StyledH1 = styled.h1`
  color: ${COLORS.black};
  font-size: 1.7rem;
  text-align: center;
  padding: 32px 0;
`;
const Warning = styled.span`
  color: ${COLORS.danger};
  font-size: 2.5rem;
  &:after {
    content:"←";
    transform: rotate(340deg);
    position:absolute;
    top: 4.5rem;
  }
  &:before {
    content:"←";
    transform: rotate(225deg);
    position:absolute;
    top: 4rem;
    left: 49%;
  }
`;
const Container = styled.div`
  display: flex;
`;

export default BuyAticket;
