import React, {Component} from 'react'
import PropTypes from 'prop-types';
import{
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import Color from './Color'
import shuffle from 'lodash.shuffle'
import {Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class PlayArea extends Component{

  static propTypes = {
    goBack: PropTypes.func.isRequired,
    initialSeconds: PropTypes.number.isRequired,
    randomColorsArray: PropTypes.array.isRequired,
    playAgain: PropTypes.func.isRequired,
    gameScore: PropTypes.number.isRequired,
    tryAgain: PropTypes.func.isRequired,
    saveScore: PropTypes.func.isRequired,
  }

  // Main array
  suffledRandomColorsArray = shuffle(this.props.randomColorsArray);

  state = {
    remainingSeconds: this.props.initialSeconds,
    randomColors: this.suffledRandomColorsArray.slice(0,4),
    negatedRandomColors: this.suffledRandomColorsArray.slice(4),
    gameStatus: 'Playing'
  }

  // For Display Purpose
  capitalizeFirstLetter = (color) => {
    return color.charAt(0).toUpperCase() + color.slice(1);
  }
  randomColorsText = this.state.randomColors.map( (color) => { return this.capitalizeFirstLetter(color) })

  // Data for negating the array
  indexRandomNumber1and3 = Math.floor(4 * Math.random())
  randomNumber1and3 = Math.floor(4 * Math.random())
  negatedColor = this.state.negatedRandomColors[this.randomNumber1and3]

  // Function to create a new randomColors Array
  newRandomColors = (randomColors, selectedColor, newColor) => {
    arrayToBeUsed = randomColors.slice();
    arrayToBeUsed[selectedColor] = newColor;
    return arrayToBeUsed;
  }
  brandNewRandomColors = this.newRandomColors(this.state.randomColors, this.indexRandomNumber1and3, this.negatedColor)


  getStatus = (colorText, color) => {
    if(colorText.toLowerCase() != color.toLowerCase()){
      this.state.gameStatus = 'Right'
    }else{
      this.state.gameStatus = 'Wrong'
    }
  }

  componentDidMount() {

    // Setting the count time
    this.intervalId = setInterval( () => {
      this.setState((prevState) => {
        return {remainingSeconds: prevState.remainingSeconds - 1};
      }, () => {
        if(this.state.remainingSeconds === 0){
          clearInterval(this.intervalId)
          this.intervalId = 0;
          this.props.saveScore(String(this.props.gameScore));
        }
      });
    }, 1000);
  }


  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextState.gameStatus === "Wrong"){
      clearInterval(this.intervalId)
      this.props.saveScore(String(this.props.gameScore));
    }else if(nextState.gameStatus === "Right"){
      this.props.playAgain();
    }
  }

  render(){
    return(
      <View style={styles.container}>

        <View style={styles.backButtonContainer}>
          <Button buttonStyle={styles.button}
                  icon={{name:"arrow-with-circle-left", type:"entypo", color:"black", size:25}}
                  onPress={this.props.goBack} />
        </View>

        <View style={styles.textContainer}>
          <Text style={[styles.text, {color:'#631791'}]}>Time</Text>
          <Text style={[styles.text, {color:'#D41D5F'}]}>Score</Text>
        </View>

        <View style={styles.dataContainer}>
          <Text style={styles.data}>{this.state.remainingSeconds}</Text>
          <Text style={styles.data}>{this.props.gameScore}</Text>
        </View>

        <View style={styles.colorContainer}>
          <Color id={0}
                 color={this.brandNewRandomColors[0]}
                 colorName={this.randomColorsText[0]}
                 getStatus={this.getStatus}
                 isDisabled={this.state.gameStatus !== 'Playing' || this.state.remainingSeconds === 0}
                />

          <Color id={1}
                 color={this.brandNewRandomColors[1]}
                 colorName={this.randomColorsText[1]}
                 getStatus={this.getStatus}
                 isDisabled={this.state.gameStatus !== 'Playing' || this.state.remainingSeconds === 0 }
                />
        </View>

        <View style={styles.colorContainerSecond}>

          <Color id={2}
                 color={this.brandNewRandomColors[2]}
                 colorName={this.randomColorsText[2]}
                 getStatus={this.getStatus}
                 isDisabled={this.state.gameStatus !== 'Playing' || this.state.remainingSeconds === 0}
                />

          <Color id={3}
                 color={this.brandNewRandomColors[3]}
                 colorName={this.randomColorsText[3]}
                 getStatus={this.getStatus}
                 isDisabled={this.state.gameStatus !== 'Playing' || this.state.remainingSeconds === 0}
                />
        </View>

        <View style={styles.tryAgainContainer}>
          {(this.state.remainingSeconds === 0
            || this.state.gameStatus !== 'Playing')
            && (<Button onPress={this.props.tryAgain}
                        buttonStyle={styles.tryAgain}
                        textStyle={{color:'black'}}
                        icon={{name:"play", type:"font-awesome", color:"black"}}
                        title="Play Again" />)}
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
    flex: 1.7,
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  button:{
    backgroundColor: '#F3F7FF'
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  text: {
    fontSize: 35,
    fontFamily: 'TH3 MACHINE'
  },
  dataContainer: {
    flex: 2.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  data: {
    fontSize: 60
  },
  colorContainer: {
    flex: 7,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  colorContainerSecond: {
    flex: 7,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  tryAgainContainer:{
    flex: 1.5,
    marginBottom: 20,
  },
  tryAgain:{
    backgroundColor: '#F3F7FF',
  }

})
