export const initialState = {
  word: '',
  translation: '',
  id: ''
};

export interface AddWordScreenProps {
  [key: string]: string;
}

export interface TextInputsProps {
  name: string | keyof typeof initialState;
  placeholder: string;
}
