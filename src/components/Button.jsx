import React from 'react'

const Button = ({onClick,children,icon}) => {
  return <button onClick={onClick} className='flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200'>
   <span className='w-fit h-fit'>{icon}</span>
   {children}</button>;
}

export default Button