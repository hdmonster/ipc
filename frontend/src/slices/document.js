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
    state.document = { ...state.document, ...action.payload }
  },
}

const slice = createSlice({
  name: 'document',
  initialState,
  reducers,
})

export const { setDocumentData } = slice.actions

export const selectDocument = state => state.document

export const { reducer } = slice
