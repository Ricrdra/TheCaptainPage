import me from './me'
import phrases from './phrases'
import skills from './skills'

class Database {
  constructor() {
  }

  getMe() {
    return me
  }

  getSkills() {
    return skills
  }

  getPhrases() {
    return phrases
  }
}


export default Database
