import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { useState } from 'react'
import DragDropFile from '../../../components/DragDropFile/DragDropFile'

export default function UploadForm() {
  const [doc, setDoc] = useState(null)

  const handleFile = files => {
    setDoc(files[0])
    console.log(files)
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
        <Grid item xs={12}>
          <TextField
            required
            id='uploader'
            name='uploader'
            label='Uploader'
            placeholder='Your name'
            fullWidth
            variant='standard'
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
