import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Details from '../pages/Details';

const AppRoutes: React.FC = () => {
    const Stack = createNativeStackNavigator();
    return(
        <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </>
    )
}

export default AppRoutes;