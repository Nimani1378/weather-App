import {Grid, TextField} from "@mui/material";
import {Cities} from "../data/cities";

const SelectCity = ({currency, setCurrency}) => {

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return(
        <Grid item xs={12} textAlign={'center'}>
            <TextField
                select
                value={currency}
                onChange={handleChange}
                SelectProps={{
                    native: true,
                }}
                variant="filled"
            >
                {Cities.map((option) => (
                    <option key={option.title} value={option.title}>
                        {option.name}
                    </option>
                ))}
            </TextField>
        </Grid>
    )
}

export default SelectCity