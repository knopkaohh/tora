export const BASE_PATH = "/tora";

export function asset(path: string) {
  if (!path || path.startsWith("http") || path.startsWith("data:") || path.startsWith(BASE_PATH)) {
    return path;
  }
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
