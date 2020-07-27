import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import TextMaskCustom from "../TextMaskCustom/TextMaskCustom";
import InputAdornment from "@material-ui/core/InputAdornment";
import CircularProgress from "@material-ui/core/CircularProgress";

const Input = ({ name, errors, mask, loading, ...props }) => {
  const error = errors ? errors[name] : false;
  return (
    <TextField
      {...props}
      fullWidth
      variant="outlined"
      autoComplete="off"
      size="small"
      name={name}
      error={error ? true : false}
      helperText={error ? error.message : ""}
      InputProps={{
        inputComponent: mask ? TextMaskCustom : this,
        inputProps: { mask: mask },
        endAdornment: (
          <div>
            {loading && (
              <InputAdornment position="end">
                <CircularProgress size={15} />
              </InputAdornment>
            )}
          </div>
        ),
      }}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  mask: PropTypes.oneOf(["cep", "telefone"]),
  loading: PropTypes.bool,
};

export default Input;
