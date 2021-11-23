import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../../screen/splashScreen/SplashScreen';
import BottomStack from '../bottomRoutes/';
import {Splash, Dash} from '../../constant/contant';

const RootStack = createStackNavigator();

const RootStackScreen = () => (
  <RootStack.Navigator initialRouteName={Splash}>
    <RootStack.Screen
      name={Splash}
      component={SplashScreen}
      options={{
        headerTransparent: true,
        headerTitle: '',
        // headerTintColor: "#E96B03",
      }}
    />
    <RootStack.Screen
      name={Dash}
      component={BottomStack}
      options={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'white',
      }}
    />
  </RootStack.Navigator>
);

export default RootStackScreen;
