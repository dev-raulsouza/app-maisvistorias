import Login from './src/views/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Principal from './src/views/Principal';
import Cadastro from './src/views/Cadastro';
import UploadImagens from './src/views/UploadImagens';
import Cliente from './src/views/Cliente';


export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Principal" component={Principal}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Cliente" component={Cliente}/>
        <Stack.Screen name="Envio de Imagens" component={UploadImagens}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}