import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList } from 'react-native';
import { styles } from './styles';
import ListItem from './ListItem';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import DetailsScreen from './DetailsScreen';
import Data from './data.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

const Stack = createStackNavigator();

const List = () => {
    const [name, setName] = useState('');
    const [items, setItems] = useState(Data.customers);
    const [filteredItems, setFilteredItems] = useState(Data.customers);
    const navigation = useNavigation();
    const [filterValue, setFilterValue] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const storedItems = await AsyncStorage.getItem('items');
            if (storedItems) {
                setItems(JSON.parse(storedItems));
                setFilteredItems(JSON.parse(storedItems));
            } else {
                setItems(Data.customers);
                setFilteredItems(Data.customers);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleAddItem = async () => {
        const existingItem = items.find((item) => item.name === name);

        if (existingItem) {
            Toast.show({
                type: 'error',
                text1: 'Element o takiej nazwie już istnieje',
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
            setName('');

            try {
                await AsyncStorage.setItem('items', JSON.stringify(updatedItems));
            } catch (error) {
                console.error('Error storing data:', error);
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
            await AsyncStorage.setItem('items', JSON.stringify(updatedItems));
        } catch (error) {
            console.error('Error storing data:', error);
        }
    };

    const handleDeleteItem = async (itemId) => {
        const updatedItems = items.filter((item) => item.id !== itemId);

        setItems(updatedItems);
        setFilteredItems(updatedItems);

        try {
            await AsyncStorage.setItem('items', JSON.stringify(updatedItems));
        } catch (error) {
            console.error('Error storing data:', error);
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

    const renderItem = ({ item }) => {
        return (
            <ListItem

                item={item}
                onItemUpdate={handleUpdateItem}
                onItemDelete={handleDeleteItem}
                onPressDetails={() => {
                    navigation.navigate('Details', {
                        customer: item,
                        onItemUpdate: handleUpdateItem,
                    });
                }}
            />
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <TextInput
                    placeholder="Client name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    style={styles.orderName}
                />
                <View style={styles.wrappper}>
                    <Button
                        title="Add to list"
                        onPress={handleAddItem}
                        color={'#d5bdaf'}
                    />
                </View>
            </View>
            <TextInput
                placeholder="Search a client in the list"
                value={filterValue}
                onChangeText={handleFilterItems}
                style={styles.filterInput}
            />
            <FlatList
                renderItem={renderItem}
                data={filteredItems}
                keyExtractor={(item) => item.id}

            />

            <Stack.Navigator>
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={{ title: 'Details' }}
                />
            </Stack.Navigator>

            {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
        </View>
    );
};

export default List;
