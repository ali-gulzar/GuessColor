import React, {Component} from 'react'
import{
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import AppStateListener from 'react-native-appstate-listener'

import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Sound from 'react-native-sound'

Sound.setCategory('playback',false)

export default class Home extends Component{


  loadSound = () => {
     this.sound = new Sound('soundone.mp3', Sound.MAIN_BUNDLE,(error)=>{
      if(error){
        console.warn("no existing sounds");
        return;
      }
      this.sound.setNumberOfLoops(-1);
      this.playSound(this.sound)
    })
  }

  playSound = () => {
    this.sound.play( (success) =>{
      if(!success){
        this.sound.reset()
      }
    })
  }

  stopSound = () => {
    this.sound.stop()
    this.sound.release()
  }

  handleActive = () => {
    this.loadSound();
  }

  handleBackground = () => {
    this.stopSound();
  }


  render(){
    const {navigate} = this.props.navigation;
    return(
      <View style={styles.container}>
        <AppStateListener onActive={this.handleActive}
                          onBackground={this.handleBackground}/>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            <Text style={{color:'#931C15'}}>G</Text>
            <Text style={{color:'#CCAA2A'}}>U</Text>
            <Text style={{color:'#AE6DE8'}}>E</Text>
            <Text style={{color:'#E88643'}}>S</Text>
            <Text style={{color:'#39CACC'}}>S</Text>
            <Text style={{color:'#D40992'}}> C</Text>
            <Text style={{color:'#E88643'}}>O</Text>
            <Text style={{color:'#AE6DE8'}}>L</Text>
            <Text style={{color:'#CCAA2A'}}>O</Text>
            <Text style={{color:'#39CACC'}}>R</Text>
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button textStyle={{ fontWeight: "900", color:'white' }}
                  buttonStyle={[styles.button,{backgroundColor:'rgba(207,154,26,0.8)'}]}
                  title="Play"
                  icon={{name:"play", type:"font-awesome", color:"black"}}
                  onPress={ () => navigate('PlayArea')}/>
          <Button textStyle={{ fontWeight: "900", color:'white' }}
                  buttonStyle={[styles.button, {backgroundColor:'rgba(178,21,14,0.8)'}]}
                  title="Instructions"
                  icon={{name:"info-circle", type:"font-awesome", color:"black"}}
                  onPress={ () => navigate('Instructions')} />
          <Button textStyle={{ fontWeight: "900", color:'white' }}
                  buttonStyle={[styles.button, {backgroundColor:'rgba(46,22,178,0.8)'}]}
                  title="HighScore"
                  icon={{name:"list", color:"black"}}
                  onPress={ () => navigate('HighScore')} />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F7FF'
  },
  titleContainer: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    fontSize: 50,
    color: '#2C7873',
    fontFamily: 'TH3 MACHINE'
  },
  buttonContainer:{
    marginTop: 50,
    flex: 2,
    alignItems: 'center',
  },
  button: {
    width: 150,
    borderWidth: 2.5,
    borderRadius: 15,
    marginBottom: 10,
  }

})
