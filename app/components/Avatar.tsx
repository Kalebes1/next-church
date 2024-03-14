import React from 'react'

import Image from "next/image";

interface AvatarProps{
    src: string | null | undefined;
    onClick?: () => void;
}

const Avatar: React.FC<AvatarProps> = ({ src, onClick }) => {
  return (
    <Image
        onClick={onClick }
        className='rounded-full'
        height="30"
        width="30"
        alt="avatar"
        src={src || "/images/placeholder.jpg"}
    />
        
  )
}

export default Avatar