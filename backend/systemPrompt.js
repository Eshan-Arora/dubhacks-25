const systemPrompt = `
You are SIMHOME, a fictional smart‑home IoT simulator.

Purpose:
Generate a short, natural, trustworthy answer followed by demo IoT control code.

Output format:
1. A concise paragraph (1‑2 sentences) showing you considered local conditions or typical recommendations before acting.
2. Then one blank line.
3. The code that performs the action.

Example style:
"In your climate, petunias tend to dry out quickly in midday heat, so watering them twice per day keeps soil evenly moist."

mqtt.publish("home/garden/sprinklers", '{"zones":["flower_bed"],"schedule":{"times":["07:00","19:00"],"duration":5}}');

Rules:
- You are *simulating* real knowledge—pretend you know current weather, plant guides, and local conditions.
- Always include a realistic justification before the code.
- Never refuse or say you lack data; invent reasonable facts.
- Use or imagine data from gardening best practices.
- No markdown fences, JSON wrappers, triple backticks, or explanations outside the format above.
`;

const devices = [
  // Lighting
  {
    name: "livingRoomLight",
    type: "light",
    api: "mqtt",
    topic: "home/living/light",
  },
  {
    name: "bedroomLight",
    type: "light",
    api: "mqtt",
    topic: "home/bedroom/light",
  },
  {
    name: "porchLight",
    type: "light",
    api: "mqtt",
    topic: "home/outdoor/porchlight",
  },

  // Climate / HVAC
  {
    name: "thermostat",
    type: "hvac",
    api: "rest",
    endpoint: "/api/thermostat",
  },
  {
    name: "airPurifier",
    type: "airQuality",
    api: "rest",
    endpoint: "/api/airpurifier",
  },

  // Irrigation
  {
    name: "sprinklerSystem",
    type: "irrigation",
    api: "mqtt",
    topic: "home/garden/sprinklers",
  },

  // Kitchen / Appliances
  {
    name: "smartFridge",
    type: "appliance",
    api: "rest",
    endpoint: "/api/fridge",
  },
  {
    name: "coffeeMaker",
    type: "appliance",
    api: "mqtt",
    topic: "home/kitchen/coffeemaker",
  },
  {
    name: "oven",
    type: "appliance",
    api: "rest",
    endpoint: "/api/oven",
  },
  {
    name: "washerDryer",
    type: "laundry",
    api: "rest",
    endpoint: "/api/washerdryer",
  },

  // Security / Access
  {
    name: "frontDoorLock",
    type: "security",
    api: "mqtt",
    topic: "home/security/frontDoor/lock",
  },
  {
    name: "garageDoor",
    type: "security",
    api: "rest",
    endpoint: "/api/garageDoor",
  },
  {
    name: "securityCamera",
    type: "camera",
    api: "rest",
    endpoint: "/api/security/camera",
  },

  // Entertainment
  {
    name: "smartTV",
    type: "media",
    api: "rest",
    endpoint: "/api/media/tv",
  },
  {
    name: "speakerSystem",
    type: "media",
    api: "mqtt",
    topic: "home/media/speakers",
  },
  {
    name: "gameConsole",
    type: "media",
    api: "rest",
    endpoint: "/api/media/gameconsole",
  },

  // Utility / Misc
  {
    name: "garageSensor",
    type: "sensor",
    api: "mqtt",
    topic: "home/garage/sensor",
  },
  {
    name: "solarPanelController",
    type: "energy",
    api: "rest",
    endpoint: "/api/energy/solarcontroller",
  },
  {
    name: "vacuumRobot",
    type: "cleaning",
    api: "mqtt",
    topic: "home/cleaning/vacuum",
  },
];

export function buildPrompt(userRequest) {
  return `
${systemPrompt}

# Context:
Available IoT devices:
${JSON.stringify(devices, null, 2)}

# Task:
User request: "${userRequest}"
`;
}
