import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import Typography from '@mui/material/Typography'
import AuthorForm from './components/AuthorForm'
import Review from './components/Review'
import UploadForm from './components/UploadForm'

import { useState } from 'react'
import axios from '../../lib/axios'

const steps = ['Document info', 'Upload document', 'Review']

function getStepContent(step, handleChange, state, setState) {
  switch (step) {
    case 0:
      return <AuthorForm handleChange={handleChange} />
    case 1:
      return <UploadForm handleChange={handleChange} setState={setState} />
    case 2:
      return <Review state={state} />
    default:
      throw new Error('Unknown step')
  }
}

export default function Contribute() {
  const [activeStep, setActiveStep] = useState(0)
  const [authorData, setAuthorData] = useState({
    title: '',
    author: '',
    course: '',
    topic: '',
    year: '',
    uploader: '',
    files: null,
    start: null,
    end: null,
    url: '',
  })

  const handleChange = e => {
    try {
      const targetName = [e.target.name]
      setAuthorData(prev => ({ ...prev, [targetName]: e.target.value }))
    } catch (err) {
      console.log('Error', err)
    }
  }

  const handleSubmit = async () => {
    const formData = new FormData()
    formData.append('title', authorData.title)
    formData.append('author', authorData.author)
    formData.append('course', authorData.course)
    formData.append('topic', authorData.topic)
    formData.append('year', authorData.year)
    formData.append('uploader', authorData.uploader)
    formData.append('url', '/uploads/' + authorData.files[0].name)
    formData.append('file', authorData.files[0])
    formData.append('start', authorData.start)
    formData.append('end', authorData.end)

    try {
      const res = await axios.post('/contribute', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })

      let resJson = JSON.parse(res.data)
      console.log(resJson)

      if (resJson.status == 'OK') {
        alert(resJson.message)
      } else if (resJson.status == 'ERROR') {
        if (resJson.message.code == 'gkpj')
          alert('Same document has been uploaded!')
        else alert('Error:' + resJson.message)
        console.log(resJson.message)
      } else {
        alert('Similar title has been submitted before')
      }
    } catch (e) {
      alert('Client error:', e)
      console.log(e)
    }
  }

  const handleNext = async () => {
    if (activeStep == 1 && authorData.files == null) {
      alert('Please upload a document!')
      return
    }

    setActiveStep(activeStep + 1)

    if (activeStep + 1 == steps.length) await handleSubmit()
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  return (
    <>
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
          <>
            <Typography variant='h5' gutterBottom>
              Thank you for your contribution.
            </Typography>
            <Typography variant='subtitle1'>
              Academic integrity is crucial for the foundation of an honest and
              trustworthy educational system.
            </Typography>
            <Link href='/contribute'>Submit another document</Link>
          </>
        ) : (
          <>
            {getStepContent(
              activeStep,
              handleChange,
              authorData,
              setAuthorData
            )}
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
          </>
        )}
      </Paper>
    </>
  )
}
