import React from 'react';

function Loader(props) {
  const { size } = props;
  return (
    <h1 style={{ fontSize: size === 'small' ? '12px' : '24px' }}>
      Loading....
    </h1>
  );
}

export default Loader;
