import {IncomingMessage, ServerResponse} from 'http'

const allAvocados = async (req: IncomingMessage, res: ServerResponse) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify('Hi'))
}
export default allAvocados
