import AppBar from '@mui/material/AppBar'
// import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'

import Container from '@mui/material/Container'
// import Button from '@mui/material/Button'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { MenuItem } from '@mui/material'
import { Link } from 'react-router-dom'
import AirOutlinedIcon from '@mui/icons-material/AirOutlined'
import RoofingOutlinedIcon from '@mui/icons-material/RoofingOutlined'
import DinoSVG from '../svg/dinosaur-svgrepo-com.svg'

// const pages = ['Dictionary', 'Weather', 'Dinosaur']
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
})

export function Header() {
  return (
    <ThemeProvider theme={darkTheme}>

      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <MenuItem component={Link} to="/">
              <RoofingOutlinedIcon />
              {' '}
              HOME
            </MenuItem>
            <MenuItem component={Link} to="/weather">
              <AirOutlinedIcon />
              WEATHER
            </MenuItem>
            <MenuItem component={Link} to="/dinosaur">
              {' '}
              <img src={DinoSVG} alt="" style={{ width: 25 }} />
              DINOSAUR
            </MenuItem>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}
