import{NavigationContainer} from '@react-navigation/native';
import React from 'react'
import{ createNativeStackNavigator} from '@react-navigation/native-stack';
import Homescreen from  '../screens/Homescren.js'
import Welcomescreen from '../screens/welcomescreen.js';
const  Stack =createNativeStackNavigator();
function AppNavigation(){return(
    <NavigationContainer>
<Stack.Navigator initialRouteName='Home' screenOptions={{headerShown :false}}>
<Stack.Screen name='Home' component={Homescreen}/>
<Stack.Screen name='Welcome' component={Welcomescreen}/>

</Stack.Navigator>


    </NavigationContainer>)
    }
export default AppNavigation