import { useState } from 'react';

export const useForm = <T extends object>(defaultValue: T) => {
  const [formData, setFormData] = useState<T>({ ...defaultValue });
  const [isChangedData, setIsChangedData] = useState<boolean>(false);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setFormData({ ...formData, [name]: value });
    setIsChangedData(true);
  };

  return {
    formData,
    handleChangeInput,
    isChangedData, 
    setIsChangedData
  };
};
