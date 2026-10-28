export const BASE_PATH = "";

export function asset(path: string) {
  if (!path || path.startsWith("http") || path.startsWith("data:") || path.startsWith("/")) {
    return path;
  }
  return `/${path}`;
}
