import React from 'react';

import * as lay from '../../layout';
import * as styled from './styled';

export const Home = () => {
  return (
    <lay.HomeLayout>
      <styled.Header>@Media</styled.Header>
      <styled.Text>The <b>@media CSS</b> at-rule can be used to apply part of a style sheet based on the result of one or more media queries. With it, you specify a media query and a block of <b>CSS</b> to apply to the document if and only if the media query matches the device on which the content is being used.</styled.Text>
      <h3>CSS2 Introduced <b>media type</b>s</h3>
      <styled.Text>The <b>@media</b> rule, introduced in <b>CSS2</b>, made it possible to define different style rules for different <b>media type</b>s.
      You could have one set of style rules for computer screens, one for printers, one for handheld devices, one for television-type devices, and so on.
      Unfortunately these <b>media type</b>s never got a lot of support by devices, other than the print <b>media type</b>.</styled.Text>
      <h3><b>CSS3</b> Introduced Media Queries</h3>
      <styled.Text>Media queries in <b>CSS3</b> extended the <b>CSS2</b> <b>media type</b>s idea: Instead of looking for a type of device, they look at the capability of the device.
      Media queries can be used to check many things, such as:</styled.Text>
      <ul>
        <li>Width and height of the viewport</li>
        <li>Width and height of the device</li>
        <li>Orientation</li>
        <li>Resolution</li>
      </ul>
      <styled.Text> Using media queries are a popular technique for delivering a tailored style sheet to <i>desktops</i>, <i>laptops</i>, <i>tablets</i>, and <i>mobile phones</i>.</styled.Text>
      <h3>Syntax</h3>
      <p>A <b>media query</b> consists of a <b>media type</b> and can contain one or more expressions, which resolve to either <i>true</i> or <i>false</i>.</p>
      <img src='/media-query-syntax.png' alt='Media Query Syntax' />
      <p>The result of the <i>query</i> is <i>true</i> if the specified <b>media type</b> matches the type of device the document is being displayed on and all expressions in the <b>media query</b> are <b>true</b>. When a <b>media query</b> is <b>true</b>, the corresponding style sheet or style rules are applied, following the normal cascading rules.
      Unless you use the not or only operators, the <b>media type</b> is optional and the all type will be implied.</p>
      <h3>Example:</h3>
      <img src='/media-query-example.png' alt='Media Query Example' />
      <h3>Media types</h3>
      <p><b>Media types</b> describe the general category of a device. Except when using the <b>not</b> or <b>only</b> <i>logical operators</i>, the <b>media type</b> is optional and the <b>all</b> type is implied.</p>
      <ul>
        <li>
          <h5>all</h5>
          <p>For all devices.</p>
        </li>
        <li>
          <h5>print</h5>
          <p>For documents viewed on a screen in print preview mode.</p>
        </li>
        <li>
          <h5>screen</h5>
          <p>For screens.</p>
        </li>
      </ul>
      <h3>Logical operators</h3>
      <p>The logical operators <b>not</b>, <b>and</b>, <b>only</b>, and <b>or</b> can be used to compose a complex <b>media query</b>. You can also combine multiple <b>media query</b> into a single rule by separating them with commas.</p>
      <ul>
        <li>
          <h5>not</h5>
          <p>Used to negate a media query, returning true if the query would otherwise return false</p>
          <img src='/notOperator.png' alt='Not Operator' />
        </li>
        <li>
          <h5>and</h5>
          <p>Used for combining multiple media features together into a single media query, requiring each chained feature to return true for the query to be true</p>
          <img src='/andOperator.png' alt='And Operator' />
        </li>
        <li>
          <h5>only</h5>
          <p>Applies a style only if an entire query matches.</p>
          <img src='/onlyOperator.png' alt='Only Operator' />
        </li>
        <li>
          <h5>or</h5>
          <p>Technically using the <b>,</b> operator queries are treated like two separate media queries.</p>
          <img src='/orOperator.png' alt='or Operator' />
        </li>
      </ul>
    </lay.HomeLayout>
  )
}