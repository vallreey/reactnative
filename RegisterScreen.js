import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleDaftar = () => {
    // Tempatkan logika pendaftaran di sini

    // Navigasi ke halaman utama
    navigation.navigate('Home');

    // Menampilkan alert
    alert(`Halo, ${nama}`);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Nama"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginBottom: 10, paddingHorizontal: 10 }}
        value={nama}
        onChangeText={text => setNama(text)}
      />
      <TextInput
        placeholder="Email"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginBottom: 10, paddingHorizontal: 10 }}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginBottom: 20, paddingHorizontal: 10 }}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity onPress={handleDaftar} style={{ width: 200, backgroundColor: '#00BB9D', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Daftar</Text>
      </TouchableOpacity>
    </View>
  );
}
