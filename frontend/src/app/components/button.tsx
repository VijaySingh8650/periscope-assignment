import React from 'react';

type TypeOfButton = {
    children: React.ReactNode;
    borderColor?: boolean;
    backgroundColor?: string;
    textColor?: string;
}

const Button: React.FC<TypeOfButton> = ({children, borderColor, backgroundColor, textColor}) => {
  return (
    <div className={`flexAndGapAndCenter ${textColor ?? ""} ${backgroundColor ?? ""} ${borderColor ? "border-1 border-gray-300" : "" }  p-1 rounded-sm`}>
      {children}
    </div>
  )
}

export default Button;
