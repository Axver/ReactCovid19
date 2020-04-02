import React,{ useEffect, useState }  from 'react';
import {FlatList, ActivityIndicator, Text, View, StyleSheet, ScrollView} from 'react-native';
import { Card,NavBar} from 'galio-framework';
export default function SettingsScreen() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.kawalcorona.com/indonesia/provinsi/')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
  });

  return(
      <View style={styles.container}>

        <Card
            location="Sumatera Barat"
            style={styles.card}
            borderless
            imageBlockStyle={{ padding: 1 }}
            image="https://img.okeinfo.net/content/2018/02/07/406/1855969/menpar-berharap-potensi-wisata-sumatera-barat-bisa-lebih-digali-lagi-zGM92fUJYc.jpg"
        />

        <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => {
              if(item.attributes['Provinsi']=="Sumatera Barat")
              {
                return (
                    <View style={styles.container}>
                      <Card
                          shadow
                          footerStyle={styles.footer}
                          title="POSITIF"
                          caption={item.attributes['Kasus_Posi']}
                          captionColor='white'
                          titleColor="white"
                          flex
                          style={styles.card1}
                          borderless
                          avatar="https://kawalcorona.com/uploads/sad-u6e.png"
                      >


                      </Card>
                      <Card
                          shadow
                          footerStyle={styles.footer}
                          title="SEMBUH"
                          caption={item.attributes['Kasus_Semb']}
                          captionColor='white'
                          titleColor="white"
                          flex
                          style={styles.card2}
                          borderless
                          avatar="https://kawalcorona.com/uploads/happy-ipM.png"
                      >


                      </Card>
                      <Card
                          shadow
                          captionColor='white'
                          caption={item.attributes['Kasus_Meni']}
                          titleColor="white"
                          title="MENINGGAL"
                          flex
                          style={styles.card3}
                          borderless
                          avatar="https://kawalcorona.com/uploads/emoji-LWx.png"
                      >

                      </Card>
                    </View>

                )
              }
            }

            }
        />








      </View>

  )

}

SettingsScreen.navigationOptions = {
  title: 'Sumatera Barat',
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
