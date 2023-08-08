import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { RobText } from "../styledComponents";
import { LinearGradient } from "expo-linear-gradient";

const HistoryScreen = ({ route }) => {
    const { historyData } = route.params || {};
    const [updatedHistoryData, setUpdatedHistoryData] = useState(historyData);

    const handleDeleteItem = (index) => {
        const newHistoryData = [...updatedHistoryData];
        newHistoryData.splice(index, 1);
        setUpdatedHistoryData(newHistoryData);
    };

    const formatDate = (date) => {
        const formattedDate = new Date(date);
        const day = formattedDate.getDate();
        const month = formattedDate.getMonth() + 1; // Uwaga: Miesiące są indeksowane od 0
        const year = formattedDate.getFullYear();
        return `${day}-${month}-${year}`;
    };

    return (

        <View style={styles.container}>
            {updatedHistoryData.map((item, index) => (
                <View key={index} style={styles.historyItem}>
                    <RobText>Date: {formatDate(item.date)}</RobText>
                    <RobText>Income: {item.income}</RobText>
                    <TouchableOpacity onPress={() => handleDeleteItem(index)}>
                        <RobText style={styles.deleteButton}>Usuń</RobText>
                    </TouchableOpacity>
                </View>
            ))}
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        height: '100%'
    },
    historyItem: {
        backgroundColor: "#ecf0f1",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    deleteButton: {
        color: "red",
        fontWeight: "bold",
    },
});

export default HistoryScreen;
