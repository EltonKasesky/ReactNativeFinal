import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'

export default function Contato() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")

    const handleSubmit = () => {
        if (!nome || !email || !mensagem) {
            Alert.alert("Por favor, preencha todos os campos.");
        }
        else {
            Alert.alert("Formulário enviado com sucesso");
            setNome("")
            setEmail("")
            setMensagem("")
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Contate-nos</Text>
            <View style={styles.linha} />
            <View style={styles.texto2}>
                <Image source={require("../../../assets/email.jpg")} style={{ width: 20, height: 15 }} />
                <Text style={{ marginBottom: 5, }}> Email: Contato@DiscoverTV.com.br</Text>
            </View>
            <View style={styles.texto2}>
                <Image source={require("../../../assets/telefone.png")} style={{ width: 20, height: 17 }} />
                <Text style={{ marginBottom: 12, }}> Telefone: 2222-2222</Text>
            </View>

            <Text style={styles.texto}>Nome:</Text>
            <TextInput
                style={styles.input}
                placeholder='Digite seu nome'
                value={nome}
                onChangeText={setNome}
            />

            <Text style={styles.texto}>Email:</Text>
            <TextInput
                style={styles.input}
                placeholder='Digite seu email'
                value={email}
                onChangeText={setEmail}
            />

            <Text style={styles.texto}>Mensagem:</Text>
            <TextInput
                style={styles.input}
                placeholder='Digite sua mensagem'
                value={mensagem}
                onChangeText={setMensagem}
            />

            <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
                <Text style={{ color: "#fff" }}>Enviar</Text>
            </TouchableOpacity>
        </View>
    )
}

