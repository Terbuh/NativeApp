import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { styles } from "./listItemStyles";
import { RobText } from "../styledComponents";

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
          <RobText style={styles.itemText}>Name: {item.name}</RobText>
          <TouchableOpacity
            style={styles.detailsButton}
            onPress={onPressDetails}
          >
            <RobText style={styles.detailsButtonText}>Details</RobText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={handleDeleteClick}
          >
            <RobText style={styles.deleteButtonText}>Delete</RobText>
          </TouchableOpacity>
        </View>

        <Modal isVisible={isModalVisible}>
          <View style={styles.modalContainer}>
            <RobText style={styles.modalText}>
              Are you sure you want to delete this item?
            </RobText>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleDeleteConfirmed}
            >
              <RobText style={styles.popUpDelete}>Delete</RobText>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteModalButton}
              onPress={handleCancel}
            >
              <RobText style={styles.popUpCancel}>Cancel</RobText>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  };
  return renderContent();
};

export default ListItem;
