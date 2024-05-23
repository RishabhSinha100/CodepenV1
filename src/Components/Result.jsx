import React from 'react'
import{useContext,useState} from 'react'
 import { useEffect } from 'react';
 import{Box,styled} from '@mui/material';
 
 import { DataContext } from '../Context/DataProdiver';


 const Constainer=styled(Box)`
 height:41vh;
 `;
 const Result = () => {
     
     const[Src,SetSrc]=useState('');
    // const [srcDoc, setSrcDoc] = useState('');

    const{html,css,js}=useContext(DataContext);

const srccode=`
<html>
<body>${html}</body>
<style>${css}</style>
<script>${js}</script>
</html>
`

     

      useEffect(()=>{
       const timeout= setTimeout(()=>{
     SetSrc(srccode);
        },1000)
        return ()=>clearTimeout(timeout);
      },[html,css,js])

  return (
   <Constainer>
       <iframe
         srcDoc={Src}
         title="Output"
         sandbox='allow-scripts'
         frameBorder={0}
         width="100%"
         height="100%"
         />

   </Constainer>
  )
}

export default Result;
