# Keylogger Awareness Demo (For Educational Use Only)

**Disclaimer:** This project is intended strictly for educational purposes and cybersecurity awareness. It demonstrates how keyloggers can be disguised and used to collect user input. Never use this project to target or monitor real users without their explicit and informed consent.

## Overview

This project demonstrates how a keylogger can be embedded in a seemingly harmless `.exe` file (disguised as a game) and how keystrokes can be captured and sent to a Node.js server, where they are displayed through a simple web interface.

The goal is to educate users and developers about the risks of downloading and running unverified software, and to promote better security practices.

## Features

- Windows `.exe` file disguised with a known game name and icon
- Captures keystrokes on the victim machine after execution
- Sends the recorded keystrokes to a Node.js server
- Displays all captured keystrokes on a web interface in real-time

## Technologies Used

- Node.js (backend + web interface)
- Express.js (web framework)
- Socket.io (for real-time updates)
- Python or C++ (used to build the executable keylogger — not included here)

## How It Works

1. A `.exe` file is generated and disguised.
2. Once executed on the target machine (in a controlled environment), it begins capturing keystrokes.
3. Keystrokes are sent to the server and logged.
4. The server displays them in real-time on the web interface.

## Warning

This project should **never** be used outside of a lab environment or without the **explicit and informed consent** of all participants.

**Misuse of this project can be illegal and unethical.**  
Always follow ethical guidelines and local laws when conducting any kind of security testing.

## License

MIT (for educational purposes only)

## Author

Made as part of a cybersecurity awareness module / demonstration project.
