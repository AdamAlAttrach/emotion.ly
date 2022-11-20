import React from 'react';
import './InputText.css';


function InputText({setText}) {
  const handleChange = (e) => {
    setText(
      e.target.value
    );
  };
  return (
    <div className='container bg-[#f8ecde]'>
      <div className='text-indigo-500'>Talk to me</div>
      <textarea name="text" type="text" className='w-[1000px] h-96' onChange={handleChange}/>
    </div>
    

    
  )
}
export default InputText