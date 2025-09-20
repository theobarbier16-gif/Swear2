#!/bin/bash

echo "🔧 Configuration des clés Stripe pour Firebase Functions"
echo "======================================================"
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

echo ""
echo "🔑 Configuration des clés Stripe"
echo "================================"
echo ""
echo "⚠️  IMPORTANT: Ne partagez jamais vos clés API !"
echo ""

# Demander la clé secrète Stripe
echo "1. Allez sur https://dashboard.stripe.com/apikeys"
echo "2. Copiez votre 'Secret key' (commence par sk_test_ ou sk_live_)"
echo ""
read -s -p "Entrez votre clé secrète Stripe: " STRIPE_SECRET_KEY
echo ""

# Demander le webhook secret (optionnel pour l'instant)
echo ""
echo "3. Pour le webhook secret (optionnel pour l'instant):"
echo "   - Allez sur https://dashboard.stripe.com/webhooks"
echo "   - Créez un webhook avec l'URL: https://us-central1-swear-30c84.cloudfunctions.net/api/webhook"
echo "   - Copiez le 'Signing secret' (commence par whsec_)"
echo ""
read -s -p "Entrez votre webhook secret (ou appuyez sur Entrée pour ignorer): " STRIPE_WEBHOOK_SECRET
echo ""

# Validation basique
if [[ ! $STRIPE_SECRET_KEY =~ ^sk_(test|live)_ ]]; then
    echo "❌ Erreur: La clé secrète doit commencer par 'sk_test_' ou 'sk_live_'"
    exit 1
fi

# Configuration Firebase
echo ""
echo "🚀 Configuration de Firebase Functions..."

if [ -n "$STRIPE_WEBHOOK_SECRET" ]; then
    firebase functions:config:set \
        stripe.secret_key="$STRIPE_SECRET_KEY" \
        stripe.webhook_secret="$STRIPE_WEBHOOK_SECRET"
else
    firebase functions:config:set \
        stripe.secret_key="$STRIPE_SECRET_KEY"
fi

echo "✅ Configuration terminée !"
echo ""
echo "🚀 Déploiement des fonctions..."
firebase deploy --only functions

echo ""
echo "🎉 Configuration terminée avec succès !"
echo ""
echo "📋 Prochaines étapes:"
echo "1. Testez l'endpoint: https://us-central1-swear-30c84.cloudfunctions.net/api/health"
echo "2. Configurez le webhook Stripe avec l'URL: https://us-central1-swear-30c84.cloudfunctions.net/api/webhook"
echo "3. Testez un paiement sur votre application"
echo ""