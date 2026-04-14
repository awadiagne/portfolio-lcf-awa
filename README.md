# <img width="1552" height="126" alt="image" src="https://github.com/user-attachments/assets/97f8bf23-ed39-43b6-964a-ecfe0dc4492b" />


Ce projet implémente le déploiement d’un site web statique en s’appuyant sur une architecture Cloud distribuée et hautement disponible sur AWS.

L’objectif est de démontrer une approche production-ready combinant hébergement, distribution de contenu, gestion DNS et automatisation CI/CD.

## ☁️ Architecture globale

L’architecture repose sur les composants suivants :
	•  Amazon S3 : stockage des fichiers statiques (HTML, CSS, JavaScript, assets)
	•  Amazon CloudFront : CDN pour la distribution globale avec mise en cache
	•  Amazon Route 53 : gestion DNS et routage du domaine personnalisé
	•  AWS Amplify Hosting : déploiement automatisé et pipeline CI/CD
	•  GitHub : gestion du code source et déclenchement des déploiements.


## 🔄 Flux de fonctionnement
	1.  Le code source est versionné sur GitHub
	2.	Un push sur la branche principale déclenche un pipeline CI/CD via Amplify
	3.	Amplify build et déploie automatiquement les fichiers
	4.	Les contenus sont servis via CloudFront (CDN)
	5.	Route 53 redirige le domaine vers la distribution CloudFront
	6.	L’utilisateur accède au site via HTTPS.

## ⚙️ Configuration technique

### 📦 Stockage (S3)
	•	Bucket configuré pour l’hébergement statique
	•	Activation de Static Website Hosting
	•	Configuration des fichiers :
    index.html (root)
	  error.html (fallback)

### 🌍 Distribution (CloudFront)
	•	Origin configuré vers S3
	•	Activation du caching
	•	HTTPS via certificat SSL (ACM)
	•	Default root object : index.html

### 🌐 DNS (Amazon Route 53)
	•	Hosted Zone configurée pour le domaine
	•	Enregistrements :
	•	A (Alias) → CloudFront
	•	www → CloudFront

### 🔐 Sécurité
	•	HTTPS activé via AWS Certificate Manager
	•	Gestion des accès via Bucket Policy ou Origin Access Control (OAC)
	•	Désactivation de l’accès public direct si OAC utilisé

### 🔁 CI/CD (Amplify)
	•	Connexion au repository GitHub
	•	Déploiement automatique à chaque commit
	•	Gestion des branches (ex : main / dev)
	•	Logs de build disponibles
	•	Rollback possible vers une version précédente

### 📈 Performance & Scalabilité
	•	Distribution via CDN global (CloudFront)
	•	Mise en cache des assets statiques
	•	Latence réduite pour les utilisateurs
	•	Architecture serverless (pas de gestion d’infrastructure)
