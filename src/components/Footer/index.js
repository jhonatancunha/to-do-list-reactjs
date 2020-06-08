import React from 'react';

// STYLES
import { Wrapper, Links } from './style';

// ICONS
import { ReactComponent as GitHub } from '../../assets/github.svg';
import { ReactComponent as Facebook } from '../../assets/face.svg';

const faceLink = 'https://www.facebook.com/jhonatan.cunha.9/';
const gitLink = 'https://github.com/jhonatancunha';

export default () => (
  <Wrapper>
    <Links>
      <a href={gitLink}>
        <GitHub />
      </a>
      <a href={faceLink}>
        <Facebook />
      </a>
    </Links>

    <span>© 2020. Jhonatan Cunha</span>
  </Wrapper>
);
