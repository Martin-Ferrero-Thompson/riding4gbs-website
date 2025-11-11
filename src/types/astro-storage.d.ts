declare module "astro:storage" {
  export function get<T = unknown>(namespace: string, key: string): Promise<T | undefined>;
  export function set<T = unknown>(namespace: string, key: string, value: T): Promise<void>;
  export function remove(namespace: string, key: string): Promise<void>;
  export function list(namespace?: string): Promise<Record<string, unknown>>;
}
