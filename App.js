import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import mainPage from "./mainPage";
import otherPage from "./otherPage";
import TodoItemNotes from "./TodoItemNotes";


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>hello world!</Text>
//       <Button style={styles} onPress={ () => alert('it\'s work!')} title="Click me " />
//       <StatusBar style="auto" />
//     </View>
//   );
// }
const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="mainPage"
                    component={mainPage}
                    options={{ title: 'Tasks Lists' }} />

                <Stack.Screen name="TodoItemNotes" component={TodoItemNotes} options={{title: 'Todo Notes'}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
