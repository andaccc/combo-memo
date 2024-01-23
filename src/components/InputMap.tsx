export type Combo = Input[][]

export type Input = {
  label: string,
  name: string,
  type: string | 'direction' | 'attack' | 'action',
  condition?: string | 'close' | 'far',
  icon?: JSX.Element,
}

export const InputMap: Record<string, Input> = {
  /** 
   * Directions
  */
  '1' : {
    label: '1',
    name: 'Down-Back',
    type: 'direction',
    icon: <img src="/input_icon/48px-InputIcon_1.png" alt="appIcon"/>,
  },
  '2' : {
    label: '2',
    name: 'Down',
    type: 'direction',
    icon:<img src="/input_icon/48px-InputIcon_2.png" alt="appIcon"/>,
  },
  '3' : {
    label: '3',
    name: 'Down-Forward',
    type: 'direction',
    // icon: <DownForwardIcon />,
  },
  '4' : {
    label: '4',
    name: 'Left',
    type: 'direction',
    // icon: <LeftIcon />,
  },
  '5' : {
    label: '5',
    name: 'Neutral',
    type: 'direction',
    // icon: <NeutralIcon />,
  },
  '6' : {
    label: '6',
    name: 'Right',
    type: 'direction',
    // icon: <RightIcon />,
  },
  '7' : {
    label: '7',
    name: 'Up-Back',
    type: 'direction',
    // icon: <UpBackIcon />,
  },
  '8' : {
    label: '8',
    name: 'Up',
    type: 'direction',
    // icon: <UpIcon />,
  },
  '9' : {
    label: '9',
    name: 'Up-Forward',
    type: 'direction',
    // icon: <UpForwardIcon />,
  },
  /**
   * Attacks - GGST  
   */ 
  'P' : {
    label: 'P',
    name: 'Punch',
    type: 'attack',
    icon: <img src="/input_icon/33px-GGST_P_Prompt.png" alt="appIcon"/>,
  },
  'K' : {
    label: 'K',
    name: 'Kick',
    type: 'attack',
    // icon: <KickIcon />,
  },
  'S' : {
    label: 'S',
    name: 'Slash',
    type: 'attack',
    // icon: <SlashIcon />,
  },
  'H' : {
    label: 'H',
    name: 'Heavy Slash',
    type: 'attack',
    // icon: <HeavySlashIcon />,
  },
  'D' : {
    label: 'D',
    name: 'Dust',
    type: 'attack',
    // icon: <DustIcon />,
  },
  /**
   * Actions - GGST
   */
  'RC' : {
    label: 'RC',
    name: 'Roman Cancel',
    type: 'action',
    // icon: <RomanCancelIcon />,
  },
  'RRC' : {
    label: 'RRC',
    name: 'Red Roman Cancel',
    type: 'action',
    // icon: <RedRomanCancelIcon />,
  },
  'YRC' : {
    label: 'YRC',
    name: 'Yellow Roman Cancel',
    type: 'action',
    // icon: <YellowRomanCancelIcon />,
  },
}

