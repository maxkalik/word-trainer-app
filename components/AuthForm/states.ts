import { SignInTextInputProps, SignInFieldsValueProps } from './types';

export const initialState: SignInFieldsValueProps = {
  email: {
    value: '',
    validMsg: null
  },
  password: {
    value: '',
    validMsg: null
  }
};

export const inputFields: SignInTextInputProps[] = [
  {
    name: 'email',
    placeholder: 'email',
    textContentType: 'emailAddress',
    keyboardType: 'email-address',
    validation: {
      required: true,
      isEmail: true,
      message: null
    }
  },
  {
    name: 'password',
    placeholder: 'password',
    textContentType: 'password',
    keyboardType: 'default',
    validation: {
      required: true,
      minLength: 6,
      maxLength: 25,
      message: null
    }
  }
];
