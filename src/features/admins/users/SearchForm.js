import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from "./schema"
  

export default function SearchForm() {

  const { handleSubmit, control } = useForm({
        mode: "all",
        defaultValues: {
            search: ""
        },
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        console.log(data);
    }

      
    return ( 
      <React.Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
                            
            <Controller
              name="search"
              control={control}
              render={({ field }) => (
              <FormControl fullWidth variant="standard">
                  <TextField  
                      {...field} 
                      id="outlined-adornment-search"
                      placeholder="Search..."
                      fullWidth
                      size='small'
                      InputProps={{
                      startAdornment: (
                        <InputAdornment position="start"> 
                            <SearchIcon color="primary" />
                        </InputAdornment>)}}
                    />
              </FormControl>)
            }/>
                            
        </form>
      </React.Fragment>
     );
}