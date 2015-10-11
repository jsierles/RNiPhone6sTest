/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} = React;

var iPhone6sTest = React.createClass({
  onPress() {
    console.log('pressed')
  },
  render: function() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPress} style={styles.wrapper}>
          <View style={styles.button}>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    position: 'absolute',
    top: 50,
    left: 50,
  },
  button: {
     position: 'absolute',
     padding: 15,
     top: 0,
     left: 0,
     height: 200,
     width: 200,
     backgroundColor: '#aaa'
  }
});

AppRegistry.registerComponent('iPhone6sTest', () => iPhone6sTest);
