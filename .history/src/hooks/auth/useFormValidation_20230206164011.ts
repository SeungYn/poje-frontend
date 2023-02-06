import { useState } from 'react';

type LoginIdDuplicateType = {
  message: string;
  isValid: boolean;
};

export default function useFormValidation() {
  const [loginIdDuplicate, setLoginIdDuplicate] = useState<
    LoginIdDuplicateType | undefined
  >(undefined);

  const validLoginIdDuplicate = useMutation(
    ({ loginId }: { loginId: string }) => {
      return service.auth.loginIdDuplicate({ loginId });
    },
    {
      onSuccess: () => {
        setLoginIdDuplicate({ message: '사용가능한 아이디', isValid: true });
        return true;
      },
      onError: ({ callbackError }) => {
        setLoginIdDuplicate({ message: '사용불가능한 아이디', isValid: false });
        return false;
      },
    }
  );
}
