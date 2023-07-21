import React, { useState } from 'react';
import { View, Text, TextInput, Button,TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from './styles';
import Toast from 'react-native-toast-message';


const DetailsScreen = ({ route }) => {
    const { customer, onItemUpdate } = route.params || {};
    const [customerData, setCustomerData] = useState(customer);

    const handleSave = () => {
        const updatedCustomer = {
            ...customerData,
            name: customerData.name.trim(),
        };

        setCustomerData(updatedCustomer);
        onItemUpdate(updatedCustomer);
        showSuccessMessage('Saved correctly');
    };

    const showSuccessMessage = (message) => {
        Toast.show({
            text1: message,
            type: 'success',
            position: 'center',
            visibilityTime: 2000,
        });
    };
    const handleScreenTouch = () => {
        Keyboard.dismiss();
    }
    

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
            <View style={styles.wrapper_single}>
                <Text style={styles.detailsTitle}>Parts:</Text>
                <TextInput
                    style={styles.detailsInput}
                    value={customerData.czesci}
                    onChangeText={(text) =>
                        setCustomerData((prevData) => ({ ...prevData, czesci: text }))
                    }
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.wrapper_single}>
                <Text style={styles.detailsTitle}>Parts/Client:</Text>
                <TextInput
                    style={styles.detailsInput}
                    value={customerData.czesciKlient}
                    onChangeText={(text) =>
                        setCustomerData((prevData) => ({ ...prevData, czesciKlient: text }))
                    }
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.wrapper_single}>
                <Text style={styles.detailsTitle}>Labor:</Text>
                <TextInput
                    style={styles.detailsInput}
                    value={customerData.robocizna}
                    onChangeText={(text) =>
                        setCustomerData((prevData) => ({ ...prevData, robocizna: text }))
                    }
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.wrapper_single}>
                <Text style={styles.detailsTitle}>Select:</Text>
                <TextInput
                    style={styles.detailsInput}
                    value={customerData.select}
                    onChangeText={(text) =>
                        setCustomerData((prevData) => ({ ...prevData, select: text }))
                    }
                />
            </View>
            <View style={styles.wrapper_single}>
                <Text style={styles.detailsTitle}>Sum:</Text>
                <TextInput
                    style={styles.detailsInput}
                    value={customerData.suma}
                    onChangeText={(text) =>
                        setCustomerData((prevData) => ({ ...prevData, suma: text }))
                    }
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.wrapper_single}>
                <Text style={styles.detailsTitle}>Income:</Text>
                <TextInput
                    style={styles.detailsInput}
                    value={customerData.Income}
                    onChangeText={(text) =>
                        setCustomerData((prevData) => ({ ...prevData, Income: text }))
                    }
                    keyboardType="numeric"
                />
            </View>
            <Button title="Save" onPress={handleSave} color={'#d5bdaf'} />
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </View>
        </TouchableWithoutFeedback>
    );
};

export default DetailsScreen;