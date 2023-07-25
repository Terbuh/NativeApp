import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "./styles";
import Calculate from "./Calculate";

const DetailsScreen = ({ route }) => {
  const { customer, onItemUpdate } = route.params || {};
  const [customerData, setCustomerData] = useState(customer);

  const handleSaveData = (czesciKlient, robocizna, sum) => {
    const updatedCustomer = {
      ...customerData,
      czesciKlient: parseFloat(czesciKlient),
      robocizna: parseFloat(robocizna),
      suma: parseFloat(sum),
    };

    setCustomerData(updatedCustomer);
    onItemUpdate(updatedCustomer);
  };

  const handleScreenTouch = () => {
    Keyboard.dismiss();
  };

  if (!customer) {
    return null;
  }
  return (
    <TouchableWithoutFeedback onPress={handleScreenTouch}>
      <View style={styles.detailsContainer}>
        <View style={styles.wrapper_single}>
          <Text style={styles.detailsTitle}>Name:</Text>
          <TextInput
            style={styles.detailsInput}
            value={customerData.name}
            onChangeText={(text) =>
              setCustomerData((prevData) => ({ ...prevData, name: text }))
            }
          />
        </View>
        <View style={styles.wrapper_single}>
          <Text style={styles.detailsTitle}>Surname:</Text>
          <TextInput
            style={styles.detailsInput}
            value={customerData.surname}
            onChangeText={(text) =>
              setCustomerData((prevData) => ({ ...prevData, surname: text }))
            }
          />
        </View>
        <View style={styles.wrapper_single}>
          <Text style={styles.detailsTitle}>VIN:</Text>
          <TextInput
            style={styles.detailsInput}
            value={customerData.vin}
            onChangeText={(text) =>
              setCustomerData((prevData) => ({ ...prevData, vin: text }))
            }
          />
        </View>
        <View style={styles.wrapper_single}>
          <Text style={styles.detailsTitle}>Phone:</Text>
          <TextInput
            style={styles.detailsInput}
            value={customerData.phone}
            onChangeText={(text) =>
              setCustomerData((prevData) => ({ ...prevData, phone: text }))
            }
            keyboardType="numeric"
          />
        </View>
        <View style={styles.wrapper_single}>
          <Text style={styles.detailsTitle}>Car:</Text>
          <TextInput
            style={styles.detailsInput}
            value={customerData.car}
            onChangeText={(text) =>
              setCustomerData((prevData) => ({ ...prevData, car: text }))
            }
          />
        </View>
        <View style={styles.wrapper_single}>
          <Text style={styles.detailsTitle}>Engine:</Text>
          <TextInput
            style={styles.detailsInput}
            value={customerData.engine}
            onChangeText={(text) =>
              setCustomerData((prevData) => ({ ...prevData, engine: text }))
            }
          />
        </View>
        <View style={styles.wrapper_single}>
          <Text style={styles.detailsTitle}>KW:</Text>
          <TextInput
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
          customer={customer}
          onItemUpdate={onItemUpdate}
          onSaveData={handleSaveData}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DetailsScreen;
