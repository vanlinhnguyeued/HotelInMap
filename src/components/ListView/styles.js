import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    itemBtn: {
        backgroundColor: 'white',
        flexDirection: 'column',
        height: 70,
        width: '100%',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    viewItem: {
        height: '50%',
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 10
    },
    nameItem:{
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#848484',
    },
    status:{
        marginLeft: 20,
        color: '#FE9A2E',
        fontSize: 13,
    }
});
export default styles;