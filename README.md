# FSG TdoT
Das ist das Projekt zur Schülerführung am Tag der offenen Tür (TdoT) des [Fsg Geldern](https://fsggeldern.de).

## Worum es geht
Die Website ist für die IPads der Gruppenführer bei den Schühlerführungen am jährlichen Tag der offenen Tür gemacht. Die aktuelle Version ist immer live auf [schuelerfuehrung.fsggeldern.de](https://schuelerfuehrung.fsggeldern.de)

# Entwickung
## Lokales Setup
1. Benötige Programme installieren.
    - VS Code
    - NodeJS inkl. NPM
2. Source COde herunterladen
    - Auf github unter `Code` als zip herutnerladen oder mit `git clone TODO`
3. Ordner mit VS Code öffnen
4. Unter Extensions die empfohlenen extensions, insbesondere Svelte, herunteraden.
5. Dpendencies herunterladen
    - Unter dem Reiter `Terminal` ein neues Terminal öffnen.
    - Den command `npm install` ausführen.
6. Dev Server
    - Der dev server erlaubt es lokal, live, die Änderungen anzusehen.
    - Zum starten den Command `npm run dev` ausführen.
    - Im Terminal den Link öffnen. Sieht ählich aus zu `http://localhost:5173`
7. Code Verändern
    - Im Ordner `src` befinden sich die wichtigsten Dateien, die das Aussehen und die Funktion der Seite beschreiben.
    - Von bedeutung sind die in `.svelte` endenen Dateien, die eine Kombination aus HTML, CSS und Typescript bilden.
    - Im Ordner `src/assets` befinden sich die Bilder, Iconn etc.
8. Seite veröffentlichen
    - Der Comamnd `npm run build` generiert aus den Dateien und Assets im neuen order `build`.
    - Die Dateien aus dem `build` können auf eienm einfachen Webserver veröffentlicht werden. Es Handelt sich um reine unveränderliche HTML, CSS; Javascript und Bild Dateien.

### Browser Dev Tools, Hot reloading

## Jährliches Update
Um die Webseite an neue Bedüfnisse anzupassen sind die [Group/Station config](src/script/StationsGroupsConfig.ts) und die Bilder unter `src/assets/map` relevant. Sollte die Anzahl der Ebenen Verändert werden, muss dies in der `src/components/Map.svelte` gemacht werden.
In der Config werden die Gruppenanzahl und die Stationen(Name, Lösungswort, Ort) definiert. Mehr details stehen in den Kommentaren in der Datei.

## Techstack
- Typescript
- [Svelte: Frontendframework](https:/svelte.dev)
- [Vite: Buildsystem](https://vite.dev/)
- Tailwindcss

## Project Structure
- [entry point](src/App.svelte)
- [components](src/components)
- [Group/Station config](src/script/StationsGroupsConfig.ts)
