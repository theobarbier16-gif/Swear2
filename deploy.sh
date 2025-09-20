#!/bin/bash

# Script de déploiement automatisé Firebase Functions
# Assurez-vous d'avoir Firebase CLI installé et d'être connecté

echo "🚀 === DÉPLOIEMENT FIREBASE FUNCTIONS ==="
echo ""

# Vérifier si Firebase CLI est installé
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI n'est pas installé"
    echo "Installez-le avec: npm install -g firebase-tools"
    exit 1
fi

# Vérifier la connexion Firebase
echo "🔍 Vérification de la connexion Firebase..."
if ! firebase projects:list &> /dev/null; then
    echo "❌ Vous n'êtes pas connecté à Firebase"
    echo "Connectez-vous avec: firebase login"
    exit 1
fi

# Sélectionner le projet
echo "📋 Sélection du projet Firebase..."
firebase use swear-30c84

# Configuration des variables d'environnement Stripe
echo "🔧 Configuration des variables Stripe..."
echo "Entrez votre clé secrète Stripe (sk_test_...):"
read -s STRIPE_SECRET_KEY

echo "Entrez votre webhook secret Stripe (whsec_...):"
read -s STRIPE_WEBHOOK_SECRET

# Configurer les variables
firebase functions:config:set \
  stripe.secret_key="$STRIPE_SECRET_KEY" \
  stripe.webhook_secret="$STRIPE_WEBHOOK_SECRET"

echo "✅ Variables configurées"

# Installation des dépendances
echo "📦 Installation des dépendances..."
cd functions
npm install

# Compilation TypeScript
echo "🔨 Compilation TypeScript..."
npm run build

# Retour au dossier racine
cd ..

# Déploiement
echo "🚀 Déploiement des fonctions..."
firebase deploy --only functions

# Vérification
echo "🔍 Vérification du déploiement..."
FUNCTION_URL="https://us-central1-swear-30c84.cloudfunctions.net/stripeWebhook/test"
echo "Test de l'endpoint: $FUNCTION_URL"

if curl -s "$FUNCTION_URL" > /dev/null; then
    echo "✅ Fonctions déployées avec succès!"
    echo "🔗 URL de test: $FUNCTION_URL"
else
    echo "❌ Erreur lors du test de l'endpoint"
fi

echo ""
echo "🎉 Déploiement terminé!"
echo "📋 Prochaines étapes:"
echo "1. Configurez le webhook dans Stripe Dashboard"
echo "2. URL webhook: https://us-central1-swear-30c84.cloudfunctions.net/stripeWebhook/webhook"
echo "3. Testez les paiements sur votre application"