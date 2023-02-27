import React, { Fragment } from 'react';

import * as com from '../../components';
import * as lay from '../../layout';
import * as styled from './styled';

export const Examples = () => {
  return (
    <Fragment>
      <lay.Layout>
        <h1>Examples</h1>
        <p>As mentioned before the <b>@media CSS</b> at-rule can be used to apply part of a style sheet based on the result of one or more media queries. In other words, the behavior of the elements displayed will change according to the width of the device that you are using, it could be a <i>mobile</i>, <i>tablet</i>, <i>laptop</i>, or <i>Desktop</i>. We can control any property that we want to change it could be the size of an element, its position, its background, etc.
        </p>
        <p>In this example I'm using the most common <b>Media Queriers Breakpoints</b> for <i>mobile</i>, <i>tablet</i>, <i>laptop</i>, and <i>Desktop</i> devices, to demonstrate how we can manipulate every property that we want.</p>
        <p>A <b>Breakpoint</b> is a point at which information and design of website adjust to offer optimal user experience.</p>
        <h3>Breakpoints</h3>
        <ul>
          <li><b>Mobile:</b> 320px — 480px</li>
          <li><b>Tablet:</b> 481px — 768px</li>
          <li><b>Laptop:</b> 769px — 1024px</li>
          <li><b>Desktop:</b> 1025px — 1200px</li>
        </ul>
      </lay.Layout>
      <styled.ExamplesContainer>
        <com.MediaArrows />
      </styled.ExamplesContainer>
      <lay.Layout>
        <styled.MediaBreakpointContent />
        <styled.MediaBreakpointContainer />
        <p>This square will change its color depending on the size of the window, if it's between 320 pixels and 480 pixels its color will be <styled.MediaColorMobile>Mobile</styled.MediaColorMobile>
          , between 481 pixels and 768 pixels its color will be <styled.MediaColorTablet>Tablet</styled.MediaColorTablet>, between 769 pixels and 1024 pixels its color will be <styled.MediaColorLaptop>Laptop</styled.MediaColorLaptop>
          , between 1035 pixels and 1200 pixels its color will be <styled.MediaColorDesktop>Desktop</styled.MediaColorDesktop>, and for lager devices its color will be <styled.MediaColorLarge>Large Devices</styled.MediaColorLarge>
        </p>
        <p>Resize your window to see it in action</p>
      </lay.Layout>
    </Fragment>
  )
}