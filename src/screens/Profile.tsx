import { View} from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setAuthToken } from '../redux/authSlice'
import Button from '../components/Button'

const Profile = () => {
  const dispatch = useDispatch()
  return (
    <View>
      <Button title='log out' onPress={()=>{dispatch(setAuthToken(null))}}/>
    </View>
  )
}

export default Profile;