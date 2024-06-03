# Komatsu

[Live demo](https://guillaumecartoonbase.github.io/Komatsu/)

## Rive Doc

[runtime](https://help.rive.app/runtimes/overview)

## README

Ceci est une démo et WIP, rien n'est définitif.

Le rive est inscrit dans une balise `canvas`, un script .js est utilisé pour le paramétrer et récuperer les différents events qui seront utile pour lancer une action lors d'un clique, hover, ...

### Events

Une fonction est utilisée pour gérer les events

```js
const eventFire = (riveEvent) => {
[...]
};

riveInstance.on(rive.EventType.RiveEvent, eventFire);
```

#### Layer events

Chaques layer envoie un envent avec son nom quand on clique dessus.

```JS
		case "layer 1":
			console.log("LAYER ONE");
			break;
		case "layer 2":
			console.log("LAYER TWO");
			break;
		case "layer 3":
			console.log("LAYER THREE");
			break;
```

#### Cursor events

Utilisé pour changer l'aspect visuel du curseur.

```js
		case "pointerEnter":
			document.body.style.cursor = "pointer";
			break;
		case "pointerExit":
			document.body.style.cursor = "auto";
			break;
```
