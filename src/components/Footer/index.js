import React from 'react';

// STYLES
import { Wrapper, Links } from './style';

// ICONS
import { ReactComponent as GitHub } from '../../assets/github.svg';
import { ReactComponent as Facebook } from '../../assets/face.svg';

export default () => (
  <Wrapper>
    <Links>
      <a href="">
        <GitHub />
      </a>
      <a href="">
        <Facebook />
      </a>
    </Links>

    <span>© 2020. Jhonatan Cunha</span>
  </Wrapper>
);
