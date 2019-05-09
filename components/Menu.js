import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Menu = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.time}>Reset</Text>
            {/* only display pause when timers are active */}
            <Text style={styles.counter}>Pause</Text>
            {/* Settings: Optional (Stretch Goal) */}
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({

})

