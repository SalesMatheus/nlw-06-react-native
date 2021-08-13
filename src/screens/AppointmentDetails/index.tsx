import React from "react";
import { ImageBackground, Text, View, FlatList } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";

import BannerImg from "../../assets/banner.png"
import { Header } from "../../components/Header";
import { Member } from "../../components/Member";
import { theme } from "../../global/styles/theme";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/background";
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles"

export function AppointmentDetails(){
    const members =[
        {
            id: '1',
            username: 'Rodrigo',
            avatar_url: 'https://github.com/rodrigorgtic.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Matheus',
            avatar_url: 'https://github.com/SalesMatheus.png',
            status: 'offline'
        },
        {
            id: '3',
            username: 'Amanda',
            avatar_url: 'https://github.com/alimuraamanda.png',
            status: 'online'
        }
    ]
    return(
        <Background>
            <Header 
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto 
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />
            <ImageBackground 
                source={ BannerImg }
                style={styles.banner }
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Lendários
                    </Text>

                    <Text style={styles.subtitle}> 
                        É hoje que vamos chegar ao challenger sem perder uma partida da md10
                    </Text>
                </View>
            </ImageBackground>
            <ListHeader 
                title="Jogadores"
                subtitle="Total 3"
            />
            <FlatList 
                data={members}
                keyExtractor={ item =>item.id}
                renderItem={({ item }) => (
                    <Member data={ item } />         
                )}
                ItemSeparatorComponent={() => <ListDivider/>}
                style={ styles.members}
            />
            <View style={styles.footer}>
                <ButtonIcon title="Entrar na partida" />
            </View>
        </Background>
    );
}