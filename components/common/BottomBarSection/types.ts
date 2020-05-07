import { ModeTypes } from '../../../state/ModeState';

export interface BottomBarSectionProps {
  offsetValue: number;
  children: JSX.Element | JSX.Element[];
  mode: ModeTypes;
}
