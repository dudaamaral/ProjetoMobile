import React, { Component } from "react";
import { View, Image, Text, StyleSheet, Pressable} from "react-native";
import duda from './assets/dude.jpg';
import alicia from './assets/alicia.jpeg'
import { Button } from "react-native-elements/dist/buttons/Button";
 
export default class ComponenteTela extends Component {

  constructor(props) {
    super(props);
    const { texto } = this.props.route.params.params;
    this.state = { texto };
  }



  render() {
    const{ navigation } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Quem está assistindo?</Text>
        <View style={{ flexDirection: 'row' }}>


          <View style={{flexDirection: 'column'}, styles.column}>
            <Pressable onPress={()=>{ 
              navigation.navigate('Skins')}}>
            <Image style={styles.imageStyle}
              source={duda}/>
            </Pressable>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ flexDirection: 'row' }}>
                <Text style={styles.textStyle}>Eduarda</Text>
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'column' }, styles.column}>
          <Pressable onPress={()=>{ 
              navigation.navigate('Friends')}}>
            <Image style={styles.imageStyle}
              source={alicia}
            />
            </Pressable>
            <Text style={{ flexDirection: 'row' }}>
              <Text style={styles.textStyle}>Alícia</Text>
            </Text>
          </View>
        </View>
        <Button title = "Gerenciar perfis" style={{},styles.buttonStyle}> </Button>

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
    grid: 'template-collumns',
    borderRadius: 5,
    marginLeft: 5,
  },
  column: {
    marginLeft: 50,
  },
  buttonStyle: {
    backgroundColor: 'black', 
    borderWidth: 0.5, 
    borderColor: 'grey', 
    height: 50,
    width: 220,
    margin: 50, 
    textAlign: 'center',
  },
});
