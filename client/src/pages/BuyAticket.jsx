import styled from 'styled-components';

// components
import TicketForm from '../components/TicketForm';
import OrderSummary from '../components/OrderSummary';

const BuyAticket = () => {
  return (
    <Wrapper>
      <h1>Form Page</h1>

      <FlexContainer>
        <TicketForm></TicketForm>
        <OrderSummary></OrderSummary>
      </FlexContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const FlexContainer = styled.div`
  display: flex;
`;

export default BuyAticket;
