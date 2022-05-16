import { KeyboardAvoidingView, View, TouchableOpacity,
     TextInput, Image, Text, StyleSheet, Animated,
    Keyboard } from 'react-native';
import React, {useState, useEffect} from 'react';
import Principal from './Principal';


export default function Login({navigation}) {

    const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
    const [opacity] = useState(new Animated.Value(0));
    const [logo] = useState(new Animated.ValueXY({x: 200, y: 178}));
    const [email, onChangeText] = useState("");
    const [senha, onChangePass] = useState("");

    const login = (email, senha) => {
        if (email === 'rsdomeo'){
            if (senha === '1234'){
                navigation.navigate('Principal', {
                    id: 30
                })
            } else {
                alert('Senha incorreta!')
            }
        } else {
            alert('email não cadastrado!')
        }
    }

    useEffect(()=> {
        keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 4,
                bounciness: 20
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 200
            })
        ]).start();
    }, []);

    function keyboardDidShow(){
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 55,
                duration: 200
            }),
            Animated.timing(logo.y, {
                toValue: 65,
                duration: 200
            }),
        ]).start();
    }

    function keyboardDidHide(){
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 200,
                duration: 200
            }),
            Animated.timing(logo.y, {
                toValue: 178,
                duration: 200
            }),
        ]).start();
    }

  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image
        style={{
            width: logo.x,
            height: logo.y
        }}
        source={require('../assets/logo.png')}
        />
      </View>

      <Animated.View
       style={[
           styles.container,
           {
               opacity: opacity,
               transform: [
                   { translateY: offset.y}
               ]
           }
        ]}
       >
        <TextInput style={styles.input}
        placeholder="Email"
        value={email}
        autoCorrect={false}
        onChangeText={onChangeText}  
        keyboardType='email-address'
        autoCapitalize='none'      
        />
      
        <TextInput style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        autoCorrect={false}
        onChangeText={onChangePass}
        value={senha}
        autoCapitalize='none'       
        />

        <TouchableOpacity style={styles.btnSubmit}
        onPress={() => login(email, senha)}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}
        onPress={() => navigation.navigate('Cadastro', {
            id: 30
        }
        )}>
          <Text style={styles.registerText}>Criar conta gratuita</Text>
        </TouchableOpacity>

      </Animated.View>
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
    paddingBottom: 80
  },
  input:{
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
    borderColor: '#000',
    borderWidth: 1
  },
  btnSubmit:{
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  btnRegister:{
    marginTop: 10
  },
  submitText:{
    color: '#FFF',
    fontSize: 18
  },
  registerText:{
    color: '#35AAFF'
  }
})