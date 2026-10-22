export type SceneType =
  "web-apps" | "app" | "saas" | "cloud-data" | "whatsapp" | "support";
export function sceneForPath(path: string): SceneType {
  if (path.includes("whatsapp")) return "whatsapp";
  if (path.includes("app-development")) return "app";
  if (path.includes("web-development")) return "web-apps";
  if (path.includes("saas")) return "saas";
  if (path.includes("support")) return "support";
  return "cloud-data";
}
