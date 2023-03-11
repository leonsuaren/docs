import React from 'react';

import * as com from '../../components';
import * as lay from '../../layout';

export const CssContent = () => {

  let cssListItems = [
    <com.LinkButton isbutton='link' to={'media-queries'} text='Media Queries' />,
    <com.LinkButton isbutton='link' to={'display'} text='Display Property' />
  ]

  return (
    <lay.Layout>
      <h1>Css-content</h1>
      <p>Learning CSS is an important skill as a web developer, by giving style to your website you can draw user's attention and make it more interesting.</p>
      <p>With this guide, you will learn some of the basic concepts that you need to know to become a better web developer.</p>
      <com.UnorderLinks listItems={cssListItems} />
    </lay.Layout>
  )
}