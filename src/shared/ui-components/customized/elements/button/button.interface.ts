export interface IButton {
  buttonColor?: string;
  textColor?: string;
  size?: 'large' | 'small';
  onPress: () => void;
  title?: string;
  border?: boolean;
  flex?: boolean;
  children?: any;
  iconType?: number;
  flexAmount?: number;
}
