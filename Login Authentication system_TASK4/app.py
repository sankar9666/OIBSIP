from flask import Flask, render_template, request, redirect, url_for
from passlib.hash import bcrypt

app = Flask(__name__)


user_database = {}

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        hashed_password = bcrypt.hash(password)

        user_database[username] = hashed_password
        return redirect(url_for('login'))

    return render_template('register.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        hashed_password = bcrypt.hash(password)

        user_database[username] = hashed_password
        return redirect(url_for('login'))

    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        if username in user_database:
          
            hashed_password = user_database[username]

            if bcrypt.verify(password, hashed_password):
                return "<div style='display: flex; justify-content: center; align-items: center; height: 100vh;'><div style='text-align:center; font-size: large;'>Login successful! Welcome, " + username + "!</div></div>"
            else:
                return "<div style='display: flex; justify-content: center; align-items: center; height: 100vh;'><div style='text-align:center; font-size: large;'>Incorrect password. Please try again.</div></div>"
        else:
            return "<div style='display: flex; justify-content: center; align-items: center; height: 100vh;'><div style='text-align:center; font-size: large;'>User not found. Please register first.</div></div>"
    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True)
