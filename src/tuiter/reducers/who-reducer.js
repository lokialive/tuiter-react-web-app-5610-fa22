import { createSlice } from '@reduxjs/toolkit'

const whoSlice = createSlice({
  name: 'who',
  initialState: [
    {
      avatarIcon: '/tuiter/images/java.jpeg',
      userName: 'Java',
      handle: 'Java',
    },
    {
      avatarIcon: '/tuiter/images/relativity_space.jpeg',
      userName: 'Relativity Space',
      handle: 'relativityspace',
    },
    {
      avatarIcon: '/tuiter/images/virgin.png',
      userName: 'Virgin Galactic',
      handle: 'virgingalactic',
    },
    {
      avatarIcon: '/tuiter/images/nasa.png',
      userName: 'NASA',
      handle: 'nasa',
    },
    {
      avatarIcon: '/tuiter/images/tesla.jpeg',
      userName: 'Tesla',
      handle: 'tesla',
    },
  ],
})

export default whoSlice.reducer
