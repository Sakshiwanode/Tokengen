import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useProcessedLeavesQuery } from '../services/appLevel';

const AcceptedLeaveRecordList = () => {
  const { data, error, isLoading } = useProcessedLeavesQuery(undefined);

  console.log("isLoading:", isLoading);
  console.log("Error:", error);
  console.log("Data:", data);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error fetching data</Text>
      </View>
    );
  }

  const leaveList = data?.data || []; 

  return (
    <View>
      <Text>Accepted Leave Record List</Text>
      {leaveList.length > 0 ? ( 
        <FlatList
          data={leaveList}
          keyExtractor={(item) => item.leaveApplicationId?.toString()} 
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: "#ddd" }}>
              <Text>Name: {item.name}</Text>
              <Text>Leave Type: {item.leaveType?.label}</Text>
              <Text>Leave Start Date: {item.leaveStartDate}</Text>
              <Text>Leave End Date: {item.leaveEndDate}</Text>
              <Text>Status: {item.status?.label}</Text>
            </View>
          )}
        />
      ) : (
        <Text>No accepted leave records found</Text>
      )}
    </View>
  );
};

export default AcceptedLeaveRecordList;
