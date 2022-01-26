import React from 'react';
import { styled } from '@material-ui/core';

const Wrapper = styled('div')(() => ({
  position: 'relative',
  display: 'inline-block',
  '&:hover .tooltiptext': {
    visibility: 'visible'
  }
}));

const Tooltip = styled('span')(({ theme }) => ({
  visibility: 'hidden',
  backgroundColor: theme.palette.background.dark,
  color: theme.typography.color.light,
  textAlign: 'center',
  padding: '5px 10px',
  borderRadius: '5px',
  position: 'absolute',
  zIndex: '1'
}));

const TextVariant = (BaseComponent) => ({ variant, textWidth, ...rest }) => {
  switch (variant) {
    case 'nowrap':
      return (
        <Wrapper>
          <BaseComponent
            {...rest}
            display="block"
            textStyle={{ width: textWidth, whitespace: 'nowrap', overflow: 'hidden', textoverflow: 'ellipsis' }}
          />
          <Tooltip className="tooltiptext">{rest?.children || ''}</Tooltip>
        </Wrapper>
      );
    default:
      return <BaseComponent {...rest} />;
  }
};

export default TextVariant;
