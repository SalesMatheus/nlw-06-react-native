import React from "react";
import { View, Text, Alert } from "react-native";
import { useAuth } from "../../hooks/auth";
import { RectButton } from "react-native-gesture-handler";

import { Avatar } from '../Avatar'

import { styles } from "./styles";

export function Profile(){
    const { user, signOut } = useAuth();

    function handlerSignOut() {
        Alert.alert('Logout', 'Deseja mesmo sair?',
        [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => signOut()
            }
        ])
    }
    
    return(
        <View style={styles.container}>

            <RectButton onPress={handlerSignOut}>
                <Avatar urlImage={user.avatar}/>
            </RectButton>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        {user.firstName}
                    </Text> 
                </View>
                <Text style={styles.message}>
                    Hoje é dia de vitória.
                </Text>
            </View>
        </View>
    );
}