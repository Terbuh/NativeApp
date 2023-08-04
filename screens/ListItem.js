import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { styles } from "./listItemStyles";

const ListItem = ({ item, onPressDetails, onItemDelete }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleDeleteClick = () => {
    setModalVisible(true);
  };

  const handleDeleteConfirmed = () => {
    setModalVisible(false);
    onItemDelete(item.id);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const renderContent = () => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.test}>
          <Text style={styles.itemText}>Name: {item.name}</Text>
          <TouchableOpacity
            style={styles.detailsButton}
            onPress={onPressDetails}
          >
            <Text style={styles.detailsButtonText}>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={handleDeleteClick}
          >
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>

        <Modal isVisible={isModalVisible}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>
              Are you sure you want to delete this item?
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleDeleteConfirmed}
            >
              <Text style={styles.popUpDelete}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteModalButton}
              onPress={handleCancel}
            >
              <Text style={styles.popUpCancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  };
  return renderContent();
};

export default ListItem;
