
import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { TransactionsContext } from './CustomProvider'; 

const CustomListScreen = ({ navigation }) => {
  const { transactionsData } = useContext(TransactionsContext); 

  return (
    <View>
      <FlatList
        data={transactionsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}>
            <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc', backgroundColor: '#f0f8ff' }}>
              <Text style={{ fontSize: 16, marginBottom: 5 }}>{item.name}</Text>
              <Text style={{ fontSize: 14, color: '#666' }}>{item.amount}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CustomListScreen;
