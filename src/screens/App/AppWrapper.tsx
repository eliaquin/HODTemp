import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {WebView, WebViewNavigation} from 'react-native-webview';

const AppWrapper = ({navigation}: any) => {
  const [currentURL, setCurrentURL] = useState('');
  const isLoginUrl = currentURL.includes('/login');
  useEffect(() => {
    if (isLoginUrl) {
      navigation.navigate('AuthStack');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentURL, isLoginUrl]);

  const handleUrlChange = (navObject: WebViewNavigation) => {
    console.log('URL', navObject.url);
    setCurrentURL(navObject.url);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        onNavigationStateChange={handleUrlChange}
        source={{
          uri:
            'https://app.bigwavesystems.com/mobilelogin/eliaquin.diaz@bairesdev.com/K1r4m1h$E1976',
        }}
      />
    </SafeAreaView>
  );
};

export default AppWrapper;
