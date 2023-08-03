import React, {useState} from "react";
import { Text, Button } from "react-native";
import estilo from "./estilo";

export default props => {
        const [numero, setNumero] = useState(props.inicial)

    const inc = () => setNumero(numero + props.passo)
    const dec = () => setNumero(numero - props.passo)
    
    return (
        <>
            <Text style={estilo.fontG}>{numero}</Text>
            <Button title="+" onPress={inc} />
            <Button title="-" onPress={dec}/>
        </>
    )  

}