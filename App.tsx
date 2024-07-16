import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Alert, ScrollView } from 'react-native';
import Block from './Components/Block';
import TextInputCustom from './Components/TextInputComponent'; // Rename để tránh xung đột
import ButtonCustom from './Components/ButtonComponent'; // Rename để tránh xung đột
import Banner from './Components/Banner';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [courseName, setCourseName] = useState('');
  const [courseTime, setCourseTime] = useState('');
  const [address, setAddress] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const themeStyles = darkTheme ? styles.darkTheme : styles.lightTheme;
  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(?:\+84|0)(?:3[2-9]|5[2689]|7[06-9]|8[1-689]|9[0-46-9])[0-9]{7}$/;

    if (!name || !email || !phone || !courseName || !courseTime || !address || !contactPhone) {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ thông tin.');
      return false;
    }

    if (!emailRegex.test(email)) {
      Alert.alert('Lỗi', 'Email không hợp lệ.');
      return false;
    }

    if (!phoneRegex.test(phone) || !phoneRegex.test(contactPhone)) {
      Alert.alert('Lỗi', 'Số điện thoại không hợp lệ.');
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (validate()) {
      Alert.alert('Thành công', 'Đăng ký thành công!');
    }
  };
  return (
    <ScrollView>
      <View style={[styles.container, themeStyles]}>
        <Banner imageUrl={{}} />
        <Block title="Thông Tin Cá Nhân">
          <TextInputCustom placeholder="Họ và tên" value={name} onChangeText={setName} />
          <TextInputCustom placeholder="Email" value={email} onChangeText={setEmail} />
          <TextInputCustom placeholder="Số điện thoại" value={phone} onChangeText={setPhone} />
        </Block>

        <Block title="Thông Tin Khóa Học">
          <TextInputCustom placeholder="Tên khóa học" value={courseName} onChangeText={setCourseName} />
          <TextInputCustom placeholder="Thời gian học" value={courseTime} onChangeText={setCourseTime} />
        </Block>

        <Block title="Thông Tin Liên Hệ">
          <TextInputCustom placeholder="Địa chỉ" value={address} onChangeText={setAddress} />
          <TextInputCustom placeholder="Số điện thoại liên hệ" value={contactPhone} onChangeText={setContactPhone} />
        </Block>

        <ButtonCustom title="Đăng Ký" onPress={handleSubmit} />
        <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
          <Text style={styles.themeToggleText}>Đổi Theme</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logo: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  themeToggle: {
    marginTop: 16,
    padding: 10,
    backgroundColor: '#6200EE',
    borderRadius: 10,
  },
  themeToggleText: {
    color: '#fff',
    textAlign: 'center',
  },
  lightTheme: {
    backgroundColor: '#fff',
  },
  darkTheme: {
    backgroundColor: '#333',
  },
});

export default App;
