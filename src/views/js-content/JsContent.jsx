import React from 'react';

import * as lay from '../../layout';
import * as com from '../../components';

export const JsContent = () => {

  let jsListItems = [
    <com.LinkButton isbutton='link' to={'functions'} text='Functions' />,
    <com.LinkButton isbutton='link' to={'spread-operator'} text='Spread Operator' />
  ]

  return (
    <lay.Layout>
      <h1>JS-Content</h1>
      <com.UnorderLinks listItems={jsListItems}/>
    </lay.Layout>
  )
}