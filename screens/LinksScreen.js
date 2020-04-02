import React,{ useEffect, useState } from 'react';
import { FlatList,ScrollView, StyleSheet,Text,View } from 'react-native';

import { ExpoLinksView } from '@expo/samples';

import { Card,NavBar} from 'galio-framework';

export default function LinksScreen() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.kawalcorona.com/indonesia/provinsi/')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
  });

  return (
    <ScrollView style={styles.container}>
      <View>
        <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
                <View style={{margin:5}}>
                  <Text style={{fontSize: 30,fontWeight:'bold',marginLeft:10}}>{item.attributes['Provinsi']}</Text>
                  <View style={{flex:0.5,flexDirection:'row',alignItems:'stretch'}}>
                    <Card
                        borderless
                        avatar="https://kawalcorona.com/uploads/sad-u6e.png"

                        flex style={styles.card1}>

                      <Text style={{fontWeight:'bold',fontSize: 50,textAlign:'center',color:'white'}}>{item.attributes['Kasus_Posi']}</Text>

                    </Card>
                    <Card
                        borderless
                        avatar="https://kawalcorona.com/uploads/happy-ipM.png"flex style={styles.card2}>

                      <Text style={{fontWeight:'bold',fontSize: 50,textAlign:'center',color:'white'}}>{item.attributes['Kasus_Semb']}</Text>
                    </Card>
                    <Card
                        borderless
                        avatar="https://kawalcorona.com/uploads/emoji-LWx.png"
                        flex style={styles.card3}>
                      <Text style={{fontWeight:'bold',fontSize: 50,textAlign:'center',color:'white'}}>{item.attributes['Kasus_Meni']}</Text>
                    </Card>
                  </View>
                </View>
            )}
        />
      </View>





    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Provinsi',
};

const styles = StyleSheet.create({
  card: {
    margin:10,
  },
  card1: {
    backgroundColor:'#F82649',
    margin:10,
    color:'white',
    fontWeight:'bold',
  },
  card2: {
    backgroundColor:'#09AD95',
    margin:10,
    color:'white',
    fontWeight:'bold',
  },
  card3: {
    backgroundColor:'#D43F8D',
    margin:10,
    color:'white',
    fontWeight:'bold',
  },
  container:{
    flex:1,
  },
  footer:{
    fontSize:30,
    fontWeight:'bold',
  }
});

