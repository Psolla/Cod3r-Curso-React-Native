import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Estilo from './estilo'

export default props => {
    return(
        <Text style={Estilo.fontG}>
             {props.num}
         </Text>
    )
}