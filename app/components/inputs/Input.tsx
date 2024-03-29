'use client'

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps{
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    formatPrice?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors
}
const Input:React.FC<InputProps> = ({
    id,
    label,
    type = 'text',
    disabled,
    formatPrice,
    required,
    register,
    errors
}) => {
  return (
    <div className="w-full relative">
        <input id={id} disabled={disabled} {...register(id, {required})} placeholder="" />
    </div>
  )
}

export default Input