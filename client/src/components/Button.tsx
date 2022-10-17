import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ImageSourcePropType,
  Pressable,
} from 'react-native';

interface ButtonProps {
  onTap: Function;
  width: number;
  height: number;
  title: string;
  isNoBg?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  onTap,
  width,
  height,
  title,
  isNoBg = false,
}) => {
  if (isNoBg) {
    return (
      <Pressable
        style={[styles.btn, {width, height, backgroundColor: 'transparent'}]}
        onPress={() => onTap()}>
        <Text style={{fontSize: 16, color: '#3980D9'}}>{title}</Text>
      </Pressable>
    );
  } else {
    return (
      <Pressable style={[styles.btn, {width, height}]} onPress={() => onTap()}>
        <Text style={{fontSize: 16, color: '#FFF'}}>{title}</Text>
      </Pressable>
    );
  }
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    display: 'flex',
    maxHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f15b5d',
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 20,
  },
});
