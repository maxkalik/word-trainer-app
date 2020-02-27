export interface SceneProps {
  loading?: boolean;
  children: (false | Element)[] | JSX.Element;
  keyboardAvoidingView: boolean;
}
