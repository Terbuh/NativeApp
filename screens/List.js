import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
  Keyboard,
} from "react-native";
import { styles } from "./listStyles";
import ListItem from "./ListItem";
import { useNavigation } from "@react-navigation/native";
import Data from "./data.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import { LinearGradient } from "expo-linear-gradient";

const List = () => {
  const [name, setName] = useState("");
  const [items, setItems] = useState(Data.customers);
  const [filteredItems, setFilteredItems] = useState(Data.customers);
  const navigation = useNavigation();
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const storedItems = await AsyncStorage.getItem("items");
      if (storedItems) {
        setItems(JSON.parse(storedItems));
        setFilteredItems(JSON.parse(storedItems));
      } else {
        setItems(Data.customers);
        setFilteredItems(Data.customers);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAddItem = async () => {
    const existingItem = items.find((item) => item.name === name);

    if (existingItem) {
      Toast.show({
        type: "error",
        text1: "Element o takiej nazwie już istnieje",
        visibilityTime: 3000,
      });
    } else {
      const newItem = {
        id: String(items.length + 1),
        name: name,
      };
      const updatedItems = [...items, newItem];
      setItems(updatedItems);
      setFilteredItems(updatedItems);
      setName("");

      try {
        await AsyncStorage.setItem("items", JSON.stringify(updatedItems));
      } catch (error) {
        console.error("Error storing data:", error);
      }
    }
  };

  const handleUpdateItem = async (updatedItem) => {
    const updatedItems = items.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      } else {
        return item;
      }
    });

    setItems(updatedItems);
    setFilteredItems(updatedItems);

    try {
      await AsyncStorage.setItem("items", JSON.stringify(updatedItems));
    } catch (error) {
      console.error("Error storing data:", error);
    }
  };

  const handleDeleteItem = async (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);

    setItems(updatedItems);
    setFilteredItems(updatedItems);

    try {
      await AsyncStorage.setItem("items", JSON.stringify(updatedItems));
    } catch (error) {
      console.error("Error storing data:", error);
    }
  };

  const handleFilterItems = (filter) => {
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredItems(filtered.length > 0 ? filtered : items);
    if (filtered.length > 0) {
      setFilterValue(filter);
    }
  };

  const handleScreenTouch = () => {
    Keyboard.dismiss();
  };

  const COLUMN_COUNT = 2;

  const renderItem = ({ item }) => {
    return (
      <ListItem
        item={item}
        onItemUpdate={handleUpdateItem}
        onItemDelete={handleDeleteItem}
        onPressDetails={() => {
          navigation.navigate("Details", {
            customer: item,
            onItemUpdate: handleUpdateItem,
          });
        }}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#F5E4D7", "#839788", "#BDBBB6"]}
        style={styles.buttonContainer}
      >
       
          <View style={styles.container}>
            <View style={styles.addClient}>
              <TextInput
                placeholder="Enter Client name"
                value={name}
                onChangeText={(text) => setName(text)}
                style={styles.orderName}
                placeholderTextColor="black"
              />
              <View style={styles.addClientButton}>
                <TouchableOpacity
                  style={styles.detailsButton}
                  onPress={handleAddItem}
                >
                  <Text style={styles.detailsButtonText}>Add to list</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.searchClient}>
              <TextInput
                placeholder="Search a client in the list"
                value={filterValue}
                onChangeText={handleFilterItems}
                style={styles.filterInput}
                placeholderTextColor="#30302f"
              />
            </View>

            <FlatList
              renderItem={renderItem}
              data={filteredItems}
              keyExtractor={(item) => item.id}
              style={styles.listWrapper}
              numColumns={2}
              
            />
          </View>
      
      </LinearGradient>
    </View>
  );
};

export default List;
