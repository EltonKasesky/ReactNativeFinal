import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20

    },
    titulo: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#7b01ff",
        textAlign: "center"

    },
    input: {
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginTop: 5,
    },
    botao: {
        backgroundColor: "#7b01FF",
        padding: 10,
        marginTop: 13,
        alignItems: "center",
        borderRadius: 8
    },
    texto: {
        padding: 5
    },
    linha: {
        height: 1,
        backgroundColor: "#ccc",
        margin: 10
    },
    texto2: {
        flexDirection: "row",
        justifyContent: "center"
    },
})