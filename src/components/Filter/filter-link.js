import React from 'react';

const FilterLink = ({ activeFilter, action, children, onClick }) => {
  const span = { Tag: 'span' };
  const button = { Tag: 'button', onClick, type: 'button' };

  const Component = action === activeFilter ? span : button;

  return (
    <Component.Tag
      onClick={Component.onClick}
      type={Component.type}
      style={{ margin: 10 }}
    >
      {children}
    </Component.Tag>
  );
};

export default FilterLink;
