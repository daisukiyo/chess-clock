import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// Import Icons
import { Entypo } from 'react-native-vector-icons'

const Menu = (props) => {
    return (
        <View style={{...styles.container, ...props.styling}}>

            {/* Reset Icon */}
            <Entypo
            name="cw"
            size={36}
            color="#c8d6e5"
            onPress={() => console.log('Reset')}
            />

            {/* Pause Icon */}
            <Entypo
            name="controller-paus"
            size={36}
            color="#c8d6e5"
            onPress={() => console.log('Pause')}
            />

            {/* Settings Icon */}
            <Entypo
            name="cog"
            size={36}
            color="#c8d6e5"
            onPress={() => console.log('Settings')}
            />
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: "#576574",
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: "100%",
    }
})

