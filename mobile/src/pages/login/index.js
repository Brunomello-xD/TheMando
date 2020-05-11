import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import useNavigation from "@react-navigation/native";
import { FontAwesome5, FontAwesome, Feather } from "@expo/vector-icons";

import styles from "./styles";

import logoImg from "../../assets/logo.png";

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} />
      <Text style={styles.textWelcome}>Seja bem-vindo!</Text>

      <Text style={styles.textLogin}>Faça seu Login</Text>
      <TextInput style={styles.inputEmail} placeholder="   E-mail"></TextInput>
      {/**Define o input como type: password: secureTextEntry={true} */}
      <TextInput
        style={styles.inputPassword}
        secureTextEntry={true}
        placeholder="   Senha"
      ></TextInput>
      <TouchableOpacity style={styles.buttonRecover}>
        <Feather name="key" size={14} color="#3d3d3d" />
        <Text style={styles.textRecover}>Esqueci minha senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonLogin}>
        <Text style={styles.textButtonLogin}>Entrar</Text>
      </TouchableOpacity>

      <View>
        <View style={styles.viewSocial}>
          <TouchableOpacity style={styles.facebook}>
            <FontAwesome name="facebook-square" color="#fff" size={14} />
            <Text style={styles.textFacebook}>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.google}>
            <FontAwesome name="google" color="#fff" size={14} />
            <Text style={styles.textGoogle}>Google</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.register}>
        <Feather name="log-in" size={14} color="#2d5a35" />
        <Text style={styles.textRegister}>Tornar-se um Mando</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.viewMando}>
        <FontAwesome5
          style={styles.iconMando}
          name="mandalorian"
          size={12}
          color="#000"
        />
        <Text style={styles.textMando}>The Mandalorian</Text>
      </TouchableOpacity>
    </View>
  );
}
