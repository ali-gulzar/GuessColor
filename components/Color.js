import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import ColorTools from 'color'

export default class Color extends Component{
  static propTypes = {
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    colorName: PropTypes.string.isRequired,
    getStatus: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired,
  }

  handlePress = () => {
    if(this.props.isDisabled){return;}
    this.props.getStatus(this.props.colorName,this.props.color)
  }

  render(){
    return(
      <TouchableOpacity style={[styles.color,
                        {backgroundColor: this.props.color}]}
                        onPress={this.handlePress}>
        <Text style={[styles.colorName, this.props.isDisabled && styles.disabled]}>
          {this.props.colorName}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  color: {
    borderWidth: 2,
    width: 85,
    height: 70,
    borderRadius: 5,
    justifyContent: 'center'
  },
  colorName:{
    textAlign: 'center',
    fontSize: 22,
  },
  disabled: {
    opacity: 0.5
  }

})
