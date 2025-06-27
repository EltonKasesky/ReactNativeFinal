import { Alert, Keyboard, Modal, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { styles } from './style';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import UserModal from '../UserModal';
import axios from 'axios';

export default function Register({ onSwitch }: { onSwitch: () => void }) {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalTitle, setModalTitle] = useState<string>("");
    const [modalMessage, setModalMessage] = useState<string>("");

    const handleRegister = async () => {
        if (name === '' || email === '' || password === '') {
            setModalTitle('Erro');
            setModalMessage('Todos os campos devem ser preenchidos!');
            setShowModal(true);
            return;
        }

        try {
            const response = await axios.post('http://192.168.1.3:8080/users', {
                name,
                email,
                password,
            });

            onSwitch();

            setName('');
            setEmail('');
            setPassword('');

        } catch (error: any) {
            let message = 'Erro ao registrar';
            if (error.response?.data?.message) {
                message = error.response.data.message;
            }
            setModalTitle('Erro');
            setModalMessage(message);
            setShowModal(true);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.contentForm}>
                    <View>
                        <Text style={styles.formTitle}>Realizar Registro</Text>
                    </View>

                    <View style={styles.contentInput}>
                        <Text style={styles.inputText}>Nome</Text>
                        <View style={styles.inputContainer}>
                            <FontAwesome name="user" size={18} color="#7B01FF" />
                            <TextInput
                                style={styles.inputField}
                                value={name}
                                onChangeText={(e) => setName(e)}
                                placeholder="Digite seu nome"
                                placeholderTextColor="#777"
                                autoCapitalize='words'
                            />
                        </View>
                    </View>

                    <View style={styles.contentInput}>
                        <Text style={styles.inputText}>Email</Text>
                        <View style={styles.inputContainer}>
                            <FontAwesome name="at" size={18} color="#7B01FF" />
                            <TextInput
                                style={styles.inputField}
                                value={email}
                                onChangeText={(e) => setEmail(e)}
                                keyboardType="email-address"
                                placeholder="Digite seu email"
                                placeholderTextColor="#777"
                                autoCapitalize='none'
                            />
                        </View>
                    </View>

                    <View style={styles.contentInput}>
                        <Text style={styles.inputText}>Senha</Text>
                        <View style={styles.inputContainer}>
                            <FontAwesome name="lock" size={18} color="#7B01FF" />
                            <TextInput
                                style={styles.inputField}
                                value={password}
                                onChangeText={(e) => setPassword(e)}
                                placeholder="Digite sua senha"
                                placeholderTextColor="#777"
                            />
                        </View>
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleRegister}
                    >
                        <Text style={styles.buttonText}>Registrar</Text>
                    </TouchableOpacity>

                    <View>
                        <Text>
                            Ja é um usuário?ㅤ
                            <Text 
                                style={styles.registerText}
                                onPress={onSwitch}
                            >
                                Fazer login
                            </Text>
                        </Text>
                    </View>

                    <Modal
                        transparent={true}
                        visible={showModal}
                        animationType="fade"
                        onRequestClose={() => setShowModal(false)}
                    >
                        <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
                            <UserModal title={modalTitle} message={modalMessage} onClose={() => setShowModal(false)} />
                        </TouchableWithoutFeedback>
                    </Modal>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}