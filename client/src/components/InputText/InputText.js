import React from 'react';
import './InputText.css';


function InputText({setText}) {
  const handleChange = (e) => {
    setText(
      e.target.value
    );
  };
  return (
    <div className='container flex bg-[#f8ecde] pl-10'>
    <div>
      <h1 class="swag text-9xl pb-10">emotion.ly</h1> 
    </div>
      <textarea id="message" rows="4" class="outline-none bg-slate-400/10 rounded-sm border-b w-[600px] h-[150px] ml-[-60px] mt-[150px] border-[#242424] text-[#840000] placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 hover:border-[#F7AB0A]/40" placeholder="Write your thoughts here..." onChange={handleChange}></textarea> 

    </div>
    
    

    
  )
}
export default InputText