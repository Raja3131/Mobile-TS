import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import appColors from '../styles/appColors';

interface TextFieldProps {
  placeholder: string;
  isSecure?: boolean;
  onTextChange: Function;
}

export const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  isSecure = false,
  onTextChange,
  ...props
}) => {
  const [isPassword, setIsPassword] = useState(false);
  const [focused, setFocused] = React.useState(false);
  const getBorderColor = () => {
    if (focused) {
      return appColors.Blue;
    } else {
      return appColors.grey;
    }
  };

  useEffect(() => {
    setIsPassword(isSecure);
  }, []);

  return (
    <View style={[styles.container, {borderColor: getBorderColor()}]}>
      <TextInput
        placeholder={placeholder}
        autoCapitalize="none"
        secureTextEntry={isPassword}
        onChangeText={text => onTextChange(text)}
        style={styles.textField}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 30,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 20,
    paddingRight: 10,
    borderWidth: 2,
  },
  textField: {
    flex: 1,
    height: 50,
    fontSize: 20,
    color: '#000',
  },
});
