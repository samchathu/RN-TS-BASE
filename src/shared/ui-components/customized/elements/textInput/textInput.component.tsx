import React, {Component, Props} from 'react';
import {TextInput} from 'react-native';
import commonColors from '../../../../styles/colors';
import {ITextInput} from './textInput.interface';
import defaultStyles from '../../../../styles/styles';
import styles from './textInput.styles';

const {fontSize16} = defaultStyles;
const {tesInput} = styles;

class TextInputCustom extends Component<ITextInput> {
  render() {
    const {
      placeholder,
      value,
      onChangeText,
      editable,
      ...otherProps
    } = this.props;
    return (
      <TextInput
        ref={(c) => (this._root = c)}
        placeholderTextColor={commonColors.black}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={[fontSize16, tesInput]}
        editable={editable !== undefined ? editable : true}
        {...otherProps}
      />
    );
  }
}

export {TextInputCustom as TextInput};
