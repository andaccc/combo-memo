import React, { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

import Cookies from 'js-cookie'

import WaterMark from './waterMark'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// data structure for storing combos

type combo = string[]
type comboList = combo[];

interface ExportData {
  profileName: string;
  description: string;
  gameType: string;
  commands: comboList;
}

const ComboMemo: React.FC = () => {
  // meta
  const [profileName, setProfileName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [gameType, setGameType] = useState<string>('');

  // combo list
  const [selectedButtons, setSelectedButtons] = useState<string>("");
  const [combo, setCombo] = useState<combo>([]); 
  const [comboList, setComboList] = useState<comboList>([]);


  useEffect(() => {
    // Load saved data from cookies on component mount
    const savedcomboList = Cookies.get('comboList');
    if (savedcomboList) {
      setComboList(JSON.parse(savedcomboList));
    }
  }, []);

  useEffect(() => {
    // Save command list to cookies when it changes
    Cookies.set('comboList', JSON.stringify(comboList));
  }, [comboList]);

  const handleButtonClick = (button: string): void => {
    setSelectedButtons(button)
    // setSelectedButtons((prevButtons) =>
    //   prevButtons.includes(button)
    //     ? prevButtons.filter((selected) => selected !== button)
    //     : [...prevButtons, button]
    // );
  };

  const handleAddCombo = (): void => {
    setCombo((prevCombo) => [...prevCombo, selectedButtons]);
    setComboList((prevComboList) => [...prevComboList, combo]);
    setSelectedButtons("");
  }

  const exportcomboList = (): void => {
    const exportData: ExportData = {
      profileName,
      description,
      gameType,
      commands: comboList,
    };

    const exportJson = JSON.stringify(exportData, null, 2);
    console.log(exportJson); // You can replace this with your preferred export mechanism
  };

  const importComboList = (): void => {
    const importedJson = prompt('Paste your JSON here');
    if (importedJson) {
      try {
        const importedData: ExportData = JSON.parse(importedJson);
        setProfileName(importedData.profileName);
        setDescription(importedData.description);
        setGameType(importedData.gameType);
        setComboList(importedData.commands);
      } catch (error) {
        console.error('Invalid JSON format');
      }
    }
  };

  return (
    <Container id="main">
      <Box sx={{ p: 2 }} >
        <h2>Combo Memo</h2>
        <Grid container spacing={2}>
          {/* Second Row */}
          <Grid item xs={8}>
            <Item>      
              <div>
              <label>Profile Name:</label>
              <input type="text" value={profileName} onChange={(e) => setProfileName(e.target.value)} />
            </div>
            <div>
              <label>Description:</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
              <label>Game Type:</label>
              <input type="text" value={gameType} onChange={(e) => setGameType(e.target.value)} />
            </div>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          {/* 
          Second Row 
          - Command List

          */}
          <Grid item xs={12}>
            <Item>
              <div>
                {/* button select */}
                <h3>Select Buttons:</h3>
                  <ButtonGroup size="small" aria-label="small button group">
                    {/* store selected buttons */}
                    {['A', 'B', 'X', 'Y'].map((button) => (
                      <Button
                        key={button}
                        onClick={() => handleButtonClick(button)}
                      >
                        {button}
                      </Button>
                    ))}
                  </ButtonGroup>
                 
              </div>
              <div>
                <h3>Command List:</h3>
                {/* command list */}
                {/* show selected buttons for add or del */}
                <div>
                  {selectedButtons}
                  
                  {/* if selected button show add button */}
                  { 
                    selectedButtons.length > 0 && (
                      <IconButton aria-label="add" size="small"
                        onClick={() => handleAddCombo()}>
                          <AddIcon fontSize="small"/>
                      </IconButton>
                    )
                  }
                </div>
                {/* show added commands */}
                <ul>
                  {comboList.map((command, index) => (
                    <li key={index}>{command}</li>
                  ))}
                </ul>
              </div>
              <div>
                {/* <button onClick={exportcomboList}>Export Command List</button>
                <button onClick={importcomboList}>Import Command List</button> */}
              </div>
        </Item>
          </Grid>
          {/* <Grid item xs={4}>
            <Item>xs=8</Item>
          </Grid> */}
        </Grid>
        <WaterMark/>
      </Box>
    </Container>
  );
};

export default ComboMemo;