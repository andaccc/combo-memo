import React, { useState, useEffect } from 'react'
import { Box, TextField, MenuItem } from '@mui/material';

import { ProfileContext, Characters } from '../ProfileContext'

const games = [ "ggst" ]

const ProfileMeta: React.FC = () => {
  const { game, character, changeCharacter } = React.useContext(ProfileContext);

  const handleChangeCharacter = (char: string) => {
    changeCharacter(char);
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-select-game"
        select
        label="Game"
        defaultValue="ggst"
        variant="standard"
      >
        {games.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="standard-select-game"
        select
        label="Character"
        defaultValue={Characters.ggst.ram}
        variant="standard"
        onChange={event => handleChangeCharacter(event.target.value)}
      >
        {
          Object.values(Characters.ggst).map((char) => (
            <MenuItem key={char} value={char}>
              {char}
            </MenuItem>
          ))
        }
      </TextField>
    </Box>
  )
}

export default ProfileMeta;