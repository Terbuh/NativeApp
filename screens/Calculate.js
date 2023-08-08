import React, { useState, useEffect, useRef } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import Toast from "react-native-toast-message";
import { RobText, RobTextInput } from "../styledComponents";

const Calculate = ({ route, onSaveData, onShowHistory }) => {
  const { customer, onItemUpdate } = route.params || {};
  const [customerData, setCustomerData] = useState(customer);
  const [czesciKlient, setCzesciKlient] = useState(customer.czesciKlient || "");
  const [robocizna, setRobocizna] = useState(customer.robocizna || "");
  const [czesci, setCzesci] = useState(customer.czesci || "");

  useEffect(() => {
    setCustomerData(customer);
    setCzesciKlient(customer.czesciKlient || "");
    setRobocizna(customer.robocizna || "");
    setCzesci(customer.czesci || "");
  }, [customer]);

  const calculateSum = () => {
    const parts = parseFloat(czesciKlient) || 0;
    const labor = parseFloat(robocizna) || 0;

    const sum = parts + labor;
    return sum;
  };

  const calculateIncome = () => {
    const labor = parseFloat(robocizna) || 0;
    const myParts = parseFloat(czesci) || 0;
    const partsClient = parseFloat(czesciKlient) || 0;

    const sumIncome = labor + (partsClient - myParts);
    return sumIncome;
  };

  const handleSave = () => {
    const sum = calculateSum().toString();
    const sumIncome = calculateIncome().toString();
    onSaveData(czesciKlient, robocizna, sum, czesci, sumIncome);
    showSuccessMessage("Saved correctly");
  };


  const showSuccessMessage = (message) => {
    Toast.show({
      text1: message,
      type: "success",
      position: "bottom",
      visibilityTime: 2000,
    });
  };
  const handleScreenTouch = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleScreenTouch}>
      <View>

        <View style={styles.wrapper_single}>
          <RobText style={styles.detailsTitle}>Parts:</RobText>
          <RobTextInput
            style={styles.detailsInput}
            value={czesci.toString()}
            onChangeText={(text) => setCzesci(text)}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.wrapper_single}>
          <RobText style={styles.detailsTitle}>Parts/Client:</RobText>
          <RobTextInput
            style={styles.detailsInput}
            value={czesciKlient.toString()}
            onChangeText={(text) => setCzesciKlient(text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.wrapper_single}>
          <RobText style={styles.detailsTitle}>Labor:</RobText>
          <RobTextInput
            style={styles.detailsInput}
            value={robocizna.toString()}
            onChangeText={(text) => setRobocizna(text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.wrapper_single}>
          <RobText style={styles.detailsTitle}>Sum:</RobText>
          <RobTextInput
            style={styles.detailsInput}
            value={calculateSum().toString()}
            editable={false}
          />
        </View>
        <View style={styles.wrapper_single}>
          <RobText style={styles.detailsTitle}>Income:</RobText>
          <RobTextInput
            style={styles.detailsInput}
            value={calculateIncome().toString()}
            keyboardType="numeric"
            editable={false}
          />
        </View>
        <View style={styles.addClientButton}>
          <TouchableOpacity style={styles.detailsButton} onPress={handleSave}>
            <RobText style={styles.detailsButtonText}>Save</RobText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.detailsButton}
            onPress={onShowHistory}
          >
            <RobText style={styles.detailsButtonText}>History</RobText>
          </TouchableOpacity>
        </View>
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </View>
    </TouchableWithoutFeedback >
  );
};

export default Calculate;
