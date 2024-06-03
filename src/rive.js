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
