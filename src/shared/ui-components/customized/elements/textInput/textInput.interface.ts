export interface ITextInput {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  editable?: boolean;
}
