import { initialState } from './states';

export interface SignInFieldsValueProps {
  email: string;
  password: string;
}

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
}

export interface AuthFormProps {
  onForgotPasswordPress?: (email: string, password: string) => void;
  requestType: 'signin' | 'signup';
  submitButtonName: string;
}
