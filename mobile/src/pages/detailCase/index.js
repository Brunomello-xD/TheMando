import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";

//Abre o melhor tamanho de acordo com o tamanho da tela
import logoImg from "../../assets/logo.png";
import imgPerfil from "../../assets/imgPerfil.png";
import imgPerfilComment from "../../assets/imgPerfilTemp.png";
import { TextInput } from "react-native-gesture-handler";

export default function detailCase() {
  const [value, onChangeText] = React.useState();

  return (
    <View style={styles.container}>
      <View style={styles.viewMenu}>
        <Image source={logoImg} />
      </View>

      <View style={styles.menuPerfil}>
        <Image source={imgPerfil} style={styles.imgPerfil} />
        <Text style={styles.textMenuPerfil}>Bruno Mello</Text>
      </View>

      <View style={styles.viewTopic}>
        <Text style={styles.titleTopic}>
          Primeiros passos de um Mandaloriano
        </Text>
        <Text style={styles.descriptionTopic}>
          The Mandalorian é uma série de televisão de ópera espacial americana
          programada que estreou no Disney+ em 12 de novembro de 2019. Instalada
          no universo de Star Wars, a série acontece alguns anos após os eventos
          de Return of the Jedi e segue um solitário Gunfighter mandaloriano
          além dos limites da Nova República.
        </Text>
      </View>

      <Text style={styles.comment}>Faça um comentário:</Text>
      <TextInput
        style={styles.commentText}
        multiline={true}
        textAlign={"left"}
        textAlignVertical={"top"}
        numberOfLines={30}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      ></TextInput>

      <TouchableOpacity style={styles.buttonResp}>
        <Feather name="corner-down-left" size={14} color={"#000"}>
          <Text style={styles.textComment}> Responder</Text>
        </Feather>
      </TouchableOpacity>

      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7]}
        style={styles.viewComments}
        keyExtractor={(commentList) => String(commentList)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.commentList}>
            <View style={styles.perfilUser}>
              <Image
                style={styles.imgPerfilComment}
                source={imgPerfilComment}
              ></Image>
              <Text style={styles.nameUser}>Bruno Mello</Text>
            </View>

            <Text style={styles.commentUser}>Nice post!</Text>
          </View>
        )}
      />
    </View>
  );
}
