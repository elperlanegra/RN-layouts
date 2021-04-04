import React from 'react';
import {view, StyleSheet, Image, View} from 'react-native';

const App = () => {
  return (
    <>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Image style = {style.banner} source={require('./assets/img/bg.jpg')} />
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  banner: {
    height:250,
    flex: 1
  }
});

export default App;
