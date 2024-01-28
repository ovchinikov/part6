import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  message: '',
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      const { message } = action.payload
      state.message = message
    },
    clearNotification(state) {
      state.message = ''
    },
  },
})

export const setNotificationWithTimeout = (message, timeout) => {
  return async (dispatch) => {
    dispatch(setNotification({ message }))
    setTimeout(() => {
      dispatch(clearNotification())
    }, timeout * 1000)
  }
}
export const { setNotification, clearNotification } = notificationSlice.actions

export default notificationSlice.reducer
