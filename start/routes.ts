import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database'

Route.get('/posts', async () => {
  return Database.from('answers').select('*')
})
