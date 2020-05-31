import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

import logoImg from "../../assets/logo.png";

export default function register() {
  return (
    <View style={styles.container}>
      <View style={styles.viewMenu}>
        <Image source={logoImg} />
        <Text style={styles.textWelcome}>Seja bem-vindo!</Text>
      </View>

      <Text style={styles.textCadastro}>Cadastro</Text>

      <Input
        placeholder=" Nome"
        leftIcon={<Icon name="user" size={18} color="black" />}
      />
      <Input
        placeholder=" Nome de usuário"
        leftIcon={<Icon name="user-secret" size={18} color="black" />}
      />
      <Input
        placeholder=" E-mail"
        leftIcon={<Icon name="envelope" size={18} color="black" />}
      />
      <Input
        secureTextEntry={true}
        placeholder=" Senha"
        leftIcon={<Icon name="lock" size={22} color="black" />}
      />

      <TouchableOpacity style={styles.buttonCreate}>
        <Text style={styles.textButtonCreate}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
