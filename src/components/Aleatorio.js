import React from "react";
import { Text, StyleSheet, View } from "react-native";
import estilo from "./estilo";

export default props => {
    const formula = props.max - props.min + 1
    const aleatorio = parseInt(Math.random() * formula) + props.min
    return (
        <Text style={estilo.fontG}>
            O valor aleatório é {aleatorio}
        </Text>
    )

}