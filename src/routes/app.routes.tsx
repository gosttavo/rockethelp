import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Details } from '../screens/Details';
import { Register } from '../screens/Register';

//navigator vai configurar as rotas 
const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return(
        //chamando o componente (tela) home dentro do navigator
        //headershown vai tirar o header que aparece na tela
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="home" component={Home}/>
            <Screen name="new" component={Register}/>
            <Screen name="details" component={Details}/>
        </Navigator>
    )
}