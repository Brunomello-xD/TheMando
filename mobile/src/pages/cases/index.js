import React from "react";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";

//Abre o melhor tamanho de acordo com o tamanho da tela
import logoImg from "../../assets/logo.png";

export default function cases() {
  const navigation = useNavigation();

  //Botão "Detalhes"
  function navigateToDetailCase() {
    navigation.navigate("detailCase");
  }

  function navigateToNewCase() {
    navigation.navigate("newCase");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>Bem-vindo!</Text>
      </View>

      <Text style={styles.description}>
        Escolha um dos tópicos abaixo e interaja com outros Mandaloriano.
      </Text>

      {/**Botão cadastrar novo tópico */}
      <View style={styles.viewNewCase}>
        <TouchableOpacity
          style={styles.buttonNewCase}
          onPress={navigateToNewCase}
        >
          <Feather name="plus" size={18} color={"#1b1b1b"} />
          <Text style={styles.textButtonNewCase}>Novo tópico</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        style={styles.viewCases}
        showsVerticalScrollIndicator={false}
        keyExtractor={(casesList) => String(casesList)}
        renderItem={() => (
          <View style={styles.casesList}>
            <Text style={styles.title}>
              Primeiros passos de um Mandaloriano
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={navigateToDetailCase}
            >
              <Text style={styles.detailsTopic}>Detalhes</Text>
              <Feather name="arrow-right" size={14} color="#2d5a35" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
