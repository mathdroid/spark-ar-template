const Diagnostics = require("Diagnostics");
const Scene = require("Scene");

const directionalLight = Scene.root.find("directionalLight0");

const directionalLightIntensity = directionalLight.intensity;

Diagnostics.log("I am a console message logged from the script");
