import React,{ Component } from 'react'
import { View, Text, StyleSheet, Image} from 'react-native';
import { Button } from 'react-native-elements';
import ComponenteTela from './ComponenteTela';

export default class GerenciarPerfis extends Component {

    render(){
      const { navigation } = this.props
        return(
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
        </View>
            <Text style={styles.titulo}>Gerenciar perfis: </Text>
            <View style={{ flexDirection: 'row' }}>
    
    
              <View style={{flexDirection: 'column'}, styles.column}>
                <Image style={styles.imageStyle}
                  source ={require('./assets/dudaGP.png')}>
                </Image>
                
                <View style={{ flexDirection: 'column' }}>
                  <Text style={{ flexDirection: 'row' }}>
                    <Text style={styles.textStyle}>Eduarda</Text>
                  </Text>
                </View>
              </View>
    
              <View style={{ flexDirection: 'column' }, styles.column}>
                <Image style={styles.imageStyle}
                  source ={require('./assets/aliciaGP.png')}>
                </Image>

                <Text style={{ flexDirection: 'row' }}>
                  <Text style={styles.textStyle}>Alícia</Text>
                </Text>
              </View>
              </View>
              <Button buttonStyle={styles.buttonStyle}
            title = "Concluído" onPress={()=> 
            {navigation.navigate('Tela')}}/> 
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
      textAlign: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: "center",
      alignItems: 'center',
      textAlign: 'center',
    },
  
    textStyle: {
      flex: 1,
      width: "50%",
      color: 'gray',
      fontSize: 25,
      textAlign: "center",
      justifyContent: "center",
    },
    imageStyle: {
      marginBottom: 10,
      alignItems: "center",
      width: 200,
      height: 200,
      resizeMode: "center",
      rowStyle: 'center',
   
      borderRadius: 5,
      marginLeft: 5,
    },
    column: {
      marginLeft: 50,
    },
    buttonStyle: {
      backgroundColor:'red',
      width: 220,
      height: 50,
      margin: 50,
      fontSize:20,
      textAlign: 'center',
    },
    button1Style:{
        backgroundColor: 'red',  
        height: 50,
        width: 220,
        marginBottom: 50, 
        marginLeft: 90,
        marginRight: 40,
        textAlign: 'center',
        alignItems: 'center',
    },
    menuStyle:{
      display:'flex',
      flexDirection: 'row',
      backgroundColor:'#000',
      gap:'.5rem',
      padding:'1rem'
    }
  });
  