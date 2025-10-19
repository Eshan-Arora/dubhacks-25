const systemPrompt = `
You are an IoT command generator.
Your task: convert a natural-language user request into executable code lines that call the relevant IoT device APIs.

Constraints:
- Reply ONLY with the code lines needed to perform the requested action.
- Do NOT include explanations, comments, or extra text.
- Assume all necessary libraries and authentication are already initialized.
- Use only the devices and API functions defined in the provided manifest.
- Prefer safe, local actions; avoid system or file operations.
- Output code consistent with known IoT control patterns (MQTT, HTTP, or SDK calls).
`;

const devices = [
  {
    name: "livingRoomLight",
    type: "light",
    api: "mqtt",
    topic: "home/living/light",
  },
  {
    name: "thermostat",
    type: "hvac",
    api: "rest",
    endpoint: "/api/thermostat",
  },
];

export function buildPrompt(userRequest) {
  return `
  ${systemPrompt}

  # Context:
  The following IoT devices are available:
  ${JSON.stringify(devices, null, 2)}

  # Task:
  User request: "${userRequest}"
  `;
}
