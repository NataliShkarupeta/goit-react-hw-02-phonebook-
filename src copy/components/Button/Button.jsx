import { But } from "./Button.styled";
import PropTypes from 'prop-types'; 

export const Button = ({ onClicked ,text}) => {
  return (
    <But type="button" onClick={onClicked}>
      {text}
    </But>
  );
};

Button.prototype = {
  text: PropTypes.string.isRequired,
  onClicked:PropTypes.func.isRequired,
};