import React, { useState, useCallback } from "react";
import { View, FlatList } from "react-native";
import { ButtonAdd } from "../../components/ButtonAdd";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { CategorySelect } from "../../components/CategorySelect";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Load } from "../../components/Load";
import { Profile } from "../../components/Profile";
import { Background } from "../../components/background";
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";
import { Appointment, AppointmentProps } from "../../components/Appointment";

import { styles } from "./styles";

export function Home(){
    const [category, setCategory ] = useState('');
    const [ loading, setLoading ] = useState(true);
    const [ appointments, setAppointments] = useState<AppointmentProps[]>([]);

    const navigation = useNavigation();


    function handlerCategorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails(guildSelected: AppointmentProps){
        navigation.navigate('AppointmentDetails', {guildSelected});
    }

    function handleAppointmentCreate(){
        navigation.navigate('AppointmentCreate');
    }

    async function loadAppointments() {
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

        if(category){
            setAppointments(storage.filter(item => item.category === category));
        }else{
            setAppointments(storage);
        }

        setLoading(false);
    }

    useFocusEffect(useCallback(() => {
        loadAppointments();
    },[category]));

    return(
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate}/>
            </View>
            <CategorySelect 
            CategorySelect={category}
            setCategory={handlerCategorySelect}
            />
            {
                loading ? <Load /> :
                <>
                    <ListHeader 
                        title="Partidas Agendadas"
                        subtitle={`Total ${appointments.length}`}
                    />
                    <FlatList 
                        data={appointments}
                        keyExtractor={item => item.id}
                        renderItem={({item}) =>(
                            <Appointment 
                                data={item} 
                                onPress={() => handleAppointmentDetails(item)}
                            />
                        )}
                        ItemSeparatorComponent={()=> <ListDivider/>}
                        contentContainerStyle={{paddingBottom: 69}}
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}
                    />
                </>
            }
        </Background>
    );
}