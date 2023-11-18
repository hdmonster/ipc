import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from '@mui/material'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const MainLayout = () => {
  return (
    <>
      <CssBaseline />
      <AppBar
        position='absolute'
        color='default'
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: t => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography
            href='/'
            component='a'
            variant='h6'
            color='inherit'
            noWrap
            sx={{ flexGrow: 1, cursor: 'pointer', textDecoration: 'none' }}
          >
            IPC
          </Typography>
          <Button color='inherit' href='/'>
            Plagiarism Check
          </Button>
          <Button color='inherit' href='/contribute'>
            Contribute
          </Button>
        </Toolbar>
      </AppBar>
      <Container component='main' maxWidth='sm' sx={{ mb: 4 }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}

export default MainLayout
