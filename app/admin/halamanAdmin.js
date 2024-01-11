import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { addData } from '../../actions/AuthAction';
import { Header } from "../../components";

const AdminScreen = () => {
  const [newData, setNewData] = useState('');

  const handleAddData = async () => {
    if (newData.trim() === '') {
      return;
    }

    try {
      // Tambahkan data baru menggunakan fungsi addData
      await addData({ data: newData });
      setNewData('');
      console.log('Data added successfully');
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    
    <View>
      <Header title={"Kepanitiaan"} withBack/>
        <Text>hai</Text>
      <Text>Admin Page</Text>
      <TextInput
        placeholder="Enter data"
        value={newData}
        onChangeText={(text) => setNewData(text)}
      />
      <Button title="Add Data" onPress={handleAddData} />
    </View>
  );
};

export default AdminScreen;