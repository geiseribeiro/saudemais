import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaPrincipal from './TELAS/TelaPrincipal';
import LocalizarUBS from './TELAS/LocalizarUBS';
import AgendarConsulta from './TELAS/AgendarConsulta'
//import Configuracoes from './TELAS/Configuracoes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
         <Stack.Screen name="AgendarConsulta" component={AgendarConsulta} />
        <Stack.Screen name="LocalizarUBS" component={LocalizarUBS} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
