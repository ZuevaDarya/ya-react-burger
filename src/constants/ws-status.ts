export enum WSStatus {
  Connect = "connecting",
  Disconnect = "disconnecting",
  OnConnected = "connected",
  OnDisconnected = "disconnected",
  OnError = "connection-error",
  OnMessageRecived = "message-recived",
  SendMessage = "send-message",
}
