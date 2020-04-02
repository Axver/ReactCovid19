import React from 'react';
import {FlatList, ActivityIndicator, Text, View, StyleSheet, ScrollView} from 'react-native';
import { Card,NavBar} from 'galio-framework';
import { ExpoLinksView } from '@expo/samples';


export default class HomeScreen extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true,
        dataSource:[]}
  }


  componentDidMount(){
    return fetch('https://api.kawalcorona.com/indonesia/')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

            console.log("Test Saja")

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

 



  render(){



    return(
      <View style={styles.container}>

          <Card
              location="Indonesia"
              style={styles.card}
              borderless
              imageBlockStyle={{ padding: 1 }}
              image="https://previews.123rf.com/images/jaboy/jaboy1605/jaboy160500057/56177557-indonesia-map-country-icon.jpg"
          />


              <FlatList
                  data={this.state.dataSource}
                  keyExtractor={({ id }, index) => id}
                  renderItem={({ item }) => (
                    <View>
                        <Card
                            shadow
                            footerStyle={styles.footer}
                            title="POSITIF"
                            caption={item.positif}
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
                            caption={item.sembuh}
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
                            caption={item.meninggal}
                            titleColor="white"
                            title="MENINGGAL"
                            flex
                            style={styles.card3}
                            borderless
                            avatar="https://kawalcorona.com/uploads/emoji-LWx.png"
                        >

                        </Card>
                    </View>

                  )}
              />



      </View>




    );
  }
}

HomeScreen.navigationOptions = {
    title: 'Home',
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
