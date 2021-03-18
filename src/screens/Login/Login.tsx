import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import TextEdit from '../../components/TextEdit';
import Button from '../../components/Button';
import colors from '../../constants/colors';
import {getCredentialsAreValid} from '../../api/auth';

const HOD_Logo = require('../../assets/images/hod_logo.png');

const Login = ({navigation}: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateCredentials = async () => {
    const credentials = {
      username,
      password,
    };
    const credentialsAreValid = await getCredentialsAreValid(credentials);
    if (credentialsAreValid) {
      navigation.navigate('AppStack', {screen: 'AppWrapper'});
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.wrapper}>
          <View style={styles.imageContainer}>
            <Image source={HOD_Logo} style={styles.image} />
          </View>
          <View style={styles.fieldContainer}>
            <TextEdit
              placeholder="Username"
              iconName="user"
              value={username}
              onChangeText={setUsername}
              hasButton={true}
              iconButtonName="fingerprint"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              iconColor={colors.silver}
              iconButtonColor={colors.hodOrange}
            />
          </View>
          <View style={[styles.fieldContainer]}>
            <TextEdit
              placeholder="Password"
              iconName="lock"
              value={password}
              onChangeText={setPassword}
              autoCorrect={false}
              secureTextEntry={true}
              iconColor={colors.silver}
            />
          </View>
          <View style={styles.loginButtonWrapper}>
            <Button
              label="Log in"
              onPress={async () => {
                await validateCredentials();
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollView: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
  },
  fieldContainer: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  loginButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  imageContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  image: {
    width: '50%',
    height: 180,
    resizeMode: 'contain',
  },
});

export default Login;
