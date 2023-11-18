import { Link, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://itk.ac.id/'>
        IPC - ITK Plagiarism Checker. By Kelompok 3 - NLP A
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
