import styled from "styled-components";

// components
import TicketForm from "../components/TicketForm";
import OrderSummary from "../components/OrderSummary";
import FalseTimer from "../components/FalseTimer";
import {COLORS} from "../constants";
import Ad from "../components/Ad";

const BuyAticket = () => {
    return (
      <Wrapper>
        <StyledH1>Achetez un billet dès <Warning>maintenant!</Warning></StyledH1>

        <FlexContainer>
          <TicketForm></TicketForm>
          <div>
            <FalseTimer></FalseTimer>
            <OrderSummary></OrderSummary>
            <Link href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>
              <PromotionalMessage>Achetez nos toutes nouvelles BITES BOUCHÉES!</PromotionalMessage>
              <Ad></Ad>
            </Link>
          </div>
        </FlexContainer>
      </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 1%;
`;

const StyledH1 = styled.h1`
  color: ${COLORS.black};
  font-size: 1.7rem;
  text-align: center;
  margin-bottom: 1rem;
  margin-top 1rem;
`;

const Link = styled.a`
  text-decoration: none;
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

const FlexContainer = styled.div`
  display: flex;
`;

const PromotionalMessage = styled.div `
  color: ${COLORS.red2};
  font-weight: bold;
  text-align: center;
  margin-top: 1rem;
`

export default BuyAticket;
