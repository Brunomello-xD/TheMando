import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome5, FontAwesome, Feather } from "@expo/vector-icons";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import logoImg from "../../assets/logo.png";

export default function Login() {
  const navigation = useNavigation();

  //Botão "Tornar-se um Mando"
  function navigateToRegister() {
    navigation.navigate("register");
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewMenu}>
        <Image source={logoImg} />
        <Text style={styles.textWelcome}>Seja bem-vindo!</Text>
      </View>

      <Text style={styles.textLogin}>Faça seu Login</Text>
      <Input
        placeholder="  E-mail"
        leftIcon={<Icon name="envelope" size={18} color="black" />}
      />
      <Input
        secureTextEntry={true}
        placeholder=" Senha"
        leftIcon={<Icon name="lock" size={22} color="black" />}
      />

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

      <TouchableOpacity onPress={navigateToRegister} style={styles.register}>
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
