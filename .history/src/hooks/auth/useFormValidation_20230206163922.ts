import { useState } from 'react';

type LoginIdDuplicateType = {
  message: string;
  isValid: boolean;
};

export default function useFormValidation() {
  const [loginIdDuplicate, setLoginIdDuplicate] = useState<
    LoginIdDuplicateType | undefined
  >(undefined);
}
