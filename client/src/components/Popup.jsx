import styled from 'styled-components';
import { COLORS } from "../constants";

const Popup = (props) => {
  
  return (
    <StyledPopup showPopup={props.showPopup}>
      <div className="popup-inner">
        <button className={'close-button'} onClick={props.togglePopup}>X</button>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
    </StyledPopup>
  )

}

const StyledPopup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 9000;
  transform: translate(-50%, -50%);
  background: ${COLORS.light};
  padding: 35px 50px;
  display: ${props => props.showPopup ? "block" : "none"};
  text-align: center;
  border-radius: 4px;
  border: 1px solid ${COLORS.dark};

  .popup-inner {
    position: relative;

    h3 {
      font-size: 38px;
    }
  
    p {
      font-size: 18px;
      margin-top: 25px;
    }
  
    .close-button {
      position: absolute;
      top: -25px;
      right: -35px;
    }
  }
`;

export default Popup;