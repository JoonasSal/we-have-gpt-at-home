from flask import Flask, request, jsonify
from flask_cors import CORS  # Add CORS support
import ollama 

app = Flask(__name__)
CORS(app)  # Enable CORS

# Choose Model to run
MODEL_NAME = "deepseek-r1:8b"  

@app.route('/generate', methods=['POST'])
def generate():
    try:
        data = request.json
        prompt = data.get('prompt', '')
        
        if not prompt:
            return jsonify({'error': 'Prompt is required'}), 400
            
        response = ollama.chat(model=MODEL_NAME, messages=[
            {'role': 'user', 'content': prompt}
        ])
        
        # Extract the actual response content
        message_content = response['message']['content']
        
        return jsonify({
            'success': True,
            'response': message_content
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
