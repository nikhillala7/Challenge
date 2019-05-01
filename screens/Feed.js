import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import DesData from '../Data/data.json';
const { height, width } = Dimensions.get('window')





export default class Feed extends React.Component{
    state = {
        search: '',
      };
    
      updateSearch = search => {
        this.setState({ search });
      };
    
  render() {

    const { search } = this.state;
    return (
        <ScrollView>
<SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                    <View style={{padding: 10, backgroundColor: 'white'}}>
           <Image source={require('../assets/images/flash-3.png')} style={{ alignSelf: 'center',height:50, width:50}}/>


                    </View>
                    </View>
                    </View>


                    <SearchBar
        containerStyle={{backgroundColor: 'white',flexDirection: 'row', padding:0, }}
          placeholder="Type Here..."
          placeholderTextColor='#191970'
          lightTheme
          onChangeText={this.handleSearch}
          value={search}

        />
        
                    <View style={{ flex: 1 }}>
                       <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#BDBBBB' }}>
                            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 , paddingBottom:20}}>
                                <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20, paddingBottom:10}}>
                                What can we help you find, Nikhil?
                                </Text>
                            </View>
                        </View>
                    </View>








                        <FlatList            
                        showsVerticalScrollIndicator={false} 
                        style={{ flex: 1, backgroundColor: 'white'}}
                        data={DesData}
                        renderItem={({item}) => 


                          
                            <View style={{paddingBottom:20, paddingTop:20, left:20}}>
               	                <Image source={{uri:item.paid}} style={{height:50, width:50 ,paddingBottom:0} } />
                                 
                                   <View style={{alignItems:'center'}}>
                                   <View style ={{alignContent:'center'}}>

                                   <Text style={{textAlign:'center', paddingHorizontal:20, fontSize: 24, fontWeight: '700',paddingTop:20, right:20}}>
                                        {item.Title}
                                   </Text>
                                   </View>
                                   <View style ={{alignContent:'center'}}>
                                   <Text style={{ fontWeight: '100', marginTop: 10, textAlign:'center', right: 20 }}>
                                        {item.Tags}
                                   </Text>
                                   </View>
                                   </View>
                                   <View style={{ width: width - 40, height: 200, marginTop: 20, paddingBottom:20}}>
                                        <Image source={{uri:item.source}} style={{ flex: 1, height: null, width: null,  borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}/>
                                   </View>
                                   <View style={{left:20}}>
                                       <View style={styles.row}>
                                           <View style={styles.inputWrap}>
                                               <Image source={{uri:item.share}} style={{height:30, width:30, left:260}}/>
                                           </View >
                                           <View style={styles.inputWrap}>
                                                <Image source={{uri:item.like}} style={{height:30, width:30, left:70}}/>
                                           </View>
                                           <Text style={{ fontWeight: '600', marginTop: 10, right:300, fontSize:15}}>{item.likes}</Text>
                                       </View>
                                   </View>
  
                            </View>


    
    }

                        











                    
                            keyExtractor={(item, Title) => Title.toString()}

                    

    
                        />
















                            

</SafeAreaView>
</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    row: {
      flex: 1,
      flexDirection: "row"
    },
    inputWrap: {
      flex: 1,
      borderColor: "#000000",
      borderBottomWidth: 1
    },
  });
