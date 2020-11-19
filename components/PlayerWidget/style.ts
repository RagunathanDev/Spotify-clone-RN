import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    Container: {
        flexDirection: "row",
        position: "absolute",
        bottom: 48
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

    },
    threeDot: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: 20,

    }

})



export default styles;