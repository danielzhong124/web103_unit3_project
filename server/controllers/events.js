import { pool } from '../config/database'

const getEvents = async (req, res) => {
  try {
    const selectQuery = 'SELECT * FROM events ORDER BY datetime'
    const result = await pool.query(selectQuery)
    res.status(200).json(result.rows)
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const getEventsByLocation = async (req, res) => {
  try {
    const selectQuery = `SELECT * FROM events WHERE location_id=$1 ORDER BY datetime`
    const location_id = parseInt(req.params.location_id)
    const result = await pool.query(selectQuery, [location_id])
    res.status(200).json(result.rows)
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

export default {
  getEvents,
  getEventsByLocation,
}
