import React from 'react';
import Spinner from '../asset/spinner.svg';

const Loading = () => {
  return (
    <>
    <img src={Spinner} alt='로딩'></img>
    </>
  );
}

export default Loading