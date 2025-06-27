import { StyleSheet } from "react-native";

const style = {
    bg_primary: "#FFF",
    text_primary: "#FF0000",
    text_secondary: "#000",
    bg_button: "#FF0000",
    text_button: "#FFF",
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentModal: {
        gap: 20,
        width: "100%",
        height: "auto",
        maxWidth: "90%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: style.bg_primary,
        padding: 16,
        borderRadius: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: style.text_primary
    },
    message: {
        fontSize: 16,
        color: style.text_secondary
    },
    button: {
        width: "100%",
        padding: 10,
        borderRadius: 4,
        backgroundColor: style.bg_button
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: style.text_button,
        textAlign: "center",
    }
})