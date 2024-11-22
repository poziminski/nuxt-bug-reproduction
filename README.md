# Reproduction of Nuxt/Nitro bug

Error occurs on dev environment when running in Docker on Macos (Docker Desktop)
Looks like this:

ℹ Vite client warmed up in 3073ms
[nitro] ✔ Nuxt Nitro server built in 531 ms

ERROR  [unhandledRejection] connect ECONNREFUSED 127.0.0.1:38779
at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1555:16)

ERROR  [unhandledRejection] connect ECONNREFUSED 127.0.0.1:38779
at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1555:16)