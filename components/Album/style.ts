import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    album__container: {
        width: width / 2 - 85,
        margin: 6,

    },
    album__image: {
        width: "100%",
        height: width * 0.30,
        borderRadius: 10
    },
    album__artistName: {
        marginTop: 8,
        color: "#6a6e63",
        textTransform: "capitalize"
    }
})
export default styles;
