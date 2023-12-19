import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

type CommandList = string[];

interface ExportData {
  profileName: string;
  description: string;
  gameType: string;
  commands: CommandList;
}

const ComboMemo: React.FC = () => {
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);
  const [commandList, setCommandList] = useState<CommandList>([]);
  const [profileName, setProfileName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [gameType, setGameType] = useState<string>('');

  useEffect(() => {
    // Load saved data from cookies on component mount
    const savedCommandList = Cookies.get('commandList');
    if (savedCommandList) {
      setCommandList(JSON.parse(savedCommandList));
    }
  }, []);

  useEffect(() => {
    // Save command list to cookies when it changes
    Cookies.set('commandList', JSON.stringify(commandList));
  }, [commandList]);

  const handleButtonClick = (button: string): void => {
    setSelectedButtons((prevButtons) =>
      prevButtons.includes(button)
        ? prevButtons.filter((selected) => selected !== button)
        : [...prevButtons, button]
    );
  };

  const exportCommandList = (): void => {
    const exportData: ExportData = {
      profileName,
      description,
      gameType,
      commands: commandList,
    };

    const exportJson = JSON.stringify(exportData, null, 2);
    console.log(exportJson); // You can replace this with your preferred export mechanism
  };

  const importCommandList = (): void => {
    const importedJson = prompt('Paste your JSON here');
    if (importedJson) {
      try {
        const importedData: ExportData = JSON.parse(importedJson);
        setProfileName(importedData.profileName);
        setDescription(importedData.description);
        setGameType(importedData.gameType);
        setCommandList(importedData.commands);
      } catch (error) {
        console.error('Invalid JSON format');
      }
    }
  };

  return (
    <div>
      <h2>Combo Memo</h2>
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
      <div>
        <h3>Select Buttons:</h3>
        {['A', 'B', 'X', 'Y'].map((button) => (
          <button
            key={button}
            className={selectedButtons.includes(button) ? 'selected' : ''}
            onClick={() => handleButtonClick(button)}
          >
            {button}
          </button>
        ))}
      </div>
      <div>
        <h3>Command List:</h3>
        <ul>
          {commandList.map((command, index) => (
            <li key={index}>{command}</li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={exportCommandList}>Export Command List</button>
        <button onClick={importCommandList}>Import Command List</button>
      </div>
    </div>
  );
};

export default ComboMemo;