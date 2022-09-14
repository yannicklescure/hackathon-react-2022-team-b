import styled from 'styled-components';

const OrderSummary = () => {
  return (
    <Wrapper>
      <h1>Order Summary</h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex-basis: 33%;
  border: 1px solid black;
`;

export default OrderSummary;