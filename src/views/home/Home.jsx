import React from 'react';

import * as lay from '../../layout';
import * as styled from './styled';

export const Home = () => {
  return (
    <lay.HomeLayout>
      <styled.Header>@Media</styled.Header>
      <styled.Text>The <b>@media CSS</b> at-rule can be used to apply part of a style sheet based on the result of one or more media queries. With it, you specify a media query and a block of <b>CSS</b> to apply to the document if and only if the media query matches the device on which the content is being used.</styled.Text>
      <h3>CSS2 Introduced Media Types</h3>
      <styled.Text>The <b>@media</b> rule, introduced in <b>CSS2</b>, made it possible to define different style rules for different media types.
      You could have one set of style rules for computer screens, one for printers, one for handheld devices, one for television-type devices, and so on.
      Unfortunately these media types never got a lot of support by devices, other than the print media type.</styled.Text>
      <h3><b>CSS3</b> Introduced Media Queries</h3>
      <styled.Text>Media queries in <b>CSS3</b> extended the <b>CSS2</b> media types idea: Instead of looking for a type of device, they look at the capability of the device.
      Media queries can be used to check many things, such as:</styled.Text>
      <ul>
        <li>Width and height of the viewport</li>
        <li>Width and height of the device</li>
        <li>Orientation</li>
        <li>Resolution</li>
      </ul>
      <styled.Text> Using media queries are a popular technique for delivering a tailored style sheet to <i>desktops</i>, <i>laptops</i>, <i>tablets</i>, and <i>mobile phones</i>.</styled.Text>
      <h3>Syntax</h3>
    </lay.HomeLayout>
  )
}