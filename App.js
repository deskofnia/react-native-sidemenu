import { StyleSheet, SafeAreaView } from 'react-native';
import AppDrawer from './components/AppDrawer';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <AppDrawer />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
