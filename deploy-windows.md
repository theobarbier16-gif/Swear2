# Déploiement Firebase Functions sur Windows

## 🚀 Méthode automatique (Recommandée)

```cmd
npm run deploy:firebase
```

## 🔧 Méthode manuelle

Si le script automatique ne fonctionne pas :

```cmd
# 1. Installation Firebase CLI (si pas déjà fait)
npm install -g firebase-tools
firebase login

# 2. Configuration du projet
firebase use swear-30c84

# 3. Configuration des variables Stripe
firebase functions:config:set stripe.secret_key="sk_test_..." stripe.webhook_secret="whsec_..."

# 4. Installation et compilation
cd functions
npm install
npm run build
cd ..

# 5. Déploiement
firebase deploy --only functions
```

## 🔑 Informations nécessaires

Vous aurez besoin de :
- **Clé secrète Stripe** : Récupérez-la sur https://dashboard.stripe.com/apikeys
- **Webhook secret** : Créez un webhook sur https://dashboard.stripe.com/webhooks

## 🎯 Configuration du webhook Stripe

Après déploiement, configurez le webhook :
1. URL : `https://us-central1-swear-30c84.cloudfunctions.net/stripeWebhook/webhook`
2. Événements : `checkout.session.completed`, `invoice.payment_succeeded`

## 🔍 Test

Testez l'endpoint : https://us-central1-swear-30c84.cloudfunctions.net/stripeWebhook/test