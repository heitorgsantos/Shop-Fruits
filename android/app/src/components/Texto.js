import React from "react";
import { Text, StyleSheet } from "react-native";

const Texto = ({ children, style }) => {
    let estilo = estilos.texto;
    if(style?.fontWeight ==="bold") {
        estilo = estilos.fontNegrito;
    }
  return <Text style={[style, estilo]}>{children}</Text>;
}

const estilos = StyleSheet.create({
  texto: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
  },
  fontNegrito: {
    fontFamily: "Montserrat Bold",
    fontWeight: "bold",
  },
});

export default Texto;