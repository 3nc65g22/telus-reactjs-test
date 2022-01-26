/* eslint-disable */
import React from "react";
import { useField } from "formik";
import BaseTextField from "atom/TextField";

const TextField = ({
  type,
  label,
  multiline,
  readOnly,
  backgroundColor,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <BaseTextField
      inputRef={props.inputRef}
      borderradius={props.borderradius}
      placeholder={props.placeholder}
      keyEvents={props.keyEvents}
      fullWidth
      readOnly={readOnly}
      type={type}
      label={label}
      error={meta.error && meta.touched}
      helperText={meta.touched ? meta.error : ""}
      endAdornment={props.endAdornment}
      {...field}
      uppercased={props.uppercased}
      value={props.value || field.value}
      border="none"
      flexDirection="column"
      alignItems="flex-start"
      withhelpertext
      multiline={multiline}
      labelStyle={{
        fontSize: "14px",
        color: "darker",
        fontWeight: "bold",
      }}
      // backgroundColor={backgroundColor}
    />
  );
};

export default ({
  name,
  label,
  multiline,
  type,
  readOnly,
  disabled,
  ...rest
}) => {
  return (
    <TextField
      name={name}
      label={label}
      readOnly={readOnly || disabled}
      multiline={multiline}
      type={type}
      {...rest}
    />
  );
};
