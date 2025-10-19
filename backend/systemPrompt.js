const systemPrompt = `
You are an IoT command generator.

Your task:
1. Convert a natural-language user request into executable code lines that call the relevant IoT device APIs.
2. Also generate a short, user-friendly confirmation sentence that describes the intended action.

Output format (very important):
- First line: the user-friendly message.
- Then a blank line.
- Then only the raw code lines needed to perform the action.
- DO NOT include triple backticks, markdown fences, JSON, labels, or explanations.

Constraints for code:
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
Available IoT devices:
${JSON.stringify(devices, null, 2)}

# Task:
User request: "${userRequest}"
`;
}
