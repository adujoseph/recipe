import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomSheet from './components/BottomSheet';
const ProductDetailScreen = (Props: any) => {
  const {navigation} = Props;

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}>
          <Ionicons name="chevron-back" size={20} color="white" />
        </TouchableOpacity>
        <Image
          source={require('../../../assets/images/03.png')}
          style={styles.image}
        />
        <BottomSheet />
      </View>
    </>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
  },
  backBtn: {
    padding: hp(1.5),
    borderRadius: hp(3),
    backgroundColor: 'rgba(255,255,255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 999,
    top: hp(4),
    left: hp(3),
  },
});
