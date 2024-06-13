

# CO2-Berechnung

Dieses Projekt wurde im Rahmen einer Studienarbeit umgesetzt und dient der Berechnung und Verwaltung von CO2-Emissionen für Unternehmen. Es wurde mit Angular erstellt.

## Inhaltsverzeichnis

- [Installation](#installation)
- [Entwicklungsserver](#entwicklungsserver)
- [Entwicklungsserver mit Docker](#entwicklungsserver)
- [Code Scaffolding](#code-scaffolding)
- [Build](#build)
- [Unit Tests](#unit-tests)
- [End-to-End Tests](#end-to-end-tests)
- [Hilfe](#hilfe)
- [Lizenz](#lizenz)

## Installation

Stelle sicher, dass [Node.js](https://nodejs.org/) und [Angular CLI](https://cli.angular.io/) installiert sind.

```bash
git clone https://github.com/samuelmatzeit/co2-berechnung.git
cd co2-berechnung
npm install
```

## Entwicklungsserver

Starte den Entwicklungsserver:

```bash
ng serve
```

Navigiere zu `http://localhost:4200/`. Die Anwendung lädt automatisch neu, wenn du eine der Quelldateien änderst.

## Entwicklungsserver mit Docker

Baue den Dockercontainer:

```bash
docker build --no-cache -t studienarbeit .
```

Starte den Dockercontainer

```bash
docker run -d -p 4200:4200 --name studienarbeit-container studienarbeit
```


Navigiere zu `http://localhost:4200/`.

## Code Scaffolding

Generiere eine neue Komponente:

```bash
ng generate component component-name
```

Du kannst auch `ng generate directive|pipe|service|class|guard|interface|enum|module` verwenden.

## Build

Erstelle das Projekt:

```bash
ng build
```

Die Build-Artefakte werden im Verzeichnis `dist/` gespeichert.

## Unit Tests

Führe Unit-Tests mit Karma aus:

```bash
ng test
```

## End-to-End Tests

Führe End-to-End Tests mit einem Framework deiner Wahl aus:

```bash
ng e2e
```

Um diesen Befehl zu verwenden, musst du zuerst ein Paket hinzufügen, das End-to-End-Testfunktionen implementiert.

## Hilfe

Für weitere Hilfe zum Angular CLI benutze `ng help` oder schaue in die [Angular CLI Dokumentation](https://angular.io/cli).

## Lizenz

Dieses Projekt ist lizenziert unter der MIT-Lizenz.

---

Du kannst diese Vorlage anpassen, um spezifische Informationen oder Anweisungen hinzuzufügen, die für dein Projekt relevant sind. Stelle sicher, dass alle Befehle und Pfade korrekt sind und dass zusätzliche Abschnitte hinzugefügt werden, falls nötig.
