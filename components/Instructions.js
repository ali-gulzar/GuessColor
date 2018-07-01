import React, {Component} from 'react'
import{
  View,
  Text,
  StyleSheet,
} from 'react-native'

import {Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Color from './Color'

export default class Instructions extends Component {
  render(){
    const {navigate} = this.props.navigation;
    return(
      <View style={styles.container}>
        <View style={styles.backButtonContainer}>
          <Button buttonStyle={styles.button}
                  icon={{name:"arrow-with-circle-left", type:"entypo", color:"black", size:25}}
                  onPress={() => navigate('Home')} />
        </View>


        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            <Text style={{color:'#931C15'}}>I</Text>
            <Text style={{color:'#CCAA2A'}}>N</Text>
            <Text style={{color:'#AE6DE8'}}>S</Text>
            <Text style={{color:'#E88643'}}>T</Text>
            <Text style={{color:'#39CACC'}}>R</Text>
            <Text style={{color:'#D40992'}}>U</Text>
            <Text style={{color:'#E88643'}}>C</Text>
            <Text style={{color:'#AE6DE8'}}>T</Text>
            <Text style={{color:'#CCAA2A'}}>I</Text>
            <Text style={{color:'#39CACC'}}>O</Text>
            <Text style={{color:'#931C15'}}>N</Text>
            <Text style={{color:'#39CACC'}}>S</Text>
          </Text>
        </View>

        <View style={styles.instructionsContainer}>
          <Text style={styles.instructions}>
            Welcome to the world of
            <Text style={{color:'#39CACC'}}> C</Text>
            <Text style={{color:'#E88643'}}>O</Text>
            <Text style={{color:'#AE6DE8'}}>L</Text>
            <Text style={{color:'#CCAA2A'}}>O</Text>
            <Text style={{color:'#931C15'}}>R</Text>
            <Text style={{color:'#D40992'}}>S</Text>.
            In order to get points,all you have to do is select the box which color does
            <Text style={{color:'#D40992'}}> N</Text>
            <Text style={{color:'#931C15'}}>O</Text>
            <Text style={{color:'#E88643'}}>T </Text>
            match with the color written inside the box like in the box below.
          </Text>

          <View style={styles.sampleContainer}>
            <Text style={styles.sample}>
              Yellow
            </Text>
          </View>

          <Text style={styles.instructions}>
            With increasing score,
           the allocated time will decrease and the challenge would become more difficult.
           Good Luck and have fun. Alse share it with your friends.
          </Text>
        </View>

        <View style={styles.iconContainer}>
          <Icon name="rocket" color="#D41D5F" size={100}/>
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
  backButtonContainer: {
    flex: 1.5,
    alignItems: 'flex-start',
  },
  button:{
    backgroundColor: '#F3F7FF',
  },
  titleContainer:{
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  title:{
    fontSize: 35,
    fontFamily: 'TH3 MACHINE',
  },
  instructionsContainer:{
    flex: 10,
    margin: 10,
  },
  instructions: {
    fontSize: 22,
    fontFamily: 'vincHand'
  },
  sampleContainer:{
    marginTop: 30,
    marginBottom: 30,
    alignItems: 'center',
  },
  sample:{
    borderWidth: 3,
    width: 85,
    height: 70,
    backgroundColor: 'rgb(64,53,189)',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  iconContainer:{
    alignItems: 'center',
    marginBottom: 50,
  },

})
