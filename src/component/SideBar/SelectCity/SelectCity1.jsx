import Stack from "@mui/material/Stack";
import Select from '@mui/material/Select';
import { Cities } from "../../../data/cities";
import { CustomTextField } from "../../../material/CustomTextField";
import { useState } from "react";
import { Typography } from "@mui/material";

const SelectCity1 = ({ currency, setCurrency }) => {
    const [search,setSearch] = useState('');
    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    const handleChangeMultiple = (value) => {
        console.log(value);
        setCurrency(value);
    };
    return (
        <Stack gap={4}>
            <CustomTextField value={search} onChange={handleChange} fullWidth variant="standard" label="Another location" />
            <Stack gap={2} sx={{
                height: '30vh',
                overflowY : 'scroll'
            }}>
                {Cities.filter(filtered=>filtered.name.toUpperCase().includes(search.toUpperCase())).map((c) => (
                    <Stack key={c.title} onClick={()=>handleChangeMultiple(c.title)} sx={{
                        padding : '6px 0',
                        color : 'text.primary',
                        cursor : 'pointer',
                        '.MuiStack-root:hover' : {
                            backgroundColor : 'white'
                        }
                    }}>
                        <Typography color="text.secondary">{c.name}</Typography>
                    </Stack>
                )
                )}
            </Stack>
        </Stack >
    )
}

export default SelectCity1