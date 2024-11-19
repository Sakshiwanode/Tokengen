import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useSelector } from 'react-redux';

import { useEmployeeLeaveApplyMutation } from '../services/appLevel';
import { RootState } from '../redux/store';

const ApplyNewLeaveRequest = () => {
  const [leaveType, setLeaveType] = useState(null);
  const [leaveTypeOpen, setLeaveTypeOpen] = useState(false);

  const [halfDayType, setHalfDayType] = useState(null);
  const [halfDayTypeOpen, setHalfDayTypeOpen] = useState(false);

  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const [applyLeave, { isLoading }] = useEmployeeLeaveApplyMutation();

  const token = useSelector((state: RootState) => state.appState.authToken);
  const UserID = useSelector((state: RootState) => state.appState.userID);

  const handleSubmit = async () => {

    const leaveRequestData = {
      leaveApplicationId: null,
      employeeId: UserID,
      leaveType: {
        value: leaveType === 'Earn Leave' ? 674180000 : null,
        label: leaveType,
      },
      typeofHalfDayLeave: halfDayType === 'Full Day' ? null : 'Half Day',
      leaveStartDate: startDate.toISOString().split('T')[0],
      leaveEndDate: endDate.toISOString().split('T')[0],
      totalDaysofLeave: 0.5,
    };
    console.log(leaveRequestData);
    
   
    try {
      const response = await applyLeave(leaveRequestData).unwrap();
     
      if (response.isSuccessful && response.messageDetail?.message_code === 201) {
        Alert.alert(
          'Success',
          response.messageDetail.message || 'Leave applied successfully.'
        );
        console.log('Response Data:', response.data);
      } else {
        Alert.alert(
          'Error',
          response.messageDetail?.message || 'Failed to apply leave. Please try again.'
        );
      }
    } catch (error) {
      console.error('Error applying leave:', error);
      Alert.alert('Error', 'An unexpected error occurred. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Apply for Leave</Text>
      <View style={{ marginBottom: 24,}}><Text>Select Leave Type</Text></View>


      <View style={{marginBottom:40}}>
      <DropDownPicker
        open={leaveTypeOpen}
        value={leaveType}
        items={[
          { label: 'Earn Leave', value: 'Earn Leave' },
          { label: 'Sick Leave', value: 'Sick Leave' },
        ]}
        setOpen={setLeaveTypeOpen}
        setValue={setLeaveType}
        placeholder="Select Leave Type"
       
      />
</View>

      <View style={{ marginBottom: 24,}}><Text>Select Day Type</Text></View>
     <View style={{marginBottom:21}}>
      <DropDownPicker
        open={halfDayTypeOpen}
        value={halfDayType}
        items={[
          { label: 'Full Day', value: 'Full Day' },
          { label: 'Half Day', value: 'Half Day' },
        ]}
        setOpen={setHalfDayTypeOpen}
        setValue={setHalfDayType}
        placeholder="Select Day Type"
      
      />
</View>
      <View style={styles.datePickerContainer}>
      <View style={{ marginBottom: 24,}}><Text>Select Start Date</Text></View>
        <Button title="Select Start Date" onPress={() => setShowStartDatePicker(true)} />
        {showStartDatePicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display="default"
            onChange={(event, date) => {
              setShowStartDatePicker(false);
              if (date) setStartDate(date);
            }}
          />
        )}
        <Text>Selected Start Date: {startDate.toDateString()}</Text>
      </View>

      <View style={styles.datePickerContainer}>
      <View style={{ marginBottom: 24,}}><Text>Select End Date</Text></View>
        <Button title="Select End Date" onPress={() => setShowEndDatePicker(true)} />
        {showEndDatePicker && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display="default"
            onChange={(event, date) => {
              setShowEndDatePicker(false);
              if (date) setEndDate(date);
            }}
          />
        )}
        <Text>Selected End Date: {endDate.toDateString()}</Text>
      </View>

      <Button title="Submit Leave Request" onPress={handleSubmit} disabled={isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#333',
  },
  
  
  dropdownContainer: {
    marginBottom: 44, 
  },
  dropdownLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#555',
  },
  dropdown: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20, // Space between dropdowns and next elements
  },

  // Date Picker Styles
  datePickerContainer: {
    marginBottom: 24, // Space between date pickers
  },
  dateLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#555',
  },
  dateText: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },

  // Button Styles
  button: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});




export default ApplyNewLeaveRequest;
