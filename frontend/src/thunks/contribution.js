import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../api'

export const createContribution = createAsyncThunk('contribute', async data => {
  const res = await api.post('/contribution/create', data)
  console.log(res.data)
})
