import React from "react";
import {Button, Text, View} from "react-native";

const otherPage = ({navigation}) => {
    return (
        <View>
            <Text>other page</Text>
            <Button
                title="Go back"
                onPress={ () => {
                    navigation.goBack()
                }}/>
        </View>
    )
}

export default otherPage;
