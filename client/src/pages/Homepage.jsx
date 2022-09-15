import styled from 'styled-components';
import Banner from '../components/Banner';

const Homepage = ({ navbarHeight }) => {
  return (    
    <Wrapper>
      <Banner navbarHeight={navbarHeight} />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default Homepage;
