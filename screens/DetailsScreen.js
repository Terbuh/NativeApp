import React, { useState, useEffect } from "react";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { RobText, RobTextInput } from "../styledComponents";
import Calculate from "./Calculate";
import HistoryScreen from "./HistoryScreen";
import { useNavigation } from "@react-navigation/native";
import { styles } from './styles'

const DetailsScreen = ({ route }) => {
  const { customer, onItemUpdate } = route.params || {};
  const [customerData, setCustomerData] = useState(customer);
  const navigation = useNavigation();

  const handleShowHistory = (historyData) => {
    navigation.navigate("HistoryScreen", { historyData });
  };

  const handleScreenTouch = () => {
    Keyboard.dismiss();
  };

  if (!customer) {
    return null;
  }

  return (
    <LinearGradient
      colors={["#F5E4D7", "#839788", "#BDBBB6"]}
      style={styles.buttonContainer}
    >
      <TouchableWithoutFeedback onPress={handleScreenTouch}>
        <View style={styles.detailsContainer}>
          <View style={styles.wrapper_single}>
            <RobText style={styles.detailsTitle}>Name:</RobText>
            <RobTextInput
              style={styles.detailsInput}
              value={customerData.name}
              onChangeText={(text) =>
                setCustomerData((prevData) => ({ ...prevData, name: text }))
              }
            />
          </View>
          <View style={styles.wrapper_single}>
            <RobText style={styles.detailsTitle}>Surname:</RobText>
            <RobTextInput
              style={styles.detailsInput}
              value={customerData.surname}
              onChangeText={(text) =>
                setCustomerData((prevData) => ({ ...prevData, surname: text }))
              }
            />
          </View>
          <View style={styles.wrapper_single}>
            <RobText style={styles.detailsTitle}>VIN:</RobText>
            <RobTextInput
              style={styles.detailsInput}
              value={customerData.vin}
              onChangeText={(text) =>
                setCustomerData((prevData) => ({ ...prevData, vin: text }))
              }
            />
          </View>
          <View style={styles.wrapper_single}>
            <RobText style={styles.detailsTitle}>Phone:</RobText>
            <RobTextInput
              style={styles.detailsInput}
              value={customerData.phone}
              onChangeText={(text) =>
                setCustomerData((prevData) => ({ ...prevData, phone: text }))
              }
              keyboardType="numeric"
            />
          </View>
          <View style={styles.wrapper_single}>
            <RobText style={styles.detailsTitle}>Car:</RobText>
            <RobTextInput
              style={styles.detailsInput}
              value={customerData.car}
              onChangeText={(text) =>
                setCustomerData((prevData) => ({ ...prevData, car: text }))
              }
            />
          </View>
          <View style={styles.wrapper_single}>
            <RobText style={styles.detailsTitle}>Engine:</RobText>
            <RobTextInput
              style={styles.detailsInput}
              value={customerData.engine}
              onChangeText={(text) =>
                setCustomerData((prevData) => ({ ...prevData, engine: text }))
              }
            />
          </View>
          <View style={styles.wrapper_single}>
            <RobText style={styles.detailsTitle}>KW:</RobText>
            <RobTextInput
              style={styles.detailsInput}
              value={customerData.kw}
              onChangeText={(text) =>
                setCustomerData((prevData) => ({ ...prevData, kw: text }))
              }
              keyboardType="numeric"
            />
          </View>
          <Calculate

            route={route}
            initialCustomer={customerData} // Zmienione customer na initialCustomer
            onItemUpdate={onItemUpdate}
            setCustomerData={setCustomerData}
            onShowHistory={handleShowHistory} // Przekazanie funkcji onShowHistory jako prop
          />

        </View>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
};

export default DetailsScreen;
