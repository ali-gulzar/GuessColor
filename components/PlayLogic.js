import React, {Component} from 'react'
import {
  AsyncStorage
} from 'react-native'

import PlayArea from './PlayArea'

export default class PlayLogic extends Component {

  constructor(){
    super()
    this.state = {
      colors: ['purple','orange','yellow','green','pink','blue','red','brown','gray'],
      gameId: 0,
      gameScore: 0,
      highesScores: 0,
      initialSeconds: 10,
    }

    this.goBack =  this.goBack.bind(this)
    this.resetGame = this.resetGame.bind(this)
    this.tryAgain = this.tryAgain.bind(this)
    this.saveScore = this.saveScore.bind(this)
  }

  // Going back button
  goBack = () => {
    this.props.navigation.navigate('Home')
  }

  // Reset Game
  resetGame = ()=>{
    if(this.state.gameScore >= 10 && this.state.gameScore < 25)
    {
      this.setState({
        gameId: this.state.gameId + 1,
        gameScore: this.state.gameScore + 1,
        initialSeconds: 8,
      })

    }
    else if(this.state.gameScore >= 25 && this.state.gameScore < 40)
    {
      this.setState({
        gameId: this.state.gameId + 1,
        gameScore: this.state.gameScore + 1,
        initialSeconds: 6,
      })
    }
    else if(this.state.gameScore >= 40 && this.state.gameScore < 60)
    {
      this.setState({
        gameId: this.state.gameId + 1,
        gameScore: this.state.gameScore + 1,
        initialSeconds: 4,
      })

    }
    else if(this.state.gameScore >= 60)
    {
      this.setState({
        gameId: this.state.gameId + 1,
        gameScore: this.state.gameScore + 1,
        initialSeconds: 2,
      })
    }
    else
    {
      this.setState({
        gameId: this.state.gameId + 1,
        gameScore: this.state.gameScore + 1,
      })

    }
  }

  // Try Again with a new score
  tryAgain = () => {
    this.setState({
      gameId: this.state.gameId + 1,
      gameScore: 0,
      initialSeconds: 10,
    })
  }

  saveScore = (scoreSubmitting) => {
    AsyncStorage.getItem('@HighScore:score',
    (err,data) =>{
      if(err){
        console.warn(err)
      }else{
        if(data !== null)
        {
          if( parseInt(data) < parseInt(scoreSubmitting))
          {
            AsyncStorage.setItem('@HighScore:score',scoreSubmitting)
          }

        }
        else
        {
          AsyncStorage.setItem('@HighScore:score',scoreSubmitting)
        }
      }
    })
  }



  render(){
    return(
      <PlayArea
        key={this.state.gameId}
        goBack={this.goBack}
        randomColorsArray={this.state.colors}
        initialSeconds={this.state.initialSeconds}
        playAgain={this.resetGame}
        tryAgain={this.tryAgain}
        gameScore={this.state.gameScore}
        saveScore={this.saveScore} />
    )
  }
}
