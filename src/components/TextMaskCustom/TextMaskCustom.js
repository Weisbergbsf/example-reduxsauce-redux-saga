import React from "react";
import PropTypes from "prop-types";

import MaskedInput from "react-text-mask";
import { typeMask } from "./typeMask";

const TextMaskCustom = ({ inputRef, mask, ...other }) => {
  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={typeMask(mask)}
      placeholderChar={"\u2000"}
    />
  );
};

TextMaskCustom.propTypes = {
  mask: PropTypes.oneOf(["cep", "telefone"]).isRequired,
};

export default TextMaskCustom;
