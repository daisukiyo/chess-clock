import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Timer = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.time}>Time: 00:00</Text>
            <Text style={styles.counter}>Count: 0</Text>
        </View>
    )
}

export default Timer

const styles = StyleSheet.create({

})

