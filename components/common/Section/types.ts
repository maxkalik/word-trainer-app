import { ModeTypes } from '../../../state/ModeState';

export interface SectionProps {
  title?: string;
  mode: ModeTypes;
  children: JSX.Element[] | JSX.Element;
}
