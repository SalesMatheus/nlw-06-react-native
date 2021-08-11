import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";


export function GuildIcon(){
    const uri = 'https://s2.glbimg.com/gNx3bSr2tVULc3kK9mqggKyKJOg=/696x390/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/h/w/Abq4oBSySsO0xmGnkDlg/discord.jpg';

    return(
        <Image 
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />
    );
}