import {IncomingMessage, ServerResponse} from 'http'
import Database from "@database/fakeDb";

const database = new Database();
const allAvocados = async (req: IncomingMessage, res: ServerResponse) => {
  const me = database.getMe();
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(me))
}
export default allAvocados
