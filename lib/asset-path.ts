const rawBasePath = process.env.PAGES_BASE_PATH || "";

export function assetPath(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${rawBasePath}${normalizedPath}`;
}
