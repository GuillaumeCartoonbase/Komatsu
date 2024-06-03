const riveInstance = new rive.Rive({
	src: "src/komatsu.riv", //get rive file
	canvas: document.getElementById("rive"), //get correct canvas
	autoplay: true,
	stateMachines: "burger", // get correct stateMachine
	automaticallyHandleEvents: true, // Automatically handle RiveHTTPEvents
	onLoad: () => {
		// Prevent a blurry canvas by using the device pixel ratio
		riveInstance.resizeDrawingSurfaceToCanvas();
	},
});

// Resize the drawing surface if the window resizes
window.addEventListener(
	"resize",
	() => {
		riveInstance.resizeDrawingSurfaceToCanvas();
	},
	false
);

// Get Events
const eventFire = (riveEvent) => {
	const eventData = riveEvent.data;
	const eventName = eventData.name;
	const eventProperties = eventData.properties;

	// Event logger
	console.log(
		"",
		"event name:",
		eventName,
		"\n",
		"event properties:",
		eventProperties
	);

	switch (eventName) {
		case "layer 1":
			console.log("LAYER ONE");
			break;
		case "layer 2":
			console.log("LAYER TWO");
			break;
		case "layer 3":
			console.log("LAYER THREE");
			break;

		// Change pointer when hovering action
		case "pointerEnter":
			document.body.style.cursor = "pointer";
			break;
		case "pointerExit":
			document.body.style.cursor = "auto";
			break;

		default:
			console.log("Unhandled event:", eventName, "\n", riveEvent);
			break;
	}
};

riveInstance.on(rive.EventType.RiveEvent, eventFire);
