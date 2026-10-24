# Tagesgeld

Was heute noch drin liegt. Eine Seite fürs Handy, im Stil von [GÄPP](https://github.com/AlbrechtBuehler/GAEPP).

Erfasst Einnahmen und Ausgaben und zeigt, wie viel vom Budget bis zum nächsten Lohn heute noch zur Verfügung steht.

- **Tagesbudget** = (Budget + alle Einnahmen der Periode − Ausgaben bis gestern) ÷ Tage von heute bis zum Vortag des nächsten Lohns
- Einnahmen gehören der ganzen Periode: auch eine heute gebuchte erhöht sofort das Budget aller verbleibenden Tage, nicht nur das «Heute noch»
- **Heute noch** = Tagesbudget − heute Ausgegebenes
- Die Periode läuft von Lohn zu Lohn; der Lohntag wird von Hand gesetzt, weil er variiert. Fehlt der nächste, wird einen Monat nach dem letzten geschätzt.

## Daten

Nur auf dem Gerät (`localStorage`). In dieses Repo gehört nie eine echte Zahl.

«Alles zurücksetzen» (unten auf der Seite) löscht nach einer Rückfrage Budget, Lohntage und alle Buchungen; danach ist die App wie frisch installiert.

## Dateien

| Datei | Was |
| --- | --- |
| `index.html` | die App, Schrift Jost eingebettet |
| `sw.js` | hält die App für den Start ohne Netz; bei jeder neuen Fassung `FASSUNG` hochzählen |
| `manifest.webmanifest`, `icon-*.png` | Installation auf dem Startbildschirm |
