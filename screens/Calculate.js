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

const Calculate = ({ route, onSaveData }) => {
  const { customer, onItemUpdate } = route.params || {};
  const [customerData, setCustomerData] = useState(customer);
  const [czesciKlient, setCzesciKlient] = useState(customer.czesciKlient || "");
  const [robocizna, setRobocizna] = useState(customer.robocizna || "");
  const [czesci, setCzesci] = useState(customer.czesci || "");
  const [czynnosci, setCzynnosci] = useState([]); // Tablica przechowująca listę czynności
  const [newCzynnosc, setNewCzynnosc] = useState(""); // Nowa czynność wprowadzona przez użytkownika
  const clickCountRef = useRef({});

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
  const handleAddCzynnosc = () => {
    if (newCzynnosc.trim() === "") {
      return;
    }
    setCzynnosci((prevCzynnosci) => [...prevCzynnosci, newCzynnosc]);
    setNewCzynnosc("");
  };
  const handleCzynnoscPress = (czynnosc) => {
    if (!clickCountRef.current[czynnosc]) {
      clickCountRef.current[czynnosc] = { count: 1, timeout: null };
    } else {
      clickCountRef.current[czynnosc].count += 1;
    }

    if (clickCountRef.current[czynnosc].count === 1) {
      if (clickCountRef.current[czynnosc].timeout) {
        clearTimeout(clickCountRef.current[czynnosc].timeout);
      }

      clickCountRef.current[czynnosc].timeout = setTimeout(() => {
        clickCountRef.current[czynnosc].count = 0;
      }, 5000); // 5000 ms = 5 sekund
    }

    if (clickCountRef.current[czynnosc].count === 3) {
      clearTimeout(clickCountRef.current[czynnosc].timeout);

      setCzynnosci((prevCzynnosci) =>
        prevCzynnosci.filter((item) => item !== czynnosc)
      );

      delete clickCountRef.current[czynnosc];
    }
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
        <View style={styles.wrapper_czynnosci}>
          <RobText style={styles.detailsTitle}>Czynności:</RobText>
          <View style={styles.czynnosciContainer}>
            {czynnosci.map((czynnosc, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleCzynnoscPress(czynnosc)}
              >
                <RobText style={styles.czynnoscItem}>{czynnosc}</RobText>
              </TouchableOpacity>
            ))}
          </View>
          <RobTextInput
            style={styles.czynnosciAdd}
            value={newCzynnosc}
            onChangeText={setNewCzynnosc}
            placeholder="Add to do..."
            onSubmitEditing={handleAddCzynnosc}
          />
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
          </View>
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Calculate;
