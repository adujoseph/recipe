import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Colors} from '../../../constant/theme';
import {useTranslation} from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RenderCard = ({item, onPress}: any) => {
  const {t} = useTranslation();
  const {profile, name, foodname, foodimage, type, duration} = item;
  return (
    <>
      <TouchableOpacity style={styles.cardView} onPress={onPress}>
        <View style={styles.row}>
          <Image source={profile} style={styles.profileImg} />
          <Text style={styles.name}>{name}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.wrapper}>
            <Ionicons name="heart-outline" size={18} color={Colors.white} />
          </TouchableOpacity>
          <Image source={foodimage} style={styles.image} />
        </View>
        <View>
          <Text style={styles.foodname}>{t(foodname)}</Text>
        </View>
        <View style={styles.row2}>
          <Text style={styles.type}>{t(type)}</Text>
          <Text style={styles.type}>.</Text>
          <Text style={styles.type}>
            {duration}
            {t('Minutes')}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default RenderCard;

const styles = StyleSheet.create({
  cardView: {
    paddingVertical: hp(2),
    paddingHorizontal: hp(3),
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(1),
    // justifyContent: 'space-between',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(1),
  },
  name: {
    paddingLeft: hp(1),
  },
  foodname: {
    fontSize: rf(3),
    fontWeight: 'bold',
    color: Colors.secondary,
  },
  type: {
    fontSize: rf(2.3),
    color: Colors.gray,
    paddingRight: hp(1),
  },
  wrapper: {
    position: 'absolute',
    top: hp(2),
    right: hp(2),
    zIndex: 9999999,
    backgroundColor: 'rgba(255,255,255, 0.3)',
    borderRadius: hp(4),
    padding: hp(0.5),
  },
  image: {},
  profileImg: {},
});
