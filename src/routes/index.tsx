import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackRoute from './stackRoutes/StackRoute';
import {navigationRef} from '../../rootNavigator';

const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StackRoute />
    </NavigationContainer>
  );
};

export default Routes;
