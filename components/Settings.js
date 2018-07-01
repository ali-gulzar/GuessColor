import React, {Component} from 'react'
import{
  View,
  Text,
  StyleSheet,
} from 'react-native'

import {Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Color from './Color'

export default class Settings extends Component {
  render(){
    const {navigate} = this.props.navigation;
    return(
      <View style={styles.container}>
        <View style={styles.backButtonContainer}>
          <Button buttonStyle={styles.button}
                  icon={{name:"arrow-back", color:"white", size:25}}
                  onPress={() => navigate('Home')} />
        </View>


        <View style={styles.titleContainer}>
          <Text style={styles.title}>Settings</Text>
        </View>

        <View style={styles.instructionsContainer}>
          <Text style={styles.instructions}>
            Welcome! This is a simple game of COLORS.
            All You have to do is the select the box which color does
            NOT match with the color written inside the box like in the box below.
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
          <Icon name="rocket" color="black" size={100}/>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d4059'
  },
  backButtonContainer: {
    flex: 1.5,
    alignItems: 'flex-start',
  },
  button:{
    backgroundColor: '#2d4059',
  },
  titleContainer:{
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  title:{
    fontSize: 30
  },
  instructionsContainer:{
    flex: 10,
    margin: 10,
  },
  instructions: {
    fontSize: 20,
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
    backgroundColor: 'gray',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  iconContainer:{
    alignItems: 'center',
    marginBottom: 50,
  }

})
