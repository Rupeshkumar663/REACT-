import React from 'react'

function Card({name}) {
  return (
    <>
     
     <div class="flex flex-col items-center p-7 rounded-2xl">
       <div>
         <img class="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/35667495/pexels-photo-35667495.jpeg" />
       </div>
     <div class="flex">
        <h2 className='bg-gray-500 '>Name:{name}</h2>
       <span>Class Warfare</span>
       <span>The Anti-Patterns</span>
       <span class="flex">
        <span>No. 4</span>
       <span>·</span>
      <span>2025</span>
      </span>
     </div>
    </div>
    </>
  )
}

export default Card