import { FormControl, MenuItem } from '@mui/material'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

export default function AuthorForm({ handleChange }) {
  const topics = ['TPB', 'Prodi']

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Document Information
      </Typography>
      <FormControl>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id='title'
              name='title'
              label='Title'
              placeholder='eg. Laporan Tugas Besar ABC'
              onChange={handleChange}
              variant='standard'
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id='author'
              name='author'
              label='Author'
              placeholder='eg. Andy Morris/Kelompok 4'
              onChange={handleChange}
              variant='standard'
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id='course'
              name='course'
              label='Course'
              placeholder='eg. Fisdas A/PBN A'
              onChange={handleChange}
              variant='standard'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='topic'
              name='topic'
              label='Topic'
              select
              onChange={handleChange}
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
              onChange={handleChange}
              variant='standard'
              fullWidth
            />
          </Grid>
        </Grid>
      </FormControl>
    </>
  )
}
