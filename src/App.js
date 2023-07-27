import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
// import Primeiro from './components/Primeiro'
// import X, { Comp1, Comp2 } from './components/Multi'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio'
// import Titulo from './components/Titulos'
// import Botao from './components/Botao'
import Contador from './components/Contador'

export default () => (
    <View style={style.App}>
        <Contador inicial={100} />
        {/* <Botao /> */}
        {/* <Titulo principal="Cadastro Produto"
            secundario="Tela de Cadastro"/> */}
        {/* <Aleatorio min={1} max={60}/> */}
        {/* <MinMax min={3} max={20} />
        <MinMax min={1} max={100} /> */}
        {/* <X />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </View>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: 'center'
    }
})











 