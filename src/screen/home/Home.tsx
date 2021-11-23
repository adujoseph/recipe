/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';
import Searchbar from '../../components/Searchbar';
import {Colors} from '../../constant/theme';
import LeftComponent from './components/LeftComponent';
import {useTranslation} from 'react-i18next';

const position = ['Left', 'Right'];
const HomeScreen = () => {
  const [categories] = useState<String[]>(['All', 'Food', 'Drink']);
  const [category, setCategory] = useState<String>('All');
  const [term, setTerm] = useState<String>('');
  const [selectedPos, setSelectedPos] = useState<String>('Left');

  const {t} = useTranslation();
  const handleSearch = (arg: String) => {
    console.log(arg);
    setTerm(arg);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.topcard}>
          <Searchbar
            placeholder={t('Search')}
            value={term}
            onChangeText={(t: String) => handleSearch(t)}
          />
          <View style={styles.category}>
            <Text style={styles.categoryText}>{t('Category')}</Text>
          </View>
          <View style={styles.rows}>
            {categories.map((cat, i) => (
              <TouchableOpacity
                onPress={() => setCategory(cat)}
                key={i}
                style={[
                  styles.itemStyle,
                  {
                    backgroundColor:
                      category == cat ? Colors.primary : Colors.white,
                  },
                ]}>
                <Text style={styles.itemText}>{t(`${cat}`)}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.bottomcard}>
          <View style={styles.rowsBot}>
            {position.map((pos, i) => (
              <TouchableOpacity
                onPress={() => setSelectedPos(pos)}
                key={i}
                style={[
                  styles.postStyle,
                  {
                    borderBottomWidth: selectedPos == pos ? 3 : 0,
                    borderBottomColor:
                      selectedPos == pos ? Colors.primary : Colors.white,
                  },
                ]}>
                <Text style={styles.itemText}>{t(`${pos}`)}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View>
            {selectedPos == 'Right' ? (
              <Text>Right component</Text>
            ) : (
              <LeftComponent />
            )}
          </View>
        </View>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  topcard: {
    flex: 0.3,
    marginBottom: hp(1),
    paddingHorizontal: hp(2),
    backgroundColor: Colors.white,
  },
  bottomcard: {
    flex: 0.7,
    width: '100%',
    backgroundColor: Colors.white,
  },
  rows: {
    flexDirection: 'row',
  },
  rowsBot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomColor: Colors.background,
    borderBottomWidth: 1,
  },
  itemStyle: {
    paddingHorizontal: hp(2.5),
    paddingVertical: hp(1),
    margin: hp(1),
    borderRadius: hp(5),
    borderColor: 'lightgray',
    borderWdith: 1,
  },
  postStyle: {
    paddingHorizontal: hp(2.5),
    paddingVertical: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  itemText: {
    fontSize: rf(2),
  },
  category: {
    paddingVertical: hp(1),
  },
  categoryText: {
    paddingVertical: hp(1),
    fontSize: rf(2.4),
    fontWeight: 'bold',
    color: Colors.secondary,
  },
});
