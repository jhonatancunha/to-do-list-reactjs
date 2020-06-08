import React from 'react';

// STYLES
import { Span } from './style';

const FilterLink = ({ activeFilter, action, children, onClick, component }) => {
  const span = { Tag: Span };
  const button = { Tag: component, onClick, type: 'button' };

  const Component = action === activeFilter ? span : button;

  return (
    <Component.Tag onClick={Component.onClick} type={Component.type}>
      {children}
    </Component.Tag>
  );
};

export default FilterLink;
