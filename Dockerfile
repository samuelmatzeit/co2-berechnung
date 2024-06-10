# Verwende das offizielle Node.js-Image als Basis
FROM node:latest

# Setze das Arbeitsverzeichnis innerhalb des Containers
WORKDIR /usr/src/app

# Kopiere die Paketkonfigurationen und installiere die Abhängigkeiten
COPY package*.json ./
RUN npm install

# Kopiere den restlichen Quellcode
COPY . .

# Führe den Build der Angular-Anwendung aus
RUN npm run build --prod

# Expose-Port (Optional)
EXPOSE 80

# Startbefehl, um den Webserver zu starten
CMD ["npm", "start"]
