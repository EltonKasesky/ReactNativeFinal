import {
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
  View,
  Image,
} from "react-native";
import React from "react";
import Contato from "../Contato";

export default function QuemSomos() {
  const colaboradores = [
    {
      nome: "Alexandre Oliveira Paixão Filho",
      github: "https://github.com/aopaixao-filho",
      foto: "https://avatars.githubusercontent.com/u/124394818?v=4",
    },

    {
      nome: "Elton Giglio Kasesky",
      github: "https://github.com/EltonKasesky",
      foto: "https://avatars.githubusercontent.com/u/153327569?v=4",
    },

    {
      nome: "José Augusto dos Santos Junior",
      github: "https://github.com/Junior411917",
      foto: "https://avatars.githubusercontent.com/u/202855526?v=4",
    },

    {
      nome: "Miguel Cardoso Tavares",
      github: "https://github.com/Miguel003624",
      foto: "https://avatars.githubusercontent.com/u/205827332?v=4",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Sobre Nós</Text>

        <Text style={[styles.text, styles.espaçoDeParagrafo]}>
          Apaixonados por boas histórias, nossa plataforma de streaming nasceu
          do desejo de conectar pessoas com o que há de melhor no entretenimento
          audiovisual.
        </Text>

        <Text style={[styles.text, styles.espaçoDeParagrafo]}>
          De grandes clássicos a lançamentos - sucessos de bilheteria a joias
          raras, acreditamos no poder inspirador e transformador que boas obras
          possuem. Nosso catálogo é cuidadosamente selecionado para oferecer uma
          experiência completa para cinéfilos e amantes de séries.
        </Text>

        <Text style={[styles.text, styles.espaçoDeParagrafo]}>
          Ao oferecer uma experiência dinâmica para todas as audiências,
          ofertamos um espaço de descoberta, onde cada clique pode levar a uma
          experiência única e inesquecível. Nossa plataforma se alinha ao desejo
          de reinventar a forma como você assiste, descobre e compartilha o
          entretenimento que lhe é entregue. A qualquer hora, em qualquer lugar,
          com a melhor qualidade e a curadoria que você merece.
        </Text>

        <Text style={[styles.text, styles.espaçoDeParagrafo]}>
          Sinta-se abraçado pelo entretenimento sem fronteiras!
        </Text>
      </View>

      <View style={{ marginBottom: 40 }}>
        <Text style={[styles.title, styles.espaçoDeParagrafo]}>
          Colaboradores
        </Text>

        {colaboradores.map((colaborador, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => Linking.openURL(colaborador.github)}
          >
            <Image
              source={{ uri: colaborador.foto }}
              style={styles.fotoColaborador}
            />

            <View style={styles.colaboradorContainer}>
              <Text style={styles.nomeColaborador}>{colaborador.nome}</Text>

              <Text style={styles.textoGitHub}>Ver o perfil do GitHub</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <Contato/>
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
    color: "#7B01FF"
  },
  text: {
    textAlign: "justify",
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
  espaçoDeParagrafo: {
    marginTop: 20,
  },
  colaboradorContainer: {
    backgroundColor: "#f8f8f8",
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  colaboradorCard: {
    alignItems: "center",
    padding: 20,
  },
  textoGitHub: {
    fontSize: 14,
    color: "#666",
    fontStyle: "italic",
    marginBottom: 15,
    textAlign: "center",
  },
  fotoColaborador: {
    alignSelf: "center",
    width: 80,
    height: 80,
    borderRadius: 100,
    marginBottom: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  nomeColaborador: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
});
