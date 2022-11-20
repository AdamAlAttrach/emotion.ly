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
      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 home">Talk to me</label> 
      <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..." onChange={handleChange}></textarea> 
    </div>
    

    
  )
}
export default InputText