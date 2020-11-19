import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    Container: {
        flexDirection: "row",
    },
    SongImage: {
        width: width * 0.15,
        height: width * 0.15,
        margin: 10,
        borderRadius: width * 0.15
    },
    NameList: {
        justifyContent: "center",
        marginLeft: 5
    },
    Songtitle: {
        color: Colors.dark.tabIconSelected,
        fontWeight: "bold",
        fontSize: 18,
        paddingBottom: 5,

    },
    Songartist: {

    }

})



export default styles;