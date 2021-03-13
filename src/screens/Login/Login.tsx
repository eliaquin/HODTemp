import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import objToUrlEncoded from '../../utils/objToUrlEncoded';
import TextEdit from '../../components/TextEdit';
import Button from '../../components/Button';
import {IconNames} from '../../components/Icon';
import colors from '../../constants/colors';
import {getToken} from '../../api/auth';

const findToken = async () => {
  const data = {
    username: 'eliaquin.diaz@bairesdev.com',
    password: 'K1r4m1h$E1976',
    grant_type: 'password',
  };
  const formBody = objToUrlEncoded(data);
  await getToken(formBody);
};

const Login = ({navigation}: any) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.wrapper}>
          <Text>Login Screen</Text>
          <View style={styles.fieldContainer}>
            <TextEdit
              placeholder="Username"
              iconName={IconNames.user}
              value={userName}
              onChangeText={setUserName}
            />
          </View>
          <View style={[styles.fieldContainer]}>
            <TextEdit
              placeholder="Password"
              iconName={IconNames.lock}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.loginButtonWrapper}>
            <Button
              label="Log in"
              onPress={async () => {
                await findToken();
                navigation.navigate('AppStack', {screen: 'AppWrapper'});
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
});

export default Login;
