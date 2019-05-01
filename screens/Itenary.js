import React from 'react';
import {
  Image,
  View,
} from 'react-native';




class Itenary extends React.Component{
  render() {
    return (
                    <View style={{  backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                    <View style={{padding: 10, backgroundColor: 'white'}}>
           <Image source={require('../assets/images/flash-3.png')} style={{ alignSelf: 'center',height:50, width:50}}/>


                    </View>
                    </View>
    );
  }
}
export default Itenary;
