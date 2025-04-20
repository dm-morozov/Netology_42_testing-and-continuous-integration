export default function getHealthStatus(character) {
  if (!character || typeof character.health !== "number") {
    throw new Error("Invalid character");
  }

  if (character.health > 50) {
    return "healthy";
  } else if (character.health >= 15) {
    return "wounded";
  }
  return "critical";
}
