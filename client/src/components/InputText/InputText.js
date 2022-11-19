import React from 'react';
import './InputText.css';


function InputText() {
  return (
    <div className='container bg-[#f8ecde]'>
      <div className='text-indigo-500'>Talk to me</div>
      <textarea type="text" className='w-[1000px] h-96'/>
      <button class="bg-indigo-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        I feel you
      </button>
    </div>
    

    
  )
}
export default InputText