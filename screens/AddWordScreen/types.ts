export const initialState = {
  word: '',
  translation: ''
};

export interface AddWordScreenProps {
  [key: string]: string;
}

export interface TextInputsProps {
  name: string | keyof typeof initialState;
  placeholder: string;
}
