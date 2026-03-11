"use client"
import Autocomplete from "@mui/material/Autocomplete";
// import Button from '@mui/material/Button';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
  import AlarmIcon from '@mui/icons-material/Alarm';
import Fingerprint from '@mui/icons-material/Fingerprint';
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
]

export default function ButtonUsage() {
    const [movie, setMovie] = useState("")
    const [loading,setLoading] = useState(false)

    const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });
  return <>
     <Stack spacing={2} width={300}>
        <Autocomplete  sx={{width: 300, height : 60}}
        multiple
        id="free-solo-demo"
        inputValue={movie}
        onInputChange={(event,newValue) => {
            setMovie(newValue)
        }}
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="Movies" />}
      />
     </Stack>
     <p>{movie}</p>

     <Autocomplete
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(options) => options.firstLetter}
      getOptionLabel={(options) => options.title}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="With categories" />}
    />

    <Autocomplete sx={{width: 300, height : 60}}
        multiple
        limitTags={1}
        id="tags-standard"
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Multiple values"
            placeholder="Favorites"
          />
        )}
      />
        
        <Button variant="contained">Submit</Button>
        <Button>rfwrfr</Button>
        <Button variant="outlined" disabled>rrrr</Button>
        <Button variant="contained" disableElevation>duebhj</Button>

        <Button >Success</Button>
        <Button variant="contained" color="success" size="medium" loading loadingPosition="start" endIcon={<DeleteIcon/>}>error</Button>

        <Button ><AlarmIcon/></Button>
        <Button><Fingerprint/></Button>
        <Button ><AlarmIcon/></Button>

        <FormControlLabel
            control={
                
                <Switch
                checked={loading}
                onClick={() => setLoading(!loading)}
                color="primary"
                />
            }
            label="Loading"
        />
        <TextField label="Outlined" variant="outlined" />

    

  </>
}
