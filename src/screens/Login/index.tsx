import { Alert, Keyboard, Modal, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { styles } from './styles'
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import UserModal from '../UserModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

export default function Login({ onSwitch }: { onSwitch: () => void }) {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalTitle, setModalTitle] = useState<string>("");
    const [modalMessage, setModalMessage] = useState<string>("");
    const { login } = useContext(AuthContext);

    const handleLogin = async () => {
        if (email !== '' && password !== '') {
            try {
                const response = await axios.post('http://192.168.1.3:8080/auth/login', {
                    username: email,
                    password: password
                });

                const data = response.data;

                console.log("Resposta da API:", data);

                await AsyncStorage.setItem('token', data.token);

                login(data.token, data.user);

                Alert.alert('Sucesso', 'Login realizado com sucesso!');
            } catch (error: any) {
                let message = 'Erro ao fazer login';

                if (error.response) {
                    if (error.response.status === 401) {
                        message = 'Email ou senha inválidos!';
                    } else if (error.response.data && error.response.data.message) {
                        message = error.response.data.message;
                    }
                } else if (error.message) {
                    message = error.message;
                }

                setModalTitle('Erro');
                setModalMessage(message);
                setShowModal(true);
            }
        } else if (email === '' && password === '') {
            setModalTitle('Erro');
            setModalMessage('Os campos de email e senha devem ser preenchidos!');
            setShowModal(true);
        } else if (email === '') {
            setModalTitle('Erro');
            setModalMessage('O campo de email deve ser preenchido!');
            setShowModal(true);
        } else {
            setModalTitle('Erro');
            setModalMessage('O campo de senha deve ser preenchido!');
            setShowModal(true);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.contentForm}>
                    <View>
                        <Text style={styles.formTitle}>Realizar Login</Text>
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
                        onPress={handleLogin}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <View>
                        <Text>
                            Não é um usuário?ㅤ
                            <Text 
                                style={styles.registerText} 
                                onPress={onSwitch}
                            >
                                Registrar-se
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