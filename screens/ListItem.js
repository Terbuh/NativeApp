import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

const ListItem = ({ item, onPressDetails, onItemDelete }) => {
  const handleDeleteClick = () => {
    Alert.alert(
      "Confirmation",
      "Are you sure you want to delete this item?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => onItemDelete(item.id),
        },
      ],
      {
        cancelable: true,
        overlayStyle: styles.alertOverlay, // Dodaj nowy styl do zmiany tła potwierdzenia usuwania
      }
    );
  };

  const renderContent = () => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Name: {item.name}</Text>
        <TouchableOpacity style={styles.detailsButton} onPress={onPressDetails}>
          <Text style={styles.detailsButtonText}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleDeleteClick}
        >
          <Text style={styles.detailsButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return renderContent();
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemText: {
    fontSize: 16,
  },
  editModeContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  detailsButton: {
    backgroundColor: "#331984",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  deleteButton: {
    backgroundColor: "#BD97D7",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  detailsButtonText: {
    color: "white",
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: "column",
  },
});

export default ListItem;
