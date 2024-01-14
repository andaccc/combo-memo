import React, { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Cookies from 'js-cookie'

import WaterMark from './WaterMark'
import ProfileMeta from './ProfileMeta';
import ComboList from './ComboList';

export const ProfileContext = React.createContext({});

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
        <div style={{ display: 'flex'}}>
          <h2>Combo Memo</h2>
          <img src="/10_chibi_ram.png" alt="appIcon"/>
        </div>


        <Grid container spacing={2}>
          {/* First Row */}
          {/* Meta */}
          <Grid item xs={8}>
            <Item>      
              <ProfileMeta/>
            </Item>
          </Grid>
          <Grid item xs={4}>
            {/* auto save? */}
            <Item>Save</Item>
            {/* <Item>Export</Item>
            <Item>Import</Item> */}
          </Grid>
          {/* 
          Second Row 
          - Combo List
          */}
          <Grid item xs={12}>
            <Item>
              <ComboList/>
            </Item>
          </Grid>
        </Grid>
        <WaterMark/>
      </Box>
    </Container>
    
  );
};

export default ComboMemo;