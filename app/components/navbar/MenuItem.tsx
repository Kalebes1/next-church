'use client'

import { IconType } from "react-icons"

interface MenuItem{
    onClick: () => void;
    label?: string;
    icon?: IconType;
}

const MenuItem: React.FC<MenuItem> = ({
    onClick,
    label,
    icon: Icon
}) => {
  return (
    <div onClick={onClick} className="px-4 py-3 transition border-b-2 border-transparent hover:border-[#020659] cursor-pointer">
        {label}
        {Icon && <Icon size={25}/>}
    </div>
  )
}

export default MenuItem