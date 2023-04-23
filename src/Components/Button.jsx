import React from 'react';

const Button = ({children}) => {
  return (
    <div className='text-center'>
      <div className='text-center p-2 rounded text-white font-bold bg-red-500 inline-block cursor-pointer active:bg-orange-500 md:text-xl text-md mt-5'>{children}</div>
    </div>
  );
};

export default Button;