import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    title: {
        color: "#ffffff", //white
        fontWeight: "bold",
        fontStyle: "normal",
        fontSize: 20,
        margin: 10,
        textTransform: "capitalize"
    }
})

export default styles;