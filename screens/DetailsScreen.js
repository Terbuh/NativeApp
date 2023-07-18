import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
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

    if (!customer) {
        return null;
    }
    return (
        <View style={styles.detailsContainer}>
            <View style={styles.wrapper_single}>
                <Text style={styles.detailsTitle}>Nazwa klienta:</Text>
                <TextInput
                    style={styles.detailsInput}
                    value={customerData.name}
                    onChangeText={(text) =>
                        setCustomerData((prevData) => ({ ...prevData, name: text }))
                    }
                />
            </View>
            <View style={styles.wrapper_single}>
                <Text style={styles.detailsTitle}>Nazwisko:</Text>
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
                <Text style={styles.detailsTitle}>Telefon:</Text>
                <TextInput
                    style={styles.detailsInput}
                    value={customerData.phone}
                    onChangeText={(text) =>
                        setCustomerData((prevData) => ({ ...prevData, phone: text }))
                    }
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
                <Text style={styles.detailsTitle}>kw:</Text>
                <TextInput
                    style={styles.detailsInput}
                    value={customerData.kw}
                    onChangeText={(text) =>
                        setCustomerData((prevData) => ({ ...prevData, kw: text }))
                    }
                />
            </View>
            <View style={styles.wrapper_single}>
                <Text style={styles.detailsTitle}>Części:</Text>
                <TextInput
                    style={styles.detailsInput}
                    value={customerData.czesci}
                    onChangeText={(text) =>
                        setCustomerData((prevData) => ({ ...prevData, czesci: text }))
                    }
                />
            </View>
            <View style={styles.wrapper_single}>
                <Text style={styles.detailsTitle}>Części/Klient:</Text>
                <TextInput
                    style={styles.detailsInput}
                    value={customerData.czesciKlient}
                    onChangeText={(text) =>
                        setCustomerData((prevData) => ({ ...prevData, czesciKlient: text }))
                    }
                />
            </View>
            <View style={styles.wrapper_single}>
                <Text style={styles.detailsTitle}>Robocizna:</Text>
                <TextInput
                    style={styles.detailsInput}
                    value={customerData.robocizna}
                    onChangeText={(text) =>
                        setCustomerData((prevData) => ({ ...prevData, robocizna: text }))
                    }
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
                <Text style={styles.detailsTitle}>Suma:</Text>
                <TextInput
                    style={styles.detailsInput}
                    value={customerData.suma}
                    onChangeText={(text) =>
                        setCustomerData((prevData) => ({ ...prevData, suma: text }))
                    }
                />
            </View>
            <Button title="Zapisz" onPress={handleSave} color={'#d5bdaf'} />
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </View>
    );
};

export default DetailsScreen;
