import React, {useState} from "react";
import { Text, Button } from "react-native";
import estilo from "./estilo";

export default props => {
    let numero = props.inicial

    const inc = () => numero++  
    const dec = () => numero--  
    
    return (
        <>
            <Text style={estilo.fontG}>{numero}</Text>
            <Button title="+" onPress={inc} />
            <Button title="-" onPress={dec}/>
        </>
    )  

}