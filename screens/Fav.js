import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';



class Fav extends React.Component{
  render() {
    return (
<SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                    <View style={{padding: 10, backgroundColor: 'white'}}>
           <Image source={require('../assets/images/flash-3.png')} style={{ alignSelf: 'center',height:50, width:50}}/>


                    </View>
                    </View>
                    </View>
</SafeAreaView>
    );
  }
}
export default Fav;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
