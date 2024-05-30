
import React, { useState } from 'react'
import style from './dropdown.module.css'

export default function Dropdown(props) {

  const { options } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);


  return (
    <div className={style.container}>
      <h1>Should you use a dropdown</h1>

        <div className={style.dropdown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          
          <div className={style.selectedOptions}>
            <span> Select </span>
            <img src="https://static.thenounproject.com/png/551749-200.png" alt="" />
          </div>
          
        

        {isOpen && ( 
          <div className={style.options}>
            {options.map((option, index) => (
              <div key={index}
                className={style.option}
                onClick={handleMouseLeave}>
                {option.text}
              </div>
            ))}
          </div>
        )}
        </div> 
    </div>
  )
}
