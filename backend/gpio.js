import os from "os";
let Gpio;

if (os.platform() === "linux") {
  const onoff = await import("onoff");
  Gpio = onoff.Gpio;
} else {
  // mock version for non‑Pi dev
  Gpio = function MockGpio() {
    return { writeSync: () => {}, unexport: () => {} };
  };
  console.warn("💡 Running on non‑Linux system: GPIO calls are mocked.");
}

// Example GPIO pin for lights
const lights = new Gpio(17, "out");

// Function to turn on the lights in a bouncing manner
export function turnOnLights() {
  let direction = 1;
  let count = 0;

  // Bounce the lights on and off
  const interval = setInterval(() => {
    if (count >= 10) {
      // Stop after 10 bounces
      clearInterval(interval);
      turnOffLights();
    } else {
      lights.writeSync(direction);
      direction = direction === 1 ? 0 : 1; // Toggle the light
      count++;
    }
  }, 500); // Toggle every 500ms
}

// Function to turn off the lights
export function turnOffLights() {
  lights.writeSync(0); // Turn off
}
