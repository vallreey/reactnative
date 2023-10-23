import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, Button,Linking, Pressable, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default function LoginScreen({ navigation }) {
  const goToRegister = () => {
    navigation.navigate('Register');
  };

  const goToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
        style={styles.tinyLogo}
        source={require('./assets/headerhijau.png')}
      />
      <Image
        style={styles.Logo}
        source={require('./assets/CalDiFit2.png')}
      />
    <View style={styles.rectangle}></View>
      <TextInput
        placeholder="Email"
        style={{borderRadius: 10,top: -150, height: 40, borderColor: 'gray', borderWidth: 1, width: 240, marginBottom: 10, paddingHorizontal: 10 }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={{borderRadius: 10,top: -150, height: 40, borderColor: 'gray', borderWidth: 1, width: 240, marginBottom: 20, paddingHorizontal: 10 }}
      />
      <Text style={{ color: "#00BB9D", top: -183, marginTop: 20, fontSize: 13,left: 67,}} onPress={goToRegister}>Lupa Password?</Text>
      
      <TouchableOpacity onPress={goToHome} style={{ top: -175, width: 240, backgroundColor: '#00BB9D', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Login</Text>
      </TouchableOpacity>
      <Text style={{ top: -150, marginTop: 20 }}>Belum punya akun? <Text style={{ color: 'blue' }} onPress={goToRegister}>Daftar disini</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 450,
        height: 390,
        top: -180,
    },
    title: {
        position: 'absolute',
        Top:-200,
        color: "black",
        fontSize:35,
        textAlign: 'center',
        fontWeight: "bold",
      },
    Logo: {
        position: 'absolute',
        top: 98,
        width: 240,  
        height: 240, 
    },
      rectangle: {
        position: 'absolute',
        top: 252,
        left: 53,
        width: 280,  
        height: 390, 
        backgroundColor: 'white',
        borderRadius: 15,
      },
});