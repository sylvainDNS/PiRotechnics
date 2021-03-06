import { WSLauncherHandler } from '../handler/WSLauncherHandler'

export const launcherSocket = socket => {
  const launcher = socket.of('/launcher')

  launcher.on('connection', client => {
    console.log('Launcher connected !')

    client.on('fire', WSLauncherHandler.fire)
  })
}
