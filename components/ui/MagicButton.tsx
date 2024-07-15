import React from 'react'

const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}:{
    title: string; icon: React.ReactNode; position: string; handleClick?: () => void; otherClasses?: string; 
}) => {
  return (
    <button className="p-[3px] relative inline-flex" onClick={handleClick}>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className={`px-8 py-2 inline-flex bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent gap-2 ${otherClasses}`}>
            <div className='py-1'>
                {position === 'left' && icon}
            </div>
            {title}
            {position === 'right' && icon}
        </div>
    </button>
  )
}

export default MagicButton