# EdgeTalk

EdgeTalk is a React Native mobile application that provides a chat interface for interacting with an AI model through a Flask API backend. It offers a simple and user-friendly interface, allowing you to interact with an AI model on the go while maintaining full control over both the LLM model and the prompts you use.

## Project Structure

```
we-have-gpt-at-home/
├── API/
│   └── flask-api.py
└── EdgeTalk/
    ├── components/
    ├── services/
    ├── App.js
    ├── styles.js
    └── .env
```

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/we-have-gpt-at-home.git
cd we-have-gpt-at-home
```

### 2. Setup the API

Install the required dependencies:

```bash
pip install flask flask-cors ollama
```

Install your preferred LLM model, for example:

```bash
ollama pull deepseek-r1:8b
```

### 3. Setup the React Native App

Install the necessary dependencies:

```bash
npm install -g expo-cli
npm install
```

### 4. Configure the Environment

Create a `.env` file in the `EdgeTalk` directory and add the following:

```bash
API_URL='http://your.ip.address:5000/generate'
```

> **Note:** Replace `your.ip.address` with the actual IP address where your Flask API is hosted.

### 5. Start the Flask API

```bash
python API/flask-api.py
```

### 6. Start the React Native Application

```bash
npx expo start
```

### 7. Connect via Mobile Device

- Scan the QR code displayed in the terminal using the **Expo Go** app on your mobile device.
- In the **EdgeTalk** app:
  - Start chatting!

## Troubleshooting

- Ensure your mobile device and development machine are on the same network.
- Verify that the Flask API is running and accessible via the provided IP address.

---

Happy chatting with EdgeTalk! 🚀


