# react-mycobot

A React-based WebSerial control package for the `myCobot` robotic arm. This library provides a React context and hooks to connect, disconnect, and control a `myCobot` arm over WebSerial.

## Features

- **WebSerial Integration:** Easily connect and disconnect to myCobot over the browser's WebSerial API.
- **React Context/Hook API:** Manage connection state with React Context.
- **Commands Utility:** Send angles, set LED colors, and retrieve arm states using the provided `Command` class.
- **No UI Included:** This package focuses solely on the control logic. Feel free to build your own UI.

## Installation

```bash
npm install react-mycobot
# or
yarn add react-mycobot
```

## Usage

```jsx
import React from 'react';
import { SerialProvider, useSerial, useMyCobot } from 'react-mycobot';

function MyApp() {
  const { isConnected, connect, disconnect, serialHelper } = useSerial();
  const { command } = useMyCobot();

  const handleConnect = async () => {
    await connect();
  };

  const handleDisconnect = async () => {
    await disconnect();
  };

  const setRedColor = async () => {
    if (isConnected) {
      await command.setColor(serialHelper, 255, 0, 0);
    }
  };

  return (
    <SerialProvider>
      <div>
        <button onClick={handleConnect} disabled={isConnected}>
          Connect
        </button>
        <button onClick={handleDisconnect} disabled={!isConnected}>
          Disconnect
        </button>
        <button onClick={setRedColor} disabled={!isConnected}>
          Set LED Red
        </button>
      </div>
    </SerialProvider>
  );
}

export default MyApp;
```

## API

### SerialProvider

A context provider that maintains the serial connection state.

### useSerial()

A hook returning:

- isConnected: boolean
- connect(): Promise<void>
- disconnect(): Promise<void>
- serialHelper: SerialHelper

### useMyCobot()

A hook returning:

- command: Command

### Command class

Methods to control the myCobot:

- getAngles(serialHelper): Promise<Float32Array>
- sendAngle(serialHelper, jointNumber: number, angle: number, speed: number): Promise<void>
- setColor(serialHelper, r: number, g: number, b: number): Promise<void>
