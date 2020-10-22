import React from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#667eea', '#764ba2']} style={{flex:1}}>
      <View style={styles.container}>
        <Image source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/91-QmTLQzbL._RI_.jpg'}}
        style={{width: 300, height: 200, alignSelf: "center"}} />
        <TextInput
              style={styles.input}
              placeholder="Enter quantity here"
              placeholderTextColor={'#fff'}
              multiline={true}
              autoCapitalize="sentences"
              underlineColorAndroid="transparent"
              selectionColor={'white'}
              maxLength={30}
              returnKeyType="done"
              autoCorrect={false}
              blurOnSubmit={true}
            /> 
      <Button 
        title="Order Now"
        onPress={() => Alert.alert('Order placed successfully')}
      />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },

  input: {
    alignSelf: 'center',
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 18
  }
});

