@echo off
echo 🚀 === DEPLOIEMENT FIREBASE FUNCTIONS ===
echo.

REM Vérifier si Firebase CLI est installé
firebase --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Firebase CLI n'est pas installé
    echo Installez-le avec: npm install -g firebase-tools
    pause
    exit /b 1
)

REM Vérifier la connexion Firebase
echo 🔍 Vérification de la connexion Firebase...
firebase projects:list >nul 2>&1
if errorlevel 1 (
    echo ❌ Vous n'êtes pas connecté à Firebase
    echo Connectez-vous avec: firebase login
    pause
    exit /b 1
)

REM Sélectionner le projet
echo 📋 Sélection du projet Firebase...
firebase use swear-30c84

REM Configuration des variables d'environnement Stripe
echo 🔧 Configuration des variables Stripe...
set /p STRIPE_SECRET_KEY="Entrez votre clé secrète Stripe (sk_test_...): "
set /p STRIPE_WEBHOOK_SECRET="Entrez votre webhook secret Stripe (whsec_...): "

REM Configurer les variables
firebase functions:config:set stripe.secret_key="%STRIPE_SECRET_KEY%" stripe.webhook_secret="%STRIPE_WEBHOOK_SECRET%"

echo ✅ Variables configurées

REM Installation des dépendances
echo 📦 Installation des dépendances...
cd functions
npm install

REM Compilation TypeScript
echo 🔨 Compilation TypeScript...
npm run build

REM Retour au dossier racine
cd ..

REM Déploiement
echo 🚀 Déploiement des fonctions...
firebase deploy --only functions

REM Vérification
echo 🔍 Vérification du déploiement...
set FUNCTION_URL=https://us-central1-swear-30c84.cloudfunctions.net/stripeWebhook/test
echo Test de l'endpoint: %FUNCTION_URL%

curl -s "%FUNCTION_URL%" >nul 2>&1
if errorlevel 1 (
    echo ❌ Erreur lors du test de l'endpoint
) else (
    echo ✅ Fonctions déployées avec succès!
    echo 🔗 URL de test: %FUNCTION_URL%
)

echo.
echo 🎉 Déploiement terminé!
echo 📋 Prochaines étapes:
echo 1. Configurez le webhook dans Stripe Dashboard
echo 2. URL webhook: https://us-central1-swear-30c84.cloudfunctions.net/stripeWebhook/webhook
echo 3. Testez les paiements sur votre application

pause