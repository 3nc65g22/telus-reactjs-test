import React from 'react';
import { string, bool, oneOfType, number, func } from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { styled } from '@material-ui/core';

import withTextVariant from 'enhancer/withTextVariant';

const Text = styled(Typography)(({
  theme,
  display,
  fontSize,
  textcolor,
  clickable,
  alignitems,
  marginleft,
  alignself,
  paddingright,
  ...rest
}) => ({
  fontSize: fontSize || 12,
  color: textcolor ? theme.typography.color[textcolor] : theme.typography.color.main,
  cursor: clickable ? 'pointer' : 'normal',
  display: display || 'flex',
  alignItems: alignitems,
  marginLeft: marginleft || 0,
  alignSelf: alignself || 'auto',
  paddingRight: paddingright || 0,
  ...rest
}));

const Label = ({ children, color, clickable, alignItems, fontSize, onClick, underline, textStyle, ...rest }) =>
  onClick ? (
    <Link onClick={onClick} underline={underline || 'none'}>
      <Text
        {...textStyle}
        fontSize={fontSize}
        textcolor={color}
        alignitems={alignItems}
        clickable={clickable || onClick ? 1 : 0}
        {...rest}
      >
        {children}
      </Text>
    </Link>
  ) : (
    <Text
      {...textStyle}
      fontSize={fontSize}
      textcolor={color}
      alignitems={alignItems}
      clickable={clickable || onClick ? 1 : 0}
      {...rest}
    >
      {children}
    </Text>
  );

Label.defaultProps = {
  color: null,
  clickable: null,
  children: null
};
Label.propTypes = {
  color: string,
  clickable: bool,
  children: oneOfType([string, number, func])
};

export default withTextVariant(Label);
