@echo off
echo 🔧 Configuration des clés Stripe pour Firebase Functions
echo ======================================================
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

echo.
echo 🔑 Configuration des clés Stripe
echo ================================
echo.
echo ⚠️  IMPORTANT: Ne partagez jamais vos clés API !
echo.

REM Instructions
echo 1. Allez sur https://dashboard.stripe.com/apikeys
echo 2. Copiez votre 'Secret key' (commence par sk_test_ ou sk_live_)
echo.
set /p STRIPE_SECRET_KEY="Entrez votre clé secrète Stripe: "

echo.
echo 3. Pour le webhook secret (optionnel pour l'instant):
echo    - Allez sur https://dashboard.stripe.com/webhooks
echo    - Créez un webhook avec l'URL: https://us-central1-swear-30c84.cloudfunctions.net/api/webhook
echo    - Copiez le 'Signing secret' (commence par whsec_)
echo.
set /p STRIPE_WEBHOOK_SECRET="Entrez votre webhook secret (ou appuyez sur Entrée pour ignorer): "

REM Configuration Firebase
echo.
echo 🚀 Configuration de Firebase Functions...

if "%STRIPE_WEBHOOK_SECRET%"=="" (
    firebase functions:config:set stripe.secret_key="%STRIPE_SECRET_KEY%"
) else (
    firebase functions:config:set stripe.secret_key="%STRIPE_SECRET_KEY%" stripe.webhook_secret="%STRIPE_WEBHOOK_SECRET%"
)

echo ✅ Configuration terminée !
echo.
echo 🚀 Déploiement des fonctions...
firebase deploy --only functions

echo.
echo 🎉 Configuration terminée avec succès !
echo.
echo 📋 Prochaines étapes:
echo 1. Testez l'endpoint: https://us-central1-swear-30c84.cloudfunctions.net/api/health
echo 2. Configurez le webhook Stripe avec l'URL: https://us-central1-swear-30c84.cloudfunctions.net/api/webhook
echo 3. Testez un paiement sur votre application
echo.
pause