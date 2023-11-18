import { Button, FormControl, Grid, Typography } from '@mui/material'
import DragDropFile from '../components/DragDropFile/DragDropFile'
import { useState } from 'react'

export default function Index() {
  const [doc, setDoc] = useState(null)

  const handleFile = files => {
    setDoc(files[0])
    console.log(files)
  }

  const handleSubmit = async e => {
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <Grid
          container
          spacing={3}
          sx={{
            my: { xs: 3, md: 6 },
            p: { xs: 2, md: 3 },
          }}
        >
          <Grid item xs={12}>
            <DragDropFile handleFile={handleFile} doc={doc} />
          </Grid>
          <Grid item xs={6}>
            <Button type='submit' variant='contained' fullWidth>
              Check
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}
