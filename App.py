from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__, template_folder='frontend/templates', static_folder='frontend/static')

@app.route('/')
def home():
    return render_template('login.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    # Traitement de la connexion ici...
    return render_template('login.html')

@app.route('/register', methods=['GET'])
def register():
    return render_template('registration.html')

@app.route('/register', methods=['POST'])
def register_post():
    # Ici, vous récupérerez les données du formulaire
    username = request.form['username']
    email = request.form['email']
    password = request.form['password']
    # Traitez et enregistrez ces informations dans le backend ici...
    # Après l'enregistrement des données :
    return redirect(url_for('login'))  # Correction faite ici

@app.route('/main')
def main():
    return render_template('main.html')

if __name__ == '__main__':
    app.run(debug=True)
