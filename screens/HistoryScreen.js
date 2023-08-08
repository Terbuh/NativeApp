import React from "react";
import { View, StyleSheet } from "react-native";
import { RobText } from "../styledComponents";

const HistoryScreen = ({ route }) => {
    const { historyData } = route.params || {};
    console.log(historyData)

    return (
        <View style={styles.container}>
            {historyData.map((item, index) => (
                <View key={index} style={styles.historyItem}>
                    <RobText>Date: {item.date}</RobText>
                    <RobText>Income: {item.income}</RobText>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    historyItem: {
        backgroundColor: "#ecf0f1",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
});

export default HistoryScreen;
