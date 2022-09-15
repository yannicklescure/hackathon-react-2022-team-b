import styled from "styled-components";
import {COLORS} from "../constants";
import TicketForm from "../components/TicketForm";
import OrderSummary from "../components/OrderSummary";
import FalseTimer from "../components/FalseTimer";
import Ad from "../components/Ad";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { NavLink } from "react-router-dom";

const BuyAticket = () => {
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(54000);
  const [colorPrice, setColorPrice] = useState(0);
  const [color, setColor] = useState(COLORS.white);
  const [carbon, setCarbon] = useState(0);
  const [inkPrice, setInkPrice] = useState(0);
  const [fuel, setFuel] = useState(0);
  const [numOfTickets, setNumOfTickets] = useState(99);
  const [nbTicket, setNbTicket] = useState(1);
  const [isCaptchaValidated, setIsCaptchaValidated] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    fetch('/api/tickets')
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setNumOfTickets(numOfTickets - result.data.length);
    })
  }, [])

  useEffect(() => {
    if (isCaptchaValidated) {
      setTimeout(() => setIsConfirmed(true), 3000);
    }
  }, [isCaptchaValidated])

  useEffect(() => {
    const price = 54000 + colorPrice + inkPrice;
    setPrice(price);
    const txCarbon = parseInt((price) * 0.2);
    setCarbon(txCarbon);
    const txFuel = parseInt((price) * 0.1);
    setFuel(txFuel);
    let result = price + colorPrice + txCarbon + txFuel;
    if (result > 289000) result = 289000;
    setTotal(result);
  }, [price, colorPrice, inkPrice]);

  if (isConfirmed) return (
    <Confirmation>
      <StyledConfirmation>Votre commande a été validée.</StyledConfirmation>
      <NavLink to="/ticket">Télécharger votre billet</NavLink>
    </Confirmation>
  )

  return (
    <>
      {isCaptchaValidated ? (
        <Loading />
      ) : (
        <Wrapper>
          <StyledH1>Achetez un billet dès <Warning>maintenant!</Warning></StyledH1>
          <StyledH2>Seulement {numOfTickets} billets restants</StyledH2>
          <Container>
            <TicketForm
              color={color}
              setColor={setColor}
              setColorPrice={setColorPrice}
              setInkPrice={setInkPrice}
              setNbTicket={setNbTicket}
              setIsCaptchaValidated={setIsCaptchaValidated}
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
                nbTicket={nbTicket}
              />
              <Ad />
            </RightBar>
          </Container>
        </Wrapper>

      )}
    </>
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
  padding-top: 32px;
  `;
const StyledH2 = styled.h2`
  text-align: center;
  padding-top: 16px;
  padding-bottom: 32px;
`;
const RightBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  padding-bottom: 32px;
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
const Confirmation = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  flex-direction: column;
  gap: 16px;
  height: 50vh;
`;
const StyledConfirmation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default BuyAticket;
