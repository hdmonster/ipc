import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { useState } from 'react'
import DragDropFile from '../../../components/DragDropFile/DragDropFile'

export default function UploadForm({ handleChange, setState }) {
  const [doc, setDoc] = useState(null)

  const handleFile = files => {
    setDoc(files[0])
    setState(prev => ({ ...prev, files }))
  }

  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Document
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <DragDropFile handleFile={handleFile} doc={doc} />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id='start'
            name='start'
            label='Start page'
            type='number'
            placeholder='eg. 0'
            onChange={handleChange}
            variant='standard'
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id='end'
            name='end'
            label='End page'
            type='number'
            placeholder='eg. 10'
            onChange={handleChange}
            variant='standard'
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='uploader'
            name='uploader'
            label='Uploader'
            placeholder='Your name'
            onChange={handleChange}
            variant='standard'
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
