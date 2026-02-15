from flask import Flask, request, jsonify, send_file

app = Flask(__name__)

messages = []

@app.route("/")
def home():
    return send_file("index.html")

@app.route("/save", methods=["POST"])
def save_message():
    data = request.json
    messages.append(data["message"])
    return jsonify({"status": "saved"})

@app.route("/messages")
def get_messages():
    return jsonify(messages)

if __name__ == "__main__":
    app.run(debug=True)
