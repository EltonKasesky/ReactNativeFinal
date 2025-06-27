import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style'

type Props = {
    title: string;
    message: string;
    onClose: () => void;
};

export default function UserModal({ title, message, onClose }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.contentModal}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.message}>{message}</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={onClose}
                >
                    <Text style={styles.buttonText}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
