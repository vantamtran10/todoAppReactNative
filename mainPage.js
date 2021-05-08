import {ScrollView, StyleSheet, TextInput, TouchableOpacity, Keyboard , View} from "react-native";
import React, {useState} from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import TodoItem from './TodoItem';
import { v4 as uuidv4 } from 'uuid';

const mainPage = ( {navigation} ) =>{
    const [value, setValue] = React.useState('');
    const [todoList, setTodoList] = useState([]);

    const handleAddTodo = () => {
        if (value.length > 0){
            setTodoList([...todoList,
                {
                    id: uuidv4(),
                    text: value,
                    note: '',
                    complete: false
                }
            ]);
        }else{
            alert('please enter your task!')
        }

         setValue('');
         Keyboard.dismiss();
    }

    const handleSetComplete = (id) => {
        setTodoList(
            todoList.map( (todo) => {
                if (todo.id === id){
                    todo.complete = true;
                }
                return todo;
            })
        )
    }

    const handleDeleteTodo = (id) => {
        setTodoList(
            todoList.filter( (todo) => {
                if (todo.id != id){
                    return true;
                }
            })
        )
    }

    const handleAddNote = (id, text, note) => {
        // console.log('handle Add notes', id + " -" + text + "-" + note);

        setTodoList(
            todoList.map( (todo) => {
                if(todo.id === id){
                    if (todo.text !== text){
                        todo.text = text;
                    }
                    if (note !== 'undefined') {
                        todo.note = note;
                    }
                }
                return todo;
            })
        )
        alert('updated success!')
    }

    return (


    <View>
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder={'Add a task...'}
                onChangeText={setValue}
                value = {value}
            />
            <TouchableOpacity onPress={ () => handleAddTodo()}>
                <Icon name="plus-circle" size={25} color="teal" style={styles.iconPlus} />
            </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.scrollView}>
            {todoList.map(
                (todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        setComplete= { handleSetComplete}
                        deleteTodo={ handleDeleteTodo}
                        addNote = { handleAddNote}
                    />
                )
            )}

        </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#e0e0e0',
        borderBottomWidth: 1,
        padding: 10
    },
    textInput: {
        height: 20,
        flex: 1,
        marginTop: 20,
        fontSize: 25,
        fontWeight: 'bold',
        paddingLeft: 10,
        minHeight: 30
    },
    scrollView: {
        alignItems: 'stretch'
    },
    iconPlus: {
        marginTop: 20,
        fontSize: 35
    }
});
export default mainPage;
