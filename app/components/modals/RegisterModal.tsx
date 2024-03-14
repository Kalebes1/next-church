'use client'

import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from "react-icons/fa";
import { useCallback, useState} from 'react';

import { FieldValues,SubmitHandler, useForm } from 'react-hook-form'

import useRegisterModal from '@/app/hooks/useRegisterModal';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsloading] = useState(false)

  const { register, handleSubmit, formState: { errors }
  } = useForm<FieldValues>({ defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsloading(true);

    axios.post('/api/register', data)
    .then(()=>{
      registerModal.onClose();
    })
    .catch((error)=>{
      console.log(error);
    })
    .finally(()=>{
      setIsloading(false);
    })
  }

  const bodyContent=(
    <div className='flex flex-col gap-4'>
        <Heading
          title='Bem vindo'
          subtitle='Crie sua conta!'
        />
        <Input  
        id="email"
        label='E-mail'
        disabled={isLoading}
        register={register}
        errors={errors}
        required


        />
    </div>
  )


  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Registrar"
      actionLabel='Continuar'
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      />
  )
}

export default RegisterModal