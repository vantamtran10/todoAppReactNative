import React, {useState} from "react";
import {Text, View, Button, StyleSheet, TextInput, TouchableOpacity} from "react-native";

export default function TodoItemNotes({route, navigation}) {
    /* 2. Get the param */
    const { todoObject, addNote } = route.params;

    const [newText, setNewText] = useState(todoObject.text)
    const [notes, setNotes] = useState(todoObject.note);
    const handleUpdate = () => {
        addNote(todoObject.id, newText, notes);
    }
    return (
        <View>
            <View>
                <Text style={styles.titleText}>Title:</Text>
                <TextInput
                    style={styles.textInput1}
                    placeholder={'Edit your title...'}
                    editable={!todoObject.complete}
                    numberOfLines={5}
                    value={newText}
                    onChangeText={ setNewText }
                />
            </View>
            <View>
                <Text style={styles.titleText}>Notes:</Text>
                <TextInput
                    style={styles.textInput2}
                    multiline
                    numberOfLines={4}
                    editable={!todoObject.complete}
                    placeholder={'Add a notes...'}
                    value={notes}
                    onChangeText={ setNotes }
                />
            </View>

            <View style={styles.row}>
                <TouchableOpacity onPress={ () => handleUpdate()} style={styles.button}>
                    <Text style={styles.button}>Save</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('mainPage')} style={styles.button}>
                    <Text style={styles.button}>Go Home</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'stretch',
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 8,
        marginLeft: 10,
        marginRight: 10
    },
    textInput1: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        paddingLeft: 10,
        fontSize: 20
    },
    textInput2: {
        height: 120,
        margin: 12,
        borderWidth: 1,
        paddingLeft: 10,
        fontSize: 20
    },
    titleText: {
        padding: 10,
        fontSize: 20,
        fontWeight: "bold"
    },
    row: {
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: "center"
    },
    button: {
        backgroundColor: 'rgb(33, 150, 243)',
        fontWeight: "bold",
        margin: 10,
        borderRadius: 5,
        alignSelf: 'center',
        color: 'white'
    }
})
