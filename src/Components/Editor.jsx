import React from 'react'

import{useState} from 'react';
import { Box,styled } from '@mui/material'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as ControlledEditor} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import '../App.css';

const Handing=styled(Box)`
background: #1d1e22;
display:flex;
padding:9px 12px;
`;

const Header=styled(Box)`
display:flex;
background:#060606;
color:#AAAEBC;
justify-content:space-between;
font-weight:700
`
const Container=styled(Box)`

flex-grow:1;
flex-basic:0;
dislpay:flex;
flex-direction:columm;
padding: 0 8px 8px;
`


const Editor = ({heading,icon,color,value,onchange}) => {



  const[open,setopen]=useState(true)

   const handlechange=(editor,data,value)=>{
   onchange(value);
   }
  return (
    <Container style={open?null:{flexGrow:0}}>
         <Header>
               <Handing>
                   <Box component="span" 
                   style={{
                   background:color,
                   height:20,
                   width:20,
                    display:'flex',
                    placeContent:'center',
                    borderRadius:5,
                    marginRight:5,
                      paddingBottom:2,
                      color:'#000'
                   }}
            
                     >{icon}</Box>
                  {heading}
                 </Handing> 
             <CloseFullscreenIcon
             fontSize='small'
             style={{alignSelf:'center'}}
              onClick={()=>setopen(prevState=>!prevState)} 

             />
           </Header>
           <ControlledEditor 
           className='controlled-editor'
           value={value}
           onBeforeChange={handlechange}
        options={{

            theme:'material',
            lineNumbers:true
            
        }}
           />
    </Container>
  ) 
}

export default Editor
