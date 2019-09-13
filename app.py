from flask import Flask, render_template
app = Flask(__name__)

@app.route('/risk', defaults={'path': ''})
@app.route('/risk/<path:path>')
def index(path):
    return render_template('index.html')
