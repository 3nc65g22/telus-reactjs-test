import React from "react";
import { styled } from "@material-ui/core/styles";
import BaseButton from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

const Text = styled(Typography)(({ theme, variant }) => ({
  fontSize: 12,
  fontWeight: "bold",
  display: "inline-block",
  color:
    variant === "default"
      ? theme.palette.primary.light
      : theme.typography.color.light,
  marginRight: 8,
  marginLeft: 8,
}));

// TODO: MAKE VARIANTS DYNAMIC
const PrimaryButton = styled(BaseButton)(
  ({ theme, radius, width, padding, maxwidth, disabled, height }) => ({
    maxWidth: maxwidth || "unset",
    borderRadius: radius || 22,
    height: height || 44,
    width: width || "100%",
    color: theme.typography.color.light,
    background: disabled
      ? theme.palette.border.main
      : theme.palette.button.main,
    "&:hover": {
      background: theme.palette.button.hover,
    },
    padding: padding || "6px 8px",
  })
);

const DefaultButton = styled(BaseButton)(
  ({ theme, radius, width, padding, maxwidth, disabled, height }) => ({
    maxWidth: maxwidth || "unset",
    borderRadius: radius || 22,
    height: height || 44,
    width: width || "100%",
    color: theme.palette.primary.dark,
    background: disabled
      ? theme.palette.border.main
      : theme.palette.background.light,
    "&:hover": {
      background: theme.palette.background.light,
    },
    border: `1px solid ${theme.palette.primary.light}`,
    padding: padding || "6px 8px",
  })
);

const Loader = () => <CircularProgress size="2rem" color="primary" />;

const Button = ({
  type,
  variant,
  loading,
  label,
  icon,
  onClick,
  radius,
  maxwidth,
  width,
  padding,
  disabled,
  height,
  ...rest
}) => {
  let ButtonComponent;

  switch (variant) {
    case "default":
      ButtonComponent = DefaultButton;
      break;
    default:
      ButtonComponent = PrimaryButton;
  }

  return (
    <ButtonComponent
      type={type}
      variant={variant}
      width={width}
      radius={radius}
      onClick={onClick}
      padding={padding || "6px 8px"}
      disabled={disabled || loading}
      maxwidth={maxwidth}
      height={height}
      {...rest}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          {icon}
          {label && <Text variant={variant}>{label}</Text>}
        </>
      )}
    </ButtonComponent>
  );
};

export default Button;
