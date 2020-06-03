import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

import logoImg from "../../assets/logo.png";

export default function newCase() {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.viewMenu}>
        <Image source={logoImg} />
        <Text style={styles.textWelcome}>Seja bem-vindo!</Text>
      </View>

      <Text style={styles.textNewTopic}>Novo tópico</Text>

      <View style={styles.form}>
        <Text style={styles.textTitle}>Título:</Text>
        <Input
          textAlign={"left"}
          leftIcon={<Icon name="angle-double-right" size={18} color="black" />}
        ></Input>

        <Text style={styles.textDescription}>Descrição:</Text>
        <TextInput
          multiline={true}
          numberOfLines={10}
          textAlign={"left"}
          textAlignVertical={"top"}
          style={styles.textInputDescription}
        ></TextInput>

        <TouchableOpacity style={styles.buttonNewTopic}>
          <Text style={styles.textButtonNewTopic}>Criar tópico</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
