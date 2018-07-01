import React, {Component} from 'react'
import{
  View,
  Text,
  StyleSheet,
  Dimensions,
  AsyncStorage
} from 'react-native'

import {Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Color from './Color'

export default class HighScore extends Component {

  constructor(){
    super()
    this.state = {
      score: '0',
    }
  }

  loadScore = () =>{
    AsyncStorage.getItem('@HighScore:score',
    (err,data)=>{
      if(err){
        console.warn("err")
      }else{
        if(data !== null)
        {
          this.setState({
            score: data,
          })
        }
      }
    })
  }

  componentDidMount(){
    this.loadScore();
  }

  render(){
    const {navigate} = this.props.navigation;
    return(
      <View style={styles.container}>
        <View style={styles.backButtonContainer}>
          <Button buttonStyle={styles.button}
                  icon={{name:"arrow-with-circle-left", type:"entypo", size:25, color:"black"}}
                  onPress={() => navigate('Home')} />
        </View>


        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            <Text style={{color:'#931C15'}}>H</Text>
            <Text style={{color:'#CCAA2A'}}>I</Text>
            <Text style={{color:'#AE6DE8'}}>G</Text>
            <Text style={{color:'#E88643'}}>H </Text>
            <Text style={{color:'#39CACC'}}>S</Text>
            <Text style={{color:'#D40992'}}>C</Text>
            <Text style={{color:'#E88643'}}>O</Text>
            <Text style={{color:'#AE6DE8'}}>R</Text>
            <Text style={{color:'#CCAA2A'}}>E</Text>
          </Text>
        </View>

        <View style={styles.scoreContainer}>
          <Text style={styles.score}>
            {this.state.score}
          </Text>
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
    fontSize: 50,
    fontFamily: 'TH3 MACHINE'
  },
  scoreContainer:{
    flex: 10,
    margin: 10,
    alignItems: 'center'
  },
  score: {
    fontSize: 150,
    color:'#631791',
    fontFamily: 'vincHand'
  }

})
