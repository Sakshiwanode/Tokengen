import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function Search({ navigation }:any) {
  const buttons = [
    'ApplyNewLeaveRequest',
    'AppliedLeaveRecordList',
    'AcceptedLeaveRecordList',
    'CancelLeaveRequest',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Leave & Break</Text>
      <FlatList
        data={buttons}
        horizontal
        showsHorizontalScrollIndicator={false}

        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    marginRight: 10,
    paddingVertical: 12, 
    paddingHorizontal: 20,
    backgroundColor: '#6200ea',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50, 
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
