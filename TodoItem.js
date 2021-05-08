import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

export default function TodoItem({todo, deleteTodo, setComplete, addNote}) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={ () => navigation.navigate('TodoItemNotes',{
                todoObject: todo,
                addNote: addNote
            })}>
            <View style={styles.wrapper} >
                <TouchableOpacity onPress={ () => setComplete(todo.id)}>
                    <Icon
                        name={todo.complete ? "check" : "square"}
                        size={30}
                        color='teal'
                    />
                </TouchableOpacity>

                <Text style={styles.textInput}>{todo.text} - {todo.complete}</Text>

                <TouchableOpacity onPress={ () => deleteTodo(todo.id)}>
                    <Icon
                        name="x-circle"
                        size={30}
                        color='red'
                    />
                </TouchableOpacity>

            </View>
        </TouchableOpacity>

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
    textInput: {
        flex: 1,
        marginTop: 5,
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 10,
        minHeight: 30
    }
})
