import React from 'react';

// STYLES
import { Wrapper } from './style';

// ICONS
import { ReactComponent as GitHub } from '../../assets/github.svg';
import { ReactComponent as Facebook } from '../../assets/face.svg';

export default () => (
  <Wrapper>
    <a href="">
      <GitHub />
    </a>
    <a href="">
      <Facebook />
    </a>
  </Wrapper>
);
