import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import AuthorForm from './components/AuthorForm'
import Review from './components/Review'
import UploadForm from './components/UploadForm'

const steps = ['Document info', 'Upload document', 'Review']

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AuthorForm />
    case 1:
      return <UploadForm />
    case 2:
      return <Review />
    default:
      throw new Error('Unknown step')
  }
}

export default function Contribute() {
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  return (
    <React.Fragment>
      <Paper
        variant='outlined'
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component='h1' variant='h4' align='center'>
          Contribute
        </Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography variant='h5' gutterBottom>
              Thank you for your contribution.
            </Typography>
            <Typography variant='subtitle1'>
              Academic integrity is crucial for the foundation of an honest and
              trustworthy educational system.
            </Typography>
            <Link href='.'>Submit another document</Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {getStepContent(activeStep)}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Back
                </Button>
              )}

              <Button
                variant='contained'
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
              >
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Paper>
    </React.Fragment>
  )
}
