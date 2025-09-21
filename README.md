# 🌐 BlxckDev – Portfolio Fullstack (React + Django)

Un **portfolio moderne et interactif** développé avec **React (Vite)** pour le front-end et **Django + Django REST Framework** pour le back-end.
Il inclut un **formulaire de contact fonctionnel** avec envoi d’email via SMTP, une UI animée et responsive.

---

## 🚀 Démo
*(Ajouter le lien une fois déployé)*
➡️ **Demo Live :** [https://blxckdev.com](https://blxckdev.com)

---

## 📂 Structure du projet

├── backend/ # API et logique serveur (Django)
│ ├── core/ # Projet Django (settings, urls, wsgi)
│ ├── app/ # Application principale (views, urls)
│ ├── .env # Variables d'environnement (SECRET_KEY, SMTP)
│ └── manage.py
│
└── frontend/ # Interface utilisateur (React + Vite)
├── src/ # Composants React (Home, Skills, Projects, Contact)
├── public/ # Assets statiques
└── vite.config.js


---

## ⚡ Fonctionnalités

✅ **Front-end moderne :**
- React + Vite + TailwindCSS
- UI responsive et animée
- Section projets avec 6 cartes
- Formulaire de contact avec feedback via un modal de succès

✅ **Back-end robuste :**
- Django REST Framework
- Envoi d’e-mails via SMTP (Gmail)
- CORS activé pour communication avec le front

✅ **Sécurité :**
- Utilisation de `.env` pour les clés sensibles (`SECRET_KEY`, SMTP login/password)
- Permissions DRF configurées

---

## 🛠️ Installation & Lancement (Développement)

### 1️⃣ Cloner le repo
```bash
git clone https://github.com/Blvck-F/BlxckDev.git

### Setup du backend (Django)
cd backend
python3 -m venv env
source env/bin/activate   # sous Windows: env\Scripts\activate
pip install -r requirements.txt
### Lancement du serveur Django
python manage.py migrate
python manage.py runserver

### Setup du frontend (React.js avec Vite)
cd ../frontend
npm install
npm run dev

### 🧪 Test de l'API (Postman par exemple)
POST /api-contact/contact/
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello from Postman!"
}


📦 Technologies Utilisées

Frontend : React, Vite, TailwindCSS, Axios
Backend : Django, Django REST Framework
Base de données : SQLite (dev) → PostgreSQL/MySQL possible en prod
Email : SMTP (Gmail)
