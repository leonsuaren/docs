import React from 'react';

import * as styled from './index';

export const LinkButton = ({isactive, isbutton, type, text, to, islink,  props }) => {
  return (
    <styled.LinkStyled isactive={isactive} type={type} to={to} isbutton={isbutton} islink={islink} props={props}>{ text }</styled.LinkStyled>
  )
}