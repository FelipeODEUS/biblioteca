import React, {Component} from "react";
import { StyleSheet, Text, View } from "react-native-web";

export default class Teladepesquisa extends Component{
    render(){
        return(
            <View style = {styles.tela}>
                <Text style = {styles.text}>
                    Pesquise o livro aqui
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    tela: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5653D4"
    },
    text: {
        color: "#fff",
        fontSize: 30
    }
})