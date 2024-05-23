import React from 'react'
import Icons from './Icons/codepen.png'
import { AppBar,Toolbar,styled } from '@mui/material'

const Container=styled(AppBar)`
background:#060606;
height:9vh;
`

const Header = () => {
  return (
    <div>
      <Container position="static">
        <Toolbar>
        <h1 style={{width:20}}>Rv.Codepen</h1>
        </Toolbar>
      </Container>
    </div>
  )
}

export default Header

