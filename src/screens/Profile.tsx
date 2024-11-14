import { View, Text, Button } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setAuthToken } from '../redux/authSlice'

const Profile = () => {
  const dispatch = useDispatch()
  return (
    <View>
      <Button title='log out' onPress={()=>{dispatch(setAuthToken(null))}}/>
    </View>
  )
}

export default Profile;