import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Auth from './src/screens/AuthScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import * as LocalAuthentication from 'expo-local-authentication';

export default function App() {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    // Check if hardware supports biometrics
    useEffect(() => {
      (async () => {
        const compatible = await LocalAuthentication.hasHardwareAsync();
        setIsBiometricSupported(compatible);
      })();
    });

    function onAuthenticate () {
      const auth = LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate',
        fallbackLabel: 'Enter Password',
      });
      auth.then(result => {
        setIsAuthenticated(result.success);
          console.log(result);
      }
      );
    }

  return (
    <View style={styles.container}>
      { isAuthenticated 
        ? <PaymentScreen setIsAuthenticated={setIsAuthenticated} />
        : <Auth onAuthenticate={onAuthenticate} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
