export const SOCKET_PING = 'server/ping';

export const ping = () => {
  return {
    type: SOCKET_PING
  }
}
