export const connectHandler = (e) => {
  addGamePad(e.gamepad)
}

export const disconnectHandler = (e) => {
  removeGamePad(e.gamepad)
}
