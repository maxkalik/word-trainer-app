import { GestureResponderEvent } from 'react-native';
import { UserValueTypes } from '../../state/UserState';
import { initialState } from './states';

export interface SignInFieldsValueProps {
  email: {
    value: string;
    validMsg: string | null;
  };
  password: {
    value: string;
    validMsg: string | null;
  };
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
  onForgotPasswordPress?: (event: GestureResponderEvent) => void;
  requestType: 'signin' | 'signup' | 'link with credential';
  submitButtonName: string;
  user?: UserValueTypes;
}
