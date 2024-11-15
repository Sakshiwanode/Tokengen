import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { useGetUpcomingBirthdaysQuery } from '../services/appLevel';

const UpcomingBirthday = () => {
  const { data, error, isLoading } = useGetUpcomingBirthdaysQuery(undefined);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error fetching data</Text>;

  const birthdayList = data?.data || [];

  return (
    <FlatList
      data={birthdayList}
      keyExtractor={(item) => item?.userId?.toString()}
      renderItem={({ item }) => (
        console.log(item),
        
        <View style={styles.card}>
          <View style={styles.row}>
            {item.employeeImg && (
              <Image
                source={{ uri: `data:image/png;base64,${item.employeeImg}` }}
                style={styles.image}
              />
            )}
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.fullName}</Text>
              <Text style={styles.birthday}>
                🎂{new Date(item.birthdayDate).toLocaleDateString()}
              </Text>
            </View>
          </View>
          <Text style={styles.designation}>{item.designation}</Text>
          <Text style={styles.email}>{item.email}</Text>
          <Text style={styles.mobile}>{item.mobile}</Text>
        </View>
      )}
      ListEmptyComponent={<Text style={styles.emptyText}>No data available</Text>}
    />
  );
};

const styles = StyleSheet.create({
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  birthday: {
    fontSize: 14,
    color: '#888',
  },
  designation: {
    fontSize: 16,
    marginTop: 5,
    color: '#555',
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  mobile: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#aaa',
  },
});

export default UpcomingBirthday;
