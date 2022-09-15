import { useEffect, useState } from "react";
import styled from "styled-components";

const CaptchaColorTile = ({ showCaptchaModal, setIsCaptchaValidated, toggleCaptchaModal }) => {
  const [color, setColor] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setColor(`rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`);
  }, []);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  
  return (
    <ImageTile color={color} onClick={handleClick}>
      {isClicked ? "✓" : ""}
    </ImageTile>
  );
};

const ImageTile = styled.button`
  background-color: ${({color}) => color};
  height: 30%;
  width: 30%;
  margin: 5px;
  font-size: 4em;
  color: #fff;
`;

export default CaptchaColorTile;
