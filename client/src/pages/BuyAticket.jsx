import styled from "styled-components";
import {COLORS} from "../constants";
import TicketForm from "../components/TicketForm";
import OrderSummary from "../components/OrderSummary";
import FalseTimer from "../components/FalseTimer";
import Ad from "../components/Ad";
import { useEffect, useState } from "react";

const BuyAticket = () => {
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(54000);
  const [colorPrice, setColorPrice] = useState(0);
  const [color, setColor] = useState(COLORS.white);
  const [carbon, setCarbon] = useState(0);
  const [fuel, setFuel] = useState(0);

  useEffect(() => {
    const txCarbon = (price + colorPrice) * 0.2;
    setCarbon(txCarbon);
    const txFuel = (price + colorPrice) * 0.1;
    setFuel(txFuel);
    let result = price + colorPrice + txCarbon + txFuel;
    if (result > 289000) result = 289000;
    setTotal(result);
  }, [price, colorPrice]);

  return (
    <Wrapper>
      <StyledH1>Achetez un billet dès <Warning>maintenant!</Warning></StyledH1>
      <Container>
        <TicketForm
          color={color}
          setColor={setColor}
          setColorPrice={setColorPrice}
        />
        <RightBar>
          <FalseTimer />
          <OrderSummary
            total={total}
            price={price}
            color={color}
            colorPrice={colorPrice}
            carbon={carbon}
            fuel={fuel}
          />
          <Ad />
        </RightBar>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: 950px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const StyledH1 = styled.h1`
  color: ${COLORS.black};
  font-size: 1.7rem;
  text-align: center;
  padding: 32px 0;
`;
const RightBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
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
  flex: 1;
  min-height: 100%;
  width: 100%;
  height: 100%; /* NEW */
`;

export default BuyAticket;
