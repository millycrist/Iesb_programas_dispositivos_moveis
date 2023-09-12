import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Profile({imgUri, genero, nome, email, telefone}) {

    const pessoa = {
        imgUri: "../assets/foto.jpg",
        genero: " Feminino",
        nome: " Milena C. Hosana de Sousa.",    
        email: " milenahosana99@gmail.com",
        telefone: " (61)98664-1718"
    }

    return (

        <View style={styles.container}>
            

            <View>
                <Text style={styles.texto}>Profile da Milena!                                                                     </Text>
            </View>
            
            <Image
                style={styles.imagem}
                source={require("../Iesb_programas_dispositivos_moveis/assets/foto.jpg")}>
            </Image>

            <View style={styles.labelContainer}>
                <Text style={[styles.textoLabel, styles.texto]}>Gênero:</Text>
                <Text style={styles.texto}>{pessoa.genero}</Text>
            </View>

            <View style={styles.labelContainer}>
                <Text style={[styles.textoLabel, styles.texto]}>Nome:</Text>
                <Text style={styles.texto}>{pessoa.nome}</Text>
            </View>

            <View style={styles.labelContainer}>
                <Text style={[styles.textoLabel, styles.texto]}>Telefone:</Text>
                <Text style={styles.texto}>{pessoa.telefone}</Text>
            </View>

            <View style={styles.labelContainer}>
                <Text style={[styles.textoLabel, styles.texto]}>E-mail:</Text>
                <Text style={styles.texto}>{pessoa.email}</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "purple",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 15,
        marginTop: "10%"
    },

    labelContainer: {
       
        flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: '98%',
        padding: 10,
    },

    texto: {
        alignItems: "center",
        fontWeight: "bold",
        fontSize: 20,
        color: "white",
    },

    textoLabel: {
        fontSize: 30,
        fontWeight: "bold"

    },

    imagem: {
        justifyContent: 'center',
        width: 300,
        height: 370,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 500,
        padding: 20,
        marginTop: 20,
        marginLeft: 20
    }
})
