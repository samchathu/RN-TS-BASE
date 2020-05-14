import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

import {IButton} from './button.interface';

import defaultStyles from '../../../../styles/styles';
import styles from './button.styles';
import {
  BUTTON_COLOR,
  TEXT_COLOR,
  BUTTON_ICON_TYPE,
  BUTTON_FLEX_AMOUNT,
} from './button.enum';

const {
  bgColorPrimary,
  bgColorSecondary,
  bgColorWhite,
  colorWhite,
  colorPrimary,
  fontSize16,
  contentCenter,
  flex1,
  flexDirectionRow,
} = defaultStyles;
const {buttonLarge, buttonSmall, borderButton, iconText} = styles;

interface State {}

class ButtonCustom extends Component<IButton, State> {
  render() {
    const {
      buttonColor,
      textColor,
      size,
      onPress,
      title,
      border,
      flex,
      children,
      iconType,
      flexAmount,
    } = this.props;

    let buttonStyle: Array<any> = [contentCenter];
    let textStyle: Array<any> = [colorWhite, fontSize16];

    let btnColor: Object =
      buttonColor === BUTTON_COLOR.YELLOW
        ? bgColorSecondary
        : buttonColor === BUTTON_COLOR.BLACK
        ? bgColorPrimary
        : buttonColor === BUTTON_COLOR.WHITE
        ? bgColorWhite
        : bgColorWhite;
    buttonStyle.push(btnColor);

    let btnSize: Object = size === 'large' ? buttonLarge : buttonSmall;
    buttonStyle.push(btnSize);

    let borderBtn: Object = border ? borderButton : {};
    buttonStyle.push(borderBtn);

    let flexBtn: Object = flex
      ? flexAmount === BUTTON_FLEX_AMOUNT.TWO
        ? {flex: 2}
        : flex1
      : {};
    buttonStyle.push(flexBtn);

    let txtColor: Object =
      textColor === TEXT_COLOR.BLACK ? colorPrimary : colorWhite;
    textStyle.push(txtColor);

    return (
      <TouchableOpacity style={buttonStyle} onPress={onPress}>
        {iconType === BUTTON_ICON_TYPE.ICONONLY ? (
          {...children}
        ) : iconType === BUTTON_ICON_TYPE.LEFTICON ? (
          <View style={flexDirectionRow}>
            {children}
            <Text style={[textStyle, iconText]}>{title}</Text>
          </View>
        ) : (
          <Text style={textStyle}>{title}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

export {ButtonCustom as Button};
