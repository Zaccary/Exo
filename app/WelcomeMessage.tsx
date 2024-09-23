import React from 'react';
import { Text, View } from 'react-native';

// Définition des props avec TypeScript
interface WelcomeMessageProps {
    name: string;
}

const WelcomeMessage = ({ name }: WelcomeMessageProps) => {
    return (
        <View>
            <Text>Hello, {name}!</Text>
        </View>
    );
};

export default WelcomeMessage;