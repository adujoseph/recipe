import React, {useEffect} from 'react';
import {View, StyleSheet, StatusBar, Image} from 'react-native';
import {Colors} from '../../constant/theme';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import * as Animatable from 'react-native-animatable';
import {Dash} from '../../constant/contant';

const SplashScreen = ({navigation, currentLang}: any) => {
  useEffect(() => {
    setTimeout(() => {
      handleRouteOptions();
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  const handleRouteOptions = async () => {
    navigation.replace(Dash);
    console.log(currentLang);
  };
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={Colors.primary}
        translucent={true}
      />
      <View style={styles.container}>
        <Animatable.View
          animation="slideInDown"
          iterationCount={4}
          direction="alternate">
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.imageStyle}
          />
        </Animatable.View>
      </View>
    </>
  );
};
const mapStateToProps = (state: any) => {
  return {
    currentLang: state.user.setLanguage,
  };
};
export default connect(mapStateToProps, null)(SplashScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    //width: wp(65),
    height: hp(25),
    alignSelf: 'center',
    bottom: hp(3),
    resizeMode: 'contain',
  },
});
