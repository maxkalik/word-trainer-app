export interface SignInFieldsValueProps {
  email: string;
  password: string;
}

export const initialState: SignInFieldsValueProps = {
  email: '',
  password: ''
};

interface ValidationProps {
  required: boolean;
  isEmail?: boolean;
  minLength?: number;
  maxLength?: number;
  message: string | null;
}

export interface SignInTextInputProps {
  name: keyof typeof initialState;
  placeholder: string;
  textContentType?: 'emailAddress' | 'password';
  keyboardType?: 'email-address' | 'default';
  validation: ValidationProps;
  validMsg: string | null;
}
