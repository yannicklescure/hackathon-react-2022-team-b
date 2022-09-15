import styled from 'styled-components';
import { COLORS } from "../constants";

const Popup = (props) => {
  
  return (
    <StyledPopup showPopup={props.showPopup}>
      <div className="popup-inner">
        <div onClick={props.togglePopup}>X</div>
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
`;

export default Popup;