import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';
import { useEmployeeCancelLeavesMutation } from '../services/appLevel';


const CancelLeaveRequest = () => {
  const [leaveId, setLeaveId] = useState('');


  const [cancelLeaveRequest, { isLoading, error }] = useEmployeeCancelLeavesMutation(undefined);

 
 
  const handleCancelLeave = async () => {
    if (!leaveId) {
      Alert.alert('Error', 'Please enter a valid leave ID');
      return;
    }

    try {
      const response = await cancelLeaveRequest(leaveId).unwrap();
      if (response) {
        Alert.alert('Success', 'Leave request cancelled successfully');
      }
    } catch (err) {
      Alert.alert('Error', 'There was an error cancelling the leave request');
    }
  };

  return (
    <View>
      <Text>Cancel Leave Request</Text>

      <Text>Enter Leave ID:</Text>
      <TextInput
        value={leaveId}
        onChangeText={setLeaveId}
        placeholder="Enter Leave ID"
      />

      <Button
        title="Cancel Leave Request"
        onPress={handleCancelLeave}
        disabled={isLoading}
      />

      {isLoading && <Text>Processing...</Text>}
      {error && <Text>Error: {error.message}</Text>}
    </View>
  );
};

export default CancelLeaveRequest;
