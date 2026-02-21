// import React from 'react'

const WithAuth = (Component: any) => {
  return function Enhanced() {
    return (
      <>
        <h1>add feature</h1>
        <Component />
      </>
    );
  };
};

export default WithAuth;
