import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  Button,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');
  const [subscribe, setSubscribe] = useState(false);

  const handleSubmit = () => {
    const formData = {
      name,
      email,
      password,
      phone,
      age,
      bio,
      subscribe,
    };

    console.log('========== FORM SUBMITTED ==========');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Phone:', phone);
    console.log('Age:', age);
    console.log('Bio:', bio);
    console.log('Subscribe:', subscribe);
    console.log('Full Form Data:', JSON.stringify(formData, null, 2));
    console.log('====================================');

    const message = `Form Submitted Successfully!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nAge: ${age}\nSubscribe: ${subscribe}\n\n(See console for full output)`;
    if (Platform.OS === 'web') {
      alert(message);
    } else {
      Alert.alert('Form Submitted', message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.title}>React Native Form</Text>

      {/* Name Input */}
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      {/* Email Input */}
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Input */}
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        autoCapitalize="none"
        value={password}
        onChangeText={setPassword}
      />

      {/* Phone Input */}
      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      {/* Age Input */}
      <Text style={styles.label}>Age:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />

      {/* Bio / Multiline Input */}
      <Text style={styles.label}>Bio / Comments:</Text>
      <TextInput
        style={[styles.input, styles.multilineInput]}
        placeholder="Enter additional details"
        multiline
        numberOfLines={4}
        value={bio}
        onChangeText={setBio}
      />

      {/* Switch Component */}
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Subscribe to updates:</Text>
        <Switch
          value={subscribe}
          onValueChange={setSubscribe}
        />
      </View>

      {/* Submit Button */}
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    width: 280,
    marginTop: 10,
    marginBottom: 4,
  },
  input: {
    width: 280,
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    borderRadius: 4,
  },
  multilineInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  switchContainer: {
    width: 280,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 14,
  },
  buttonContainer: {
    width: 280,
    marginTop: 14,
    marginBottom: 30,
  },
});
