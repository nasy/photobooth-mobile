import {
    StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
    content: {
        marginTop:75
    },
    image : {
        marginTop: 0, 
        borderWidth: 0, 
        borderTopRightRadius: 0, 
        borderTopLeftRadius: 0, 
        borderColor: 'white'
    },
    item: {
        margin:1,
        marginBottom:0,
        display: 'flex',
        borderRadius: 8
    },
    noResults: {
        margin:2,
    },
    noResultsText: {
        fontSize: 16,
        padding: 20,
    },
});