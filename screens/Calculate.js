import React, { useState, useEffect } from "react";
import { View, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message";
import { RobText, RobTextInput } from "../styledComponents";
import { styles } from './styles'

const Calculate = ({ route, onItemUpdate, initialCustomer, setCustomerData, onShowHistory }) => {
  const [czesciKlient, setCzesciKlient] = useState(initialCustomer.czesciKlient || "");
  const [robocizna, setRobocizna] = useState(initialCustomer.robocizna || "");
  const [czesci, setCzesci] = useState(initialCustomer.czesci || "");

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
    const sum = calculateSum();
    const sumIncome = calculateIncome();

    const newHistoryItem = {
      date: new Date().toISOString(),
      income: sumIncome,
    };

    const updatedCustomer = {
      ...initialCustomer,
      czesciKlient: parseFloat(czesciKlient),
      robocizna: parseFloat(robocizna),
      suma: parseFloat(sum),
      czesci: parseFloat(czesci),
      sumIncome: parseFloat(sumIncome),
      historyData: [...initialCustomer.historyData, newHistoryItem],
    };

    setCustomerData(updatedCustomer);
    onItemUpdate(updatedCustomer);
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
            onPress={() => onShowHistory([...initialCustomer.historyData])}
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
