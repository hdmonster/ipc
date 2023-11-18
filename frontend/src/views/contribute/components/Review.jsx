import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import * as React from 'react'

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Document summary
      </Typography>

      <Grid container spacing={2}>
        <Grid item container direction='column' xs={12} sm={6}>
          <Typography variant='h6' gutterBottom sx={{ mt: 2 }}>
            `` Metadata
          </Typography>
          <Grid container>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Filename</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>nlp-doc.pdf</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>Filetype</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>Application/PDF</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>Size</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>3MB</Typography>
              </Grid>
            </>
          </Grid>
        </Grid>
        <Grid item container direction='column' xs={12} sm={6}>
          <Typography variant='h6' gutterBottom sx={{ mt: 2 }}>
            Author
          </Typography>
          <Grid container>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Name</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>Kelompok 3</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>Course</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>NLP A</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>Course Type</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>Prodi</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>Year</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>2023</Typography>
              </Grid>
            </>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
