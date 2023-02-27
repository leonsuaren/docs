import React, { Fragment } from 'react';

import * as com from '../../components';
import * as lay from '../../layout';
import * as styled from './styled';

export const Examples = () => {
  return (
    <Fragment>
      kok
      <styled.ExamplesContainer>
        <com.MediaArrows />
      </styled.ExamplesContainer>
      <lay.Layout>
        <com.DisplayWindow headerTitle='@Media'>
          window
    </com.DisplayWindow>
      </lay.Layout>
    </Fragment>
  )
}