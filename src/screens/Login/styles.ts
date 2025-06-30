import { StyleSheet } from "react-native";

const style = {
    bg_primary: "#FFF",
    bg_secondary: "#EFEFEF",
    text_primary: "#7B01FF",
    text_secondary: "#000",
    border_primary: "#222",
    bg_button: "#7B01FF",
    text_button: "#FFF"
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: style.bg_primary
    },
    contentForm: {
        gap: 20,
        width: "100%",
        height: "auto",
        maxWidth: "90%",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 3,
        borderColor: style.bg_secondary,
        padding: 16,
        borderRadius: 8,
    },
    formTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: style.text_primary
    },
    contentInput: {
        gap: 5,
        width: "100%",
        borderBottomWidth: 1,
        borderColor: style.border_primary
    },
    inputText: {
        fontSize: 16,
        fontWeight: 500
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7
    },
    icon: {
        marginRight: 10,
    },
    inputField: {
        height: 32,
        width: "100%",
        fontSize: 14,
        outlineWidth: 0,
    },
    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 36,
        borderRadius: 4,
        backgroundColor: style.bg_button
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 500,
        color: style.text_button
    },
    registerText: {
        color: style.text_primary
    },
    modalBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
})