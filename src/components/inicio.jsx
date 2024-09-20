
import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar,TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from './icon';
import Ajustes from './ajustes';
import Usuario from './usuario';

const Inicio = () => {
  const [currentScreen, setCurrentScreen] = useState('Inicio');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Inicio':
        return (
          <View style={styles.container}>
            <Text style={styles.contentText}>Contenido de la aplicación</Text>
          </View>
        );
      case 'Ajustes':
        return <Ajustes />;
      case 'Usuario':
        return <Usuario />;
      default:
        return (
          <View style={styles.container}>
            <Text style={styles.contentText}>Contenido de la aplicación</Text>
          </View>
        );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>{renderScreen()}</View>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => setCurrentScreen('Inicio')}>
          <Icon type="AntDesign" name="home" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Search Pressed')}>
          <Icon type="AntDesign" name="search1" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen('Usuario')}>
          <Icon type="AntDesign" name="user" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Cart Pressed')}>
          <Icon type="AntDesign" name="shoppingcart" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen('Ajustes')}>
          <Icon type="AntDesign" name="setting" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 18,
    color: '#333',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
});

export default Inicio;
