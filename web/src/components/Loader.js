import React from 'react';

function Loader(props) {
  const { size, loading } = props;
  const loaderHtml = loading && (
    <h1 style={{ fontSize: size === 'small' ? '12px' : '24px' }}>
      Loading....
    </h1>
  );
  return <> {loaderHtml}</>;
}

export default Loader;
