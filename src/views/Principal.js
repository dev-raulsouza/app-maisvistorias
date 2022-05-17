import { KeyboardAvoidingView, View, TouchableOpacity,
    TextInput, Image, Text, StyleSheet, Animated,
   Keyboard } from 'react-native';
import React, {useState, useEffect} from 'react';

export default function Principal({navigation}) {

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image
        style={{
            width: 300,
            height: 300
        }}
        source={require('../assets/logo.png')}
        />
      </View>

      <View
       style={[
           styles.container
        ]}
       >
        
        <TouchableOpacity style={styles.btnSubmit}
        onPress={() => {navigation.navigate('Cliente', {
          id: 30
          })}}>
          <Text style={styles.submitText}>Nova Vistoria</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSubmit}
        onPress={() => {}}>
          <Text style={styles.submitText}>Consultar Vistorias</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  containerLogo:{
    flex:1,
    justifyContent: 'center',
  },
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 100
  },
  input:{
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 20,
  },
  btnSubmit:{
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 10,
  },
  btnRegister:{
    marginTop: 10,
  },
  submitText:{
    color: '#FFF',
    fontSize: 18
  },
  registerText:{
    color: '#FFF'
  }
})