import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    Container: {
        flexDirection: "row",
        position: "absolute",
        bottom: 48,
        borderWidth: 0.5,
        borderColor: "#deffe3",
        borderRadius: 10,
    },
    SongImage: {
        width: width * 0.10,
        height: width * 0.10,
        margin: 5,
        borderRadius: width
    },
    NameList: {
        flexDirection: "row",
        justifyContent: "center",
        marginLeft: 5,

    },
    Songtitle: {
        color: Colors.dark.tabIconSelected,
        fontWeight: "bold",
        fontSize: 18,
        alignSelf: "center"
    },
    Songartist: {

        alignSelf: "center"
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