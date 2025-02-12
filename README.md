# README - Lancer MyApp avec Docker

## Prérequis
Avant de démarrer l'application, assurez-vous d'avoir installé :  
- **Docker** : [Télécharger Docker](https://www.docker.com/get-started)  
- **Docker Compose** (inclus avec Docker Desktop)

## Installation et Lancement

### 1. Cloner le projet  
Si le projet est sur GitHub, clonez-le avec :  
```bash
git clone https://github.com/votre-utilisateur/myapp.git
cd myapp
```

### 2. Construire et Démarrer les Conteneurs  
Lancez l'application avec :  
```bash
docker-compose up --build
```
Cela va :  
- Construire l’image de l’application Node.js  
- Démarrer les bases de données MySQL et MongoDB  
- Lancer le serveur sur `http://localhost:3000`  

### 3. Vérification  
Assurez-vous que les services sont bien lancés :  
```bash
docker ps
```
Vous devriez voir les conteneurs `node_app`, `mysql_db` et éventuellement `mongo_container`.

## Arrêter l’Application  
Pour arrêter les conteneurs, utilisez :  
```bash
docker-compose down
```

## Accéder aux Logs  
Si vous souhaitez voir les logs de l’application en direct :  
```bash
docker-compose logs -f
```

