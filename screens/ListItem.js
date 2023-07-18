import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, Alert } from 'react-native';

const ListItem = ({ item, onItemUpdate, onPressDetails, onItemDelete }) => {
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState(item.name);

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = () => {
        const updatedItem = { ...item, name: name };
        onItemUpdate(updatedItem);
        setEditMode(false);
    };

    const handleCancelClick = () => {
        setName(item.name);
        setEditMode(false);
    };

    const handleDeleteClick = () => {
        Alert.alert(
            'Potwierdzenie',
            'Czy na pewno chcesz usunąć ten element?',
            [
                {
                    text: 'Anuluj',
                    style: 'cancel',
                },
                {
                    text: 'Usuń',
                    style: 'destructive',
                    onPress: () => onItemDelete(item.id),
                },
            ],
            { cancelable: true }
        );
    };

    const renderContent = () => {
        if (editMode) {
            return (
                <View style={styles.editModeContainer}>
                    <TextInput style={styles.input} value={name} onChangeText={setName} />
                    <TouchableOpacity style={styles.button} onPress={handleSaveClick}>
                        <Text style={styles.buttonText}>Zapisz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleCancelClick}>
                        <Text style={styles.buttonText}>Anuluj</Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <View style={styles.itemContainer}>
                    <Text style={styles.itemText}>Nazwa: {item.name}</Text>
                    <TouchableOpacity style={styles.detailsButton} onPress={onPressDetails}>
                        <Text style={styles.detailsButtonText}>Szczegóły</Text>
                    </TouchableOpacity>
                    <Button title="Usuń" onPress={handleDeleteClick} color="red" />
                </View>
            );
        }
    };

    return renderContent();
};

const styles = StyleSheet.create({
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemText: {
        fontSize: 16,
    },
    editModeContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    detailsButton: {
        backgroundColor: '#d5bdaf',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
    },
    detailsButtonText: {
        color: 'white',
        fontSize: 16,
    },
    buttonsContainer: {
        flexDirection: 'column',
    },
});

export default ListItem;
