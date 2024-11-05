import app from './app'
import { connect_to_database } from './database'

app.listen(3001,async()=>{
    console.log(`listening on port 3001`)
    await connect_to_database()
})