import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "./styles";
import Toast from "react-native-toast-message";

const Calculate = ({ route, onSaveData }) => {
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
          <Text style={styles.detailsTitle}>Parts:</Text>
          <TextInput
            style={styles.detailsInput}
            value={czesci.toString()}
            onChangeText={(text) => setCzesci(text)}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.wrapper_single}>
          <Text style={styles.detailsTitle}>Parts/Client:</Text>
          <TextInput
            style={styles.detailsInput}
            value={czesciKlient.toString()}
            onChangeText={(text) => setCzesciKlient(text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.wrapper_single}>
          <Text style={styles.detailsTitle}>Labor:</Text>
          <TextInput
            style={styles.detailsInput}
            value={robocizna.toString()}
            onChangeText={(text) => setRobocizna(text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.wrapper_single}>
          <Text style={styles.detailsTitle}>Sum:</Text>
          <TextInput
            style={styles.detailsInput}
            value={calculateSum().toString()}
            editable={false}
          />
        </View>
        <View style={styles.wrapper_single}>
          <Text style={styles.detailsTitle}>Income:</Text>
          <TextInput
            style={styles.detailsInput}
            value={calculateIncome().toString()}
            keyboardType="numeric"
            editable={false}
          />
        </View>
        <Button title="Save" onPress={handleSave} color={"#331984"} />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Calculate;
