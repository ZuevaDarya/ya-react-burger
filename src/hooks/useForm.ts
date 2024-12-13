import { useState } from 'react';

export const useForm = <T>(defaultValue: T) => {
  const [formData, setFormData] = useState<T>({...defaultValue});

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setFormData({...formData, [name]: value});
  };

  return {
    formData,
    handleChangeInput
  };
};
