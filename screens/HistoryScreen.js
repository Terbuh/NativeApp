import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { RobText } from "../styledComponents";

const HistoryScreen = ({ route }) => {
    const { historyData } = route.params || {};
    const [updatedHistoryData, setUpdatedHistoryData] = useState(historyData);
    const [monthlyIncomes, setMonthlyIncomes] = useState({});

    const formatDate = (date) => {
        const formattedDate = new Date(date);
        const day = formattedDate.getDate();
        const month = formattedDate.toLocaleString("default", { month: "long" });
        const year = formattedDate.getFullYear();
        return `${day}-${month}-${year}`;
    };

    const calculateTotalIncome = () => {
        return updatedHistoryData.reduce((total, item) => total + item.income, 0);
    };

    const updateMonthlyIncomes = () => {
        const updatedMonthlyIncomes = {};

        for (const item of updatedHistoryData) {
            const date = new Date(item.date);
            const monthYear = `${date.toLocaleString("default", { month: "long" })}-${date.getFullYear()}`;

            if (!updatedMonthlyIncomes[monthYear]) {
                updatedMonthlyIncomes[monthYear] = 0;
            }

            updatedMonthlyIncomes[monthYear] += item.income;
        }

        setMonthlyIncomes(updatedMonthlyIncomes);
    };

    useEffect(() => {
        setUpdatedHistoryData(historyData);
        updateMonthlyIncomes();
    }, [historyData]);

    return (
        <View style={styles.container}>
            {updatedHistoryData.map((item, index) => (
                <View key={index} style={styles.historyItem}>
                    <RobText>Date: {formatDate(item.date)}</RobText>
                    <RobText>Income: {item.income}</RobText>
                </View>
            ))}
            <View style={styles.totalIncomeContainer}>
                <RobText style={styles.totalIncomeText}>
                    Total Income: {calculateTotalIncome()}
                </RobText>
            </View>
            <View style={styles.monthlyIncomesContainer}>
                {Object.keys(monthlyIncomes).map((monthYear) => (
                    <View key={monthYear} style={styles.monthlyIncomeItem}>
                        <RobText>{monthYear}:</RobText>
                        <RobText>{monthlyIncomes[monthYear]}</RobText>
                    </View>
                ))}
            </View>
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
        flexDirection: "row",
        justifyContent: "space-between",
    },
    totalIncomeContainer: {
        marginTop: 20,
        alignItems: "center",
    },
    totalIncomeText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    monthlyIncomesContainer: {
        marginTop: 20,
        alignItems: "center",
    },
    monthlyIncomeItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 200,
        marginBottom: 10,
    },
});

export default HistoryScreen;
