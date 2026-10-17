# Tagesgeld

Was heute noch drin liegt. Eine Seite fürs Handy, im Stil von [GÄPP](https://github.com/AlbrechtBuehler/GAEPP).

Erfasst Einnahmen und Ausgaben und zeigt, wie viel vom Budget bis zum nächsten Lohn heute noch zur Verfügung steht.

- **Tagesbudget** = (Budget + Einnahmen − Ausgaben bis gestern) ÷ Tage von heute bis zum Vortag des nächsten Lohns
- **Heute noch** = Tagesbudget − heute Ausgegebenes
- Die Periode läuft von Lohn zu Lohn; der Lohntag wird von Hand gesetzt, weil er variiert. Fehlt der nächste, wird einen Monat nach dem letzten geschätzt.

## Daten

Nur auf dem Gerät (`localStorage`). In dieses Repo gehört nie eine echte Zahl.

## Dateien

| Datei | Was |
| --- | --- |
| `index.html` | die App, Schrift Jost eingebettet |
| `sw.js` | hält die App für den Start ohne Netz; bei jeder neuen Fassung `FASSUNG` hochzählen |
| `manifest.webmanifest`, `icon-*.png` | Installation auf dem Startbildschirm |
