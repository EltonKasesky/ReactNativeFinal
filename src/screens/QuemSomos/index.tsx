import { Text, ScrollView, StyleSheet } from "react-native";
import React from "react";

export default function QuemSomos() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Sobre Nós</Text>
            <Text style={styles.text}>
                Somos apaixonados por boas histórias. Nossa plataforma de streaming
                nasceu do desejo de conectar pessoas ao melhor do cinema — de grandes
                clássicos a lançamentos independentes, de sucessos de bilheteria a joias
                escondidas. Acreditamos que todo filme tem o poder de emocionar,
                inspirar e transformar. Nosso catálogo é cuidadosamente selecionado para
                oferecer uma experiência completa a cinéfilos e amantes de séries de
                todos os estilos. Mais do que um serviço, somos um espaço de descoberta,
                onde cada clique pode levar a uma nova paixão. Estamos aqui para
                reinventar a forma como você assiste, descobre e compartilha o
                entretenimento. A qualquer hora, em qualquer lugar, com a melhor
                qualidade e a curadoria que você merece. Bem-vindo ao cinema sem
                fronteiras.
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 15,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        color: "#333",
    },
});
