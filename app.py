from flask import Flask, render_template
app = Flask(__name__)

@app.route('/idecision', defaults={'path': ''})
@app.route('/idecision/<path:path>')
def index(path):
    return render_template('index.html')
