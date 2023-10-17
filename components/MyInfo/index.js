import React from "react";
import { Text, View } from 'react-native';

const MyInfo = props => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Text>Hello, {props.infoText}</Text>
        </View>
    );
};

export default MyInfo;