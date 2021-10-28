/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
} from 'react-native';

const App: () => Node = () => {
  return (
    <View>
      <StatusBar barStyle="#" />
      <ScrollView>
        <Text style={styles.titulo}>Benvinguts a React Native</Text>
        <Text style={styles.titulo2}>
          Este sera el primer exercici que fem.
        </Text>
        <Text style={{fontFamily: 'normal'}}>normal</Text>
        <Text style={{fontFamily: 'notoserif'}}>notoserif</Text>
        <Text style={{fontFamily: 'sans-serif'}}>sans-serif</Text>
        <Text style={{fontFamily: 'sans-serif-light'}}>sans-serif</Text>
        <Text style={{fontFamily: 'sans-serif-thin'}}>sans-serif-thin</Text>
        <Text style={{fontFamily: 'sans-serif-condensed'}}>
          sans-serif-condensed
        </Text>
        <Text style={{fontFamily: 'sans-serif-medium'}}>sans-serif-medium</Text>
        <Text style={{fontFamily: 'serif'}}>serif</Text>
        <Text style={{fontFamily: 'Roboto'}}>Roboto</Text>
        <Text style={{fontFamily: 'monospace'}}>monospace</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  titulo: {
    fontSize: 60,
    color: 'red',
    textAlign: 'center',
  },
  titulo2: {
    color: 'blue',
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
