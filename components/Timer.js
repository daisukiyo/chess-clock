import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Timer = (props) => {
    return (
        // Component styles applied from the component itself
        // Unique styles are passed through App.js via props
        <View style={{...styles.container, ...props.styling}}>
            {/* Hardcoded Time Values */}
            <Text style={styles.time}>5:00</Text>
            {/* Hardcoded Move Counter */}
            <Text style={styles.counter}>0</Text>
        </View>
    )
}

export default Timer

const styles = StyleSheet.create({
    container: {
        backgroundColor:  '#ff6b6b',
    },
    time: {
        // text styling
        color: 'rgb(255, 255, 255)',
        fontFamily: 'System',
        fontSize: 144,
    },
    counter: {
        // text styling
        color: 'rgba(255, 255, 255, 0.5)', 
        fontFamily: 'System',
        fontSize: 32,

        // absolute positioning for bottom right hand corner
        position: 'absolute',
        bottom: 4,
        right: 6,
    }
})

