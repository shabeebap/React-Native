import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import HelloWorld from '../components/HelloWorld';

const HelloWorldApp = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('HelloCabin4');
      }}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <HelloWorld />
    </Pressable>
  );
};
export default HelloWorldApp;
