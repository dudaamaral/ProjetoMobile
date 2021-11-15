import React,{ Component } from 'react'
import { View,Text, StyleSheet, ImageBackground,Image} from 'react-native';
import {Button} from 'react-native-elements';


export default class Friends1 extends Component{
    render() {
        const{ navigation } = this.props

        return (
          <View style={styles.container}>
             <View style={styles.menuStyle}>
          <Button title ="Home" onPress={()=>
          {navigation.navigate("Netflix")}} buttonStyle={styles.button1Style}>
          </Button>
          <Button title ="Skins" onPress={()=>
          {navigation.navigate("Skins")}} buttonStyle={styles.button1Style}>
          </Button>
          <Button title ="Friends" onPress={()=>
          {navigation.navigate("Friends1")}} buttonStyle={styles.button1Style}>
          </Button>
          <Button title ="Sugestões" onPress={()=>
          {navigation.navigate("Sugestão")}} buttonStyle={styles.button1Style}>
          </Button>


        </View>
            <ImageBackground
            source={require('./assets/friends.png')}
            style={styles.imagemFundo} > 

      <View style={[styles.caixa, styles.elevation]}>
      <Text style={ styles.text }>F ● R ● I ● E ● N ● D ● S</Text>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 

    <Text style={styles.text}> Ross, Rachel, Mônica, Chandler, Joey e Phoebe formam um grupo de seis amigos que lutam para se sobressair e progredir na competitiva vida de Manhattan. Seu humor inteligente e apoio mútuo incondicional fazem com sua amizade seja cada vez mais forte, superando assim todos os obstáculos que a vida lhes apresenta.</Text> 
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 

      <Text style={styles.text}> Aperte no botão e conheça os meus episódios favoritos! </Text>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 

      <Button  buttonStyle={styles.button} title = "APERTE AQUI!" onPress={()=> 
          {navigation.navigate("Friends")}}/>
       </View>
            </ImageBackground>



          </View>

        );
    
}

}
const styles = StyleSheet.create({
    titulo: {
      fontSize: 70,
      marginBottom: 40,
      marginTop: 1,
      color: 'white',
  
    },
    container: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: "center",
      alignItems: 'center',
      textAlign: 'center',
    },
    imagemFundo:{
        height:'100%',
        width:'100%',
      //  opacity:'10%',
    },
    // topo:{
   // height:'50%',
    //width:'50%',
    // }
    caixa: {
        backgroundColor: 'grey',
        justifyContent: 'center',
        height: 600,
        width: 600,
        borderRadius: 20,
        alignSelf:'center',
        opacity:'80%',
        resizeMode: "center",
        marginBottom: 10,
        

      },
      elevation: {
        height: 600,
        width: 600,
        shadowColor: '#0c0c0c',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        resizeMode: "center",
        marginBottom: 100,
        margin:70,
    
      },
      text:{
          color:'white',
          fontFamily:'Arial',
          fontSize: 25
      },
     button:{
        backgroundColor:'black',
        borderRadius:15,
        width: 100,
        height: 100,
      },
      menuStyle:{
        display:'flex',
        flexDirection: 'row',
        backgroundColor:'#000',
        gap:'.5rem',
        padding:'1rem'
      },
      button1Style:{
        backgroundColor: 'red',  
        height: 50,
        width: 220,
        margin: 10,
        marginTop: 105, 
        textAlign: 'center',
    },

  });