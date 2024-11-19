import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Button } from 'react-native';
import { useEmployeeAppliedLeavesQuery } from '../services/appLevel';
import moment from 'moment';

const AppliedLeaveRecordList = () => {
 
  const { data, error, isLoading } = useEmployeeAppliedLeavesQuery(undefined);

  
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>Error fetching data</Text>
      </View>
    );
  }

  
  const leaveList = data?.data || [];



  return (
    <FlatList
      data={leaveList}
      keyExtractor={(item) => item.leaveApplicationId?.toString()}
      renderItem={({ item }) => (
        console.log(item),
        
        <View style={styles.card}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.leaveType}>Leave Type: {item.leaveType?.label}</Text>
          <Text style={styles.leaveDates}>
            From:{ moment(item.leaveStartDate)?.format('YYYY/MM/DD')} To: {new Date(item.leaveEndDate).toLocaleDateString()}
          </Text>
          <Text style={styles.status}>Status: {item.status?.label}</Text>
          <Button title='cancel' onPress={()=>handlecancel({item})}/>
        </View>
      )}
      ListEmptyComponent={<Text style={styles.emptyText}>No applied leave records found</Text>}
    />
  );
};
const handlecancel =({item}:any)=>{
console.log(item?.leaveApplicationId);

}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  leaveType: {
    fontSize: 16,
    color: '#888',
  },
  leaveDates: {
    fontSize: 14,
    color: '#666',
  },
  status: {
    fontSize: 14,
    color: '#666',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#aaa',
  },
});

export default AppliedLeaveRecordList;
