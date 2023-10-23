import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function RegisterScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Nama"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginBottom: 10, paddingHorizontal: 10 }}
      />
      <TextInput
        placeholder="Email"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginBottom: 10, paddingHorizontal: 10 }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginBottom: 20, paddingHorizontal: 10 }}
      />
      <Button title="Daftar" onPress={() => alert('Register pressed')} />
      <Text style={{ marginTop: 20 }}>Sudah punya akun? <Text style={{ color: 'blue' }} onPress={() => alert('Login pressed')}>Login disini</Text></Text>
    </View>
  );
}
