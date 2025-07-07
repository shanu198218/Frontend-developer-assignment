import React from 'react';

const Container = ({ children, as: Tag = 'div', className, ...rest }) => {
  return (
    <Tag
      {...rest}
      className={`container max-w-7xl mx-auto px-4 font-body ${className || ''}`}
    >
      {children}
    </Tag>
  );
};

export default Container;
