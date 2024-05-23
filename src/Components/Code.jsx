import { useContext } from 'react';
import Editor from './Editor';
import React from 'react'
import{Box,styled} from '@mui/material';
import { DataContext } from '../Context/DataProdiver';


 const Constainer=styled(Box)`
display:flex;
background-color:#060606;

 `
const Code = () => {

   const {html,
    SetHtml,
    css,
    setCss,
    js,
    SetJs}= useContext(DataContext);

  return (
    <div>
        <Constainer>

    <Editor
    heading="HTML"
    icon="/"
    color="#FF3c41"
    value={html}
    onchange={SetHtml}
    />
    <Editor
    heading="CSS"
    icon="*"
    color="#0EBEFF"
    value={css}
    onchange={setCss}
  
    
    />
    <Editor
    heading="JS"
    icon="#"
    color="#FCD000"
    value={js}
    onchange={SetJs}
    />
    </Constainer>


        
    </div>
  )
}

export default Code;

