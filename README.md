# Swear - Photos Mode Professionnelles

Application de transformation d'images mode avec IA et gestion d'abonnements Stripe.

## 🚀 Déploiement Firebase Functions

### Option 1: Script automatisé (Recommandé)

```bash
# Installation et connexion Firebase (une seule fois)
npm run setup:firebase

# Déploiement automatique
npm run deploy:firebase
```

### Option 2: Déploiement manuel

```bash
# 1. Installation Firebase CLI
npm install -g firebase-tools
firebase login

# 2. Configuration du projet
firebase use swear-30c84

# 3. Configuration Stripe
firebase functions:config:set \
  stripe.secret_key="sk_test_..." \
  stripe.webhook_secret="whsec_..."

# 4. Déploiement
cd functions
npm install
npm run build
cd ..
firebase deploy --only functions
```

## 🔧 Configuration Stripe

Après le déploiement, configurez le webhook dans Stripe Dashboard :

1. Allez dans **Developers > Webhooks**
2. Ajoutez l'endpoint : `https://us-central1-swear-30c84.cloudfunctions.net/stripeWebhook/webhook`
3. Sélectionnez les événements :
   - `checkout.session.completed`
   - `invoice.payment_succeeded`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`

## 🧪 Test

Testez l'endpoint : https://us-central1-swear-30c84.cloudfunctions.net/stripeWebhook/test

## 📋 Variables d'environnement requises

- `STRIPE_SECRET_KEY` : Votre clé secrète Stripe
- `STRIPE_WEBHOOK_SECRET` : Secret du webhook Stripe

## 🔍 Debugging

```bash
# Voir les logs en temps réel
firebase functions:log --only stripeWebhook

# Tester localement
cd functions
npm run serve
```