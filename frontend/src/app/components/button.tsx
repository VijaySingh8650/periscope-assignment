import React from 'react';

type TypeOfButton = {
    children: React.ReactNode
}

const Button: React.FC<TypeOfButton> = ({children}) => {
  return (
    <div className='flexAndGapAndCenter border-1 border-gray-300 p-1 rounded-sm'>
      {children}
    </div>
  )
}

export default Button;
