import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
} from 'react-native';
import TextEdit from '../../components/TextEdit';
import Button from '../../components/Button';
import Bar from '../../components/Bar';
import Switch from '../../components/Switch';
import {getCredentialsAreValid} from '../../api/auth';
import colors from '../../constants/colors';

const HOD_Logo = require('../../assets/images/hod_logo.png');

const Login = ({navigation}: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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
          <View style={styles.barContainer}>
            <Bar barColor={colors.hodDarkBlue} />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Let's get you connected</Text>
          </View>
          <View style={[styles.fieldContainer, styles.firstField]}>
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
          <View style={styles.switchContainer}>
            <Switch onValueChange={toggleSwitch} value={isEnabled} />
            <Text style={styles.rememberMeText}>Remember my Username</Text>
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

const PADDING_HORIZONTAL = 16;

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
    paddingHorizontal: PADDING_HORIZONTAL,
    marginTop: 30,
  },
  firstField: {
    marginTop: 20,
  },
  afterFirstField: {
    marginTop: 30,
  },
  loginButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
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
  barContainer: {
    paddingHorizontal: 35,
    marginVertical: 20,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.02,
  },
  switchContainer: {
    paddingHorizontal: PADDING_HORIZONTAL,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    fontSize: 11,
    fontWeight: '300',
    lineHeight: 13,
    ...Platform.select({
      ios: {
        marginLeft: 8,
      },
    }),
  },
});

export default Login;
