import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    if (count <= 108) setCount(count + 1);
  };

  const clearCount = () => {
    setCount(0);
  };

  return (
    <SafeAreaView style={styles.containerApp}>
      <TouchableOpacity onPress={clearCount} style={styles.buttonClear}>
        <Text style={styles.textButtonClear}>Zerar</Text>
      </TouchableOpacity>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo-purple.png')}
      />
      <Text style={styles.text}>Sinto muito</Text>
      <Text style={styles.text}>Me perdoe</Text>
      <Text style={styles.text}>Sou grato</Text>
      <Text style={styles.text}>Eu te amo</Text>
      <TouchableOpacity onPress={handleCount} style={styles.buttonCount}>
        <Text style={styles.textButtonCount}>{count}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerApp: {
    padding: 16,
    backgroundColor: '#BBBFC6',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 10,
  },
  text: {
    fontFamily: 'Amiko-Regular',
    fontSize: 22,
  },
  buttonCount: {
    width: '100%',
    height: 70,
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonCount: {
    fontFamily: 'Amiko-Bold',
    fontSize: 45,
  },
  buttonClear: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#8EDDBE',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  textButtonClear: {
    fontFamily: 'Amiko-SemiBold',
    fontSize: 22,
    color: '#FFF',
  },
});

export default App;
