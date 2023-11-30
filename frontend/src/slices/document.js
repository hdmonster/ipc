import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: {},
  title: {},
  author: {},
  course: {},
  topic: {},
  year: {},
  uploader: {},
  url: {},
}

const reducers = {
  setDocumentData: (state, action) => {
    state = { ...state, ...action.payload }
  },
}

const slice = createSlice({
  name: 'document',
  initialState,
  reducers,
})

export const { setDocumentData } = slice.actions

export const getDocument = state => state

export const { reducer } = slice
