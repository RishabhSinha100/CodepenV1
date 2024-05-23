import { createContext ,useState} from "react";

 export const DataContext=createContext();


  
  const DataProdiver = ({children}) => {

    const [html,SetHtml]=useState('');
    const[css,setCss]=useState('');
    const[js,SetJs]=useState('');

    return (
    <DataContext.Provider 
    value={{
html,
SetHtml,
css,
setCss,
js,
SetJs

    }}
   >
    {children}

    </DataContext.Provider>
    )
  }
  
  export default DataProdiver;
  