import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../../../constant/theme';
import {useTranslation} from 'react-i18next';

const BottomSheet = () => {
  const {t, i18n} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.dragger} />
      <View>
        <Text style={styles.title}>{t('Pancake')}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>{t('Food')}</Text>
        <Entypo name="dot-single" size={20} color={Colors.secondary} />
        <Text>60 {t('Minutes')}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.rowItem}>
          <Image
            source={require('../../../../assets/images/person6.png')}
            style={styles.likes}
          />
          <Text style={[styles.title, {paddingLeft: hp(1)}]}>Elena Shelby</Text>
        </View>
        <View style={styles.rowItem}>
          <Image
            source={require('../../../../assets/images/likes.png')}
            style={styles.likes}
          />
          <Text style={[styles.title, {paddingLeft: hp(1)}]}>
            273 {t('Likes')}
          </Text>
        </View>
      </View>
      <View style={styles.description}>
        <Text style={styles.title}>{t('Description')}</Text>
        <View>
          <Text style={styles.descrText}>{t('FullDesc')}</Text>
        </View>
      </View>
      <View style={styles.description}>
        <Text style={styles.title}>{t('Ingredient')}</Text>
        <View>
          <View style={styles.rowItem}>
            <Image source={require('../../../../assets/images/check.png')} />
            <Text style={styles.textItem}>4 {t('Eggs')}</Text>
          </View>
          <View style={styles.rowItem}>
            <Image source={require('../../../../assets/images/check.png')} />
            <Text style={styles.textItem}>1/2 {t('Butter')}</Text>
          </View>
          <View style={styles.rowItem}>
            <Image source={require('../../../../assets/images/check.png')} />
            <Text style={styles.textItem}>1/2 {t('Butter')}</Text>
          </View>
          <View style={styles.draggerBig} />
        </View>
      </View>
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: hp(60),
    backgroundColor: '#FFFFFF',
    zIndex: 9999,
    borderTopLeftRadius: hp(4),
    borderTopRightRadius: hp(4),
    paddingHorizontal: hp(4),
    paddingVertical: hp(2),
  },
  dragger: {
    borderTopWidth: 7,
    width: hp(6),
    borderRadius: 5,
    // height: 5,
    borderTopColor: '#D0DBEA',
    alignSelf: 'center',
  },
  draggeBig: {
    borderTopWidth: 10,
    width: hp(12),
    borderRadius: 5,
    // height: 5,
    borderTopColor: '#D0DBEA',
    alignSelf: 'center',
  },
  description: {
    paddingVertical: hp(2),
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  icons: {
    backgroundColor: 'gray',
    padding: hp(0.5),
    borderRadius: hp(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowItem: {
    flexDirection: 'row',
    paddingVertical: hp(1),
  },
  textItem: {
    paddingLeft: hp(1),
  },
  title: {
    fontSize: rf(2.7),
    fontWeight: 'bold',
    color: Colors.secondary,
  },
  descrText: {
    color: '#9FA5C0',
    fontSize: rf(2.2),
    lineHeight: 25,
  },
  likes: {
    height: hp(4),
    width: hp(4),
    resizeMode: 'contain',
  },
});
