import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TextEdit from '../../components/TextEdit';
import {IconNames} from '../../components/Icon';
import colors from '../../ui/colors';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.wrapper}>
          <Text>Login Screen</Text>
          <View style={styles.fieldContainer}>
            <TextEdit placeholder="Username" iconName={IconNames.user} />
          </View>
          <View style={[styles.fieldContainer]}>
            <TextEdit placeholder="Password" iconName={IconNames.lock} />
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
});

export default Login;
