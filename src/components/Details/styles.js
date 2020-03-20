import { StyleSheet, Dimensions } from 'react-native';

const FONT_SIZE_1 = 15;
const FONT_SIZE_2 = 13;
const TEXT_COLOR_1 = 'white';
const BGR_COLOR_1 = '#088A68';
const WIDTH_SCREEN = Dimensions.get('window').width;
const styles = StyleSheet.create({
    content: {
        width: WIDTH_SCREEN,
        position: 'relative',
        
    },
    viewMaxim: {
        position: 'absolute',
        backgroundColor: BGR_COLOR_1,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        top: 0,
    },
    txtMaxim: {
        position: 'absolute',
        textAlign: "center",
        color: 'white',
        paddingLeft: 30,
        paddingRight: 30,
        letterSpacing: 2,
        fontSize: FONT_SIZE_1,
    },
    imgView: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    imgHotelRoom: {
        flex: 1,
        width: null,
        height: null
    },
    addressView: {
        position: 'absolute',
        left: 0,
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        flexDirection: 'column',
        width: '100%',
    },
    nameItem: {
        color: TEXT_COLOR_1,
        fontSize: FONT_SIZE_1,
        textTransform: 'uppercase',
        letterSpacing: 3,
        height: '50%',
    },
    status: {
        color: '#FE9A2E',
        fontSize: FONT_SIZE_2,
        letterSpacing: 5,
        textAlign: 'center',
        height: '50%',
    },
    btnView: {
        width: 50,
        height: 50,
        position: 'absolute',
        top: '50%',
        borderRadius: 100,
    },
    btnPlay: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 100
    },
    viewRating: {
        position: 'absolute',
        top: '60%',
        left: 20,
    },
    txtAddress: {
        position: 'absolute',
        bottom: '46%',
        left: 20,
        fontSize: FONT_SIZE_2,
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: 3,
        color: '#1C1C1C',
        width: '50%',
    },
    contactView: {
        marginTop: 20,
        width: '100%',
        height: '40%',
        position: 'absolute',
        flexDirection: 'row',
    },
    imgConTactView: {
        width: '50%',
        height: '100%',
        flexDirection: 'column',
        position: 'relative',
    },
    imgConTact: {
        flex: 1,
        width: null,
        height: null,
    },
    textOrder: {
        textAlign: 'center',
        padding: 20,
        fontWeight: 'bold',
        letterSpacing: 2,
        color: BGR_COLOR_1,
        fontSize: FONT_SIZE_1,
    },
    feedBack: {

    }
})
export default styles;