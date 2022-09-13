import { Grid, Input } from '@chakra-ui/react';
import DataTable from 'react-data-table-component';
import das from "./daa";
import React,{useEffect, useState} from "react"
import daa from './daa';


const columns  : any = [
    {
      name: "Title",
      selector: "title",
      sortable: true
    },
    {
      name: "Directior",
      selector: "director",
      sortable: true
    },
    {
      name: "Runtime (m)",
      selector: "runtime",
      sortable: true,
      right: true
    }
  ];
const Table = () => {

    const [search ,setsearch] = useState("");
    const [filter,setfilter] = useState <any>([]);

    useEffect(()=>{
        setfilter(daa)
    },[daa])

    useEffect(()=>{
        const daata : any = das.filter((data)=> {return data.title.toLowerCase().match(search.toLowerCase())})
        setfilter(daata)
    },[search])
return(
    <>
    <Grid >
 <DataTable
 title={
    <h1> GameDb</h1>
 }
         columns={columns}
         data={filter}
          pagination
          highlightOnHover
          fixedHeader
  fixedHeaderScrollHeight="100vh"
          subHeader
          subHeaderComponent = {
            <Input placeholder='search' onChange={(event)=> setsearch(event.target.value)} />
          }
          
        /> 
    </Grid>
       
    </>
)
}

export default Table