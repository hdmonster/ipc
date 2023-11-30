import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import * as React from 'react'

export default function Review({ state }) {
  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Document summary
      </Typography>

      <Grid container spacing={2}>
        <Grid item container direction='column' xs={12} sm={6}>
          <Typography variant='h6' gutterBottom sx={{ mt: 2 }}>
            Metadata
          </Typography>
          <Grid container>
            {state.files != null ? (
              <>
                <Grid item xs={6}>
                  <Typography gutterBottom>Filename</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{state.files[0].name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Filetype</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{state.files[0].type}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Size</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>
                    {Math.round(state.files[0].size / 100000)} MB
                  </Typography>
                </Grid>
              </>
            ) : (
              <>No file found</>
            )}
          </Grid>
        </Grid>
        <Grid item container direction='column' xs={12} sm={6}>
          <Typography variant='h6' gutterBottom sx={{ mt: 2 }}>
            Author
          </Typography>
          <Grid container>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Title</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{state.title}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>Course</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{state.course}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>Author</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{state.author}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>Year</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{state.year}</Typography>
              </Grid>
            </>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
