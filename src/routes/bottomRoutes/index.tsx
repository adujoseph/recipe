import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import HomeScreen from '../../screen/home/Home';
import UploadScreen from '../../screen/upload/Upload';
import NotificationScreen from '../../screen/notification/Notification';
import ScanScreen from '../../screen/scan/Scan';
import ProfileScreen from '../../screen/profile/ProfileScreen';
import DetailsScreen from '../../screen/productDetails/ProductDetails';
import {Colors} from '../../constant/theme';
import {Details, Home, Scan, Upload} from '../../constant/contant';

const Tabs = createBottomTabNavigator();

const CustomTabBar = ({state, descriptors, navigation}: any) => {
  return (
    <View
      style={{
        height: hp(10),
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 0.5,
        borderTopColor: 'lightgray',
        ...Platform.select({
          ios: {
            shadowColor: '#000',
            shadowOffset: {width: 1, height: 3},
            shadowOpacity: 0.2,
            shadowRadius: 1,
          },
          android: {
            elevation: 5,
          },
        }),
      }}>
      {state.routes.map((route: any, index: any) => {
        const isFocused = state.index === index;
        const {options} = descriptors[route.key];
        const onPress = () => {
          console.log(route.name, index);
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity
            key={index}
            onPress={() => onPress(index)}
            accessibilityRole="button"
            testID={options.tabBarTestID}>
            {index === 0 && (
              <View style={styles.icon}>
                {isFocused ? (
                  <Foundation name="home" color={Colors.primary} size={30} />
                ) : (
                  <Foundation name="home" color={Colors.gray} size={30} />
                )}
              </View>
            )}
            {index === 1 && (
              <View style={styles.icon}>
                {isFocused ? (
                  <Feather name="edit-3" color={Colors.primary} size={30} />
                ) : (
                  <Feather name="edit-3" color={Colors.gray} size={30} />
                )}
              </View>
            )}

            {index === 2 && (
              <View style={styles.middleIcon}>
                {isFocused ? (
                  <Image
                    source={require('../../../assets/images/Scan.png')}
                    style={styles.image}
                  />
                ) : (
                  <Image
                    source={require('../../../assets/images/Scan.png')}
                    style={styles.image}
                  />
                )}
              </View>
            )}
            {index === 3 && (
              <View style={styles.icon}>
                {isFocused ? (
                  <Ionicons
                    name="md-notifications"
                    color={Colors.primary}
                    size={30}
                    solid
                  />
                ) : (
                  <Ionicons
                    name="md-notifications"
                    color={Colors.gray}
                    size={30}
                    solid
                  />
                )}
              </View>
            )}
            {index === 4 && (
              <View style={styles.icon}>
                {isFocused ? (
                  <Ionicons
                    name="person"
                    color={Colors.primary}
                    size={30}
                    solid
                  />
                ) : (
                  <Ionicons name="person" color={Colors.gray} size={30} solid />
                )}
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Stack = createStackNavigator();

const BottomTabBottom = () => {
  return (
    <Tabs.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      // screenOptions={({ route }) => ({
      //   tabBarIcon: ({ focused, color, size }) => {
      //     let iconName = "";

      //     if (route.name === "dashboard") {
      //       iconName = focused ? "box-open" : "box-open";
      //     } else if (route.name === "order") {
      //       iconName = focused ? "warehouse" : "warehouse";
      //     }
      //     return <Icon name={iconName} size={size} color={color} solid />;
      //   },
      // })}
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.dark,
      }}>
      <Tabs.Screen name={Home} component={HomeScreen} />
      <Tabs.Screen name={Upload} component={UploadScreen} />
      <Tabs.Screen name={Scan} component={ScanScreen} />
      <Tabs.Screen name={'notify'} component={NotificationScreen} />
      <Tabs.Screen name={'profile'} component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

const BottomStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'order'}
      screenOptions={{
        headerTintColor: Colors.primary,
        headerTransparent: true,
        // headerRight: () => <CustomMenuIcon color={Colors.white} />,
      }}>
      <Stack.Screen
        name={Details}
        component={DetailsScreen}
        options={{
          headerTitle: '',
          headerRight: () => null,
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name={'order'}
        component={BottomTabBottom}
        options={{
          headerTitle: '',
          headerRight: () => null,
          headerLeft: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  middleIcon: {
    width: 60,
    height: 60,
    borderRadius: 50,
    bottom: 30,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {},
});

export default BottomStack;
