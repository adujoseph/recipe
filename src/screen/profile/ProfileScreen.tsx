import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors} from '../../constant/theme';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ProfileScreen = (Props: any) => {
  const {navigation} = Props;
  const lang = [
    {label: 'English', value: 'en'},
    {label: 'Yoruba', value: 'yor'},
    {label: 'Igbo', value: 'ig'},
    {label: 'French', value: 'fr'},
  ];
  const [selectedLang, setSelectedLang] = useState('');

  const {t, i18n} = useTranslation();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      defaultLanguages();
    });
    return unsubscribe;
  }, [navigation]);

  const defaultLanguages = () => {
    console.log(i18n.language, 'Default checker');
    if (i18n.language == 'en') {
      setSelectedLang('English');
    } else if (i18n.language == 'fr') {
      setSelectedLang('French');
    } else if (i18n.language == 'yor') {
      setSelectedLang('Yoruba');
    }
  };

  const handleLang = (arg: any) => {
    setSelectedLang(arg.label);
    i18n.changeLanguage(arg.value);
    console.log(arg);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>{t('SelectLanguage')}</Text>
        </View>
        <View style={{width: '100%'}}>
          {lang.map((r, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => handleLang(r)}
              style={[
                styles.btn,
                {
                  backgroundColor:
                    selectedLang == r.label ? Colors.primary : Colors.gray,
                },
              ]}>
              <Text style={styles.text}>{t(r.label)}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    padding: hp(2),
  },
  headerView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(5),
  },
  headerText: {
    fontSize: rf(3),
    color: Colors.secondary,
    fontWeight: 'bold',
  },
  btn: {
    padding: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
    margin: hp(1),
    borderRadius: hp(2),
    width: '100%',
  },
  text: {
    color: Colors.white,
    fontSize: rf(2.5),
  },
});
