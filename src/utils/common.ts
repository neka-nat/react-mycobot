export const NUM_AXES = 6;

export const MYCOBOT_COMMANDS = {
  HEADER: 0xFE,
  FOOTER: 0xFA,

  POWER_ON: 0x10,
  POWER_OFF: 0x11,
  GET_ANGLES: 0x20,
  SEND_ANGLE: 0x21,
  SET_COLOR: 0x6A,
  IS_SERVO_ENABLE: 0x50,
  SET_BASIC_OUTPUT: 0xA0,
} as const;
