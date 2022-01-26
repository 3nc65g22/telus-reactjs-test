/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { styled } from "@material-ui/core/styles";
import BaseInputAdornment from "@material-ui/core/InputAdornment";
import InputBase from "@material-ui/core/InputBase";
import FormHelperText from "@material-ui/core/FormHelperText";
import Box from "@material-ui/core/Box";
import KeyboardEventHandler from "react-keyboard-event-handler";

import Label from "atom/Label";

export const Input = styled(InputBase)(
  ({
    borderradius,
    bgcolor,
    height,
    bordercolor,
    fontSize,
    margin,
    padding,
    border,
    flexDirection,
    boxshadow,
    theme,
    multiline,
    color,
  }) => ({
    color: color,
    boxShadow: boxshadow,
    diplay: "flex",
    flexDirection: flexDirection || "row",
    padding: padding,
    border: border || "1px solid",
    margin: margin || "15px 0 0",
    width: "100%",
    height: multiline ? 100 : height || 44,
    borderColor: bordercolor || theme.palette.border.main,
    background: bgcolor || theme.palette.background.main,
    borderRadius: borderradius || 0,
    "& input": {
      borderRadius: borderradius || 0,
      padding: "15px 16px",
      fontSize: fontSize || "1rem",
    },
    "& textarea": {
      borderRadius: borderradius || 0,
      height: "100% !important",
      overflowY: "auto !important",
      padding: "10px",
      fontSize: fontSize || "1rem",
    },
  })
);

const InputAdornment = styled(BaseInputAdornment)(() => ({
  paddingLeft: 10,
}));

export const HelperText = styled(FormHelperText)(
  ({ fontSize, color, error, theme }) => ({
    fontsize: fontSize || 12,
    color: error ? theme.typography.color.error : color,
    textTransform: "capitalize",
    margin: 0,
    height: 15,
    marginBottom: 4,
    textAlign: "right",
    fontSize: 11,
  })
);

const Textfield = ({
  backgroundColor,
  border,
  borderColor,
  height,
  icon: Icon,
  helperText,
  label,
  name,
  error,
  fullWidth,
  onChange,
  placeholder,
  keyEvents,
  flexDirection,
  boxShadow,
  value,
  labelStyle,
  type,
  readOnly,
  withhelpertext,
  alignItems,
  inputProps,
  uppercased = false,
  ...rest
}) => {
  return (
    <Box
      flexDirection={flexDirection || "row"}
      width={fullWidth ? "100%" : "unset"}
    >
      <Label {...labelStyle} htmlFor={name}>
        {label}
      </Label>
      <KeyboardEventHandler
        handleKeys={keyEvents && keyEvents.handleKeys}
        onKeyEvent={keyEvents && keyEvents.onKeyEvent}
        style={{ width: "100%" }}
      >
        <Input
          id={name}
          name={name}
          startAdornment={
            Icon && (
              <InputAdornment position="start">
                <Icon color="primary" />
              </InputAdornment>
            )
          }
          {...rest}
          type={type}
          bordercolor={borderColor}
          border={border}
          bgcolor={backgroundColor}
          height={height}
          autoComplete="off"
          inputProps={{
            ...inputProps,
            "aria-label": "naked",
            readOnly: readOnly,
            autoComplete: "off",
          }}
          fullWidth={fullWidth}
          onChange={onChange && onChange}
          placeholder={placeholder && placeholder}
          value={uppercased ? value?.toUpperCase() : value}
          boxshadow={boxShadow}
        />
      </KeyboardEventHandler>
      <HelperText id={`${name}-text`} error={error} color="textColor">
        {helperText}
      </HelperText>
    </Box>
  );
};

export default Textfield;
