const cache = new Map()

export const setCache = (key, value, ttl = 3600) => {
    cache.set(key, { value, expire: Date.now() + ttl });
}