import { FormControl, MenuItem } from '@mui/material'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { useState } from 'react'

export default function AuthorForm() {
  const [topic, setTopic] = useState('')

  const handleTopic = e => {
    setTopic(e.target.value)
  }

  const topics = ['TPB', 'Prodi']

  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Document Information
      </Typography>
      <FormControl>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id='author'
              name='author'
              label='Author'
              placeholder='eg. Andy Morris/Kelompok 4'
              variant='standard'
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id='course'
              name='course'
              label='Course'
              placeholder='eg. Fisdas A/PBN A'
              variant='standard'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='topic'
              name='topic'
              label='Topic'
              value={topic}
              select
              onChange={handleTopic}
              variant='standard'
              fullWidth
            >
              <MenuItem value=''>
                <em>Select</em>
              </MenuItem>
              {topics.map(topic => (
                <MenuItem key={topic} value={topic}>
                  {topic}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='year'
              name='year'
              label='Year'
              fullWidth
              variant='standard'
            />
          </Grid>
        </Grid>
      </FormControl>
    </React.Fragment>
  )
}
