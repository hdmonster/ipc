import axios from '../lib/axios'
import { Button, Grid, TextField } from '@mui/material'
import DragDropFile from '../components/DragDropFile/DragDropFile'
import { useState } from 'react'

export default function Index() {
  const [doc, setDoc] = useState(null)
  const [pageNumber, setPageNumber] = useState({
    start: null,
    end: null,
  })

  const handleFile = files => {
    setDoc(files[0])
    console.log(files)
  }

  const handleChange = e => {
    try {
      const targetName = [e.target.name]
      setPageNumber(prev => ({ ...prev, [targetName]: e.target.value }))
    } catch (err) {
      console.log('Error', err)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('file', doc)
    formData.append('start', pageNumber.start)
    formData.append('end', pageNumber.end)

    try {
      const res = await axios.post('/check', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })

      let resJson = JSON.parse(res.data)

      alert(
        `Your plagiarism score is ${resJson.score}!\nYour document is similar to ${resJson.similar_docs[0].title}`
      )
    } catch (e) {
      alert('Error:', e)
    }
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
