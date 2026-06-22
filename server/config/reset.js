import { pool } from './database.js'
import './dotenv.js'
import { eventsData, locationsData } from '../data/data.js'

const createEventsTable = async () => {
  const createTableQuery = `
        DROP TABLE IF EXISTS events;

        CREATE TABLE IF NOT EXISTS events (
            id serial PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            datetime TIMESTAMP NOT NULL,
            image VARCHAR(255) NOT NULL
        )
    `
  try {
    const res = await pool.query(createTableQuery)
    console.log('✅ events table created sucessfully')
  } catch (error) {
    console.error('❌ error creating events table', error)
  }
}

const createLocationsTable = async () => {
  const createTableQuery = `
        DROP TABLE IF EXISTS locations;

        CREATE TABLE IF NOT EXISTS locations (
            id serial PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            city VARCHAR(100) NOT NULL,
            state VARCHAR(100) NOT NULL,
            zip CHAR(5) NOT NULL
        )
    `
  try {
    const res = await pool.query(createTableQuery)
    console.log('✅ locations table created sucessfully')
  } catch (error) {
    console.error('❌ error creating locations table', error)
  }
}

const seedEventsTable = async () => {
  await createEventsTable()
}

const seedLocationsTable = async () => {
  await createLocationsTable()

  locationsData.forEach((location) => {
    const insertQuery = {
      text: 'INSERT INTO locations (name, address, city, state, zip) VALUES ($1, $2, $3, $4, $5)',
    }

    const values = [location.name, location.address, location.city, location.state, location.zip]

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error('❌ error inserting location', err)
        return
      }

      console.log(`✅ ${location.name} added successfully`)
    })
  })
}
