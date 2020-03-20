import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    searchView: {
        position: 'absolute',
        left: 20,
        right: 20,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        top: 30,
        height: 60,
    },
    searchInput: {
        width: '80%',
        height: '100%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FF415B',
        marginRight: 10,
        color: 'white',

    },
    mapView: {
        flex: 1,
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
    },
    seeDetailsView: {
        position: 'absolute',
        bottom: 30,
        height: '8%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    seeDetailsBtn: {
        width: '60%',
        height: "80%",
        flexDirection: 'row',
        backgroundColor: '#FF415B',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    seeDailtText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10,
    },
    targetBtn: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        bottom: 150,
        right: 20,
    },
    targetImg: {
        flex: 1,
        width: 50,
        height: 50,
    }


});
export default styles;