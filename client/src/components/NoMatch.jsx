import styled from 'styled-components';
import KevError from "../assets/KEV-404-ERROR.png";

const NoMatch = (kevError) => {

  return (
      <div>
        <Wrapper>
          <NotFoundText>4</NotFoundText>
          <KevErrorContainer image={KevError}></KevErrorContainer>
          <NotFoundText>4</NotFoundText>
        </Wrapper>
        <KevErrorMessage>Oh non! Vous avez eu une erreur 404-KEV. Cliquez <a href={"#"} onClick={() => {window.open(KevError,"_blank")}}>ici</a> afin d'avoir un meilleur apperçu de KEV</KevErrorMessage>
      </div>
  )
}

const Wrapper = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const NotFoundText = styled.div `
  font-size: 25rem;
`

const KevErrorContainer = styled.div `
  height: 20rem;
  width: 20rem;
  background: url(${({image}) => image});
   background-repeat: no-repeat;
   background-size: contain;
   align-self: center;
   margin-right: -7rem;
}
`

const KevErrorMessage = styled.div `
  text-align: center;
`

export default NoMatch;