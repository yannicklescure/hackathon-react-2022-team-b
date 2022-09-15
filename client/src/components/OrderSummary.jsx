import styled from 'styled-components';

const OrderSummary = () => {
    return (
        <Wrapper>
            <StylezH1>Récapitulatif de la commande</StylezH1>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  flex-basis: 33%;
  border: 1px solid black;
  min-height: 100%;
`;

const StylezH1 = styled.div`
  text-align: center;
`;

export default OrderSummary;