import Stack  from "@mui/material/Stack";
import Select from '@mui/material/Select';
import { Cities } from "../../../data/cities";
import { CustomTextField } from "../../../material/CustomTextField";

const SelectCity = ({ currency, setCurrency }) => {

    const handleChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setCurrency(value);
    };
    return (
        <Stack gap = {3}>
            <CustomTextField fullWidth variant="standard" label="Another location" />
            <Select
                sx={{
                    lineHeight : '50px',
                   '& .MuiOutlinedInput-input[multiple]' : {
                    height : '30vh'
                   },
                   '& .MuiOutlinedInput-notchedOutline' : {
                    border : 0
                   }
                }}
                multiple
                native
                value={currency}
                onChange={handleChangeMultiple}
                label="Native"
                inputProps={{
                    id: 'select-multiple-native',
                }}
            >
                {Cities.map((c) => (
                    <option key={c.title} value={c.title}>
                        {c.name}
                    </option>
                ))}
            </Select>
        </Stack>
    )
}

export default SelectCity