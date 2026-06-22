import { pool } from '../config/database'

const getEvents = async (req, res) => {
  try {
    const selectQuery = 'SELECT * FROM events ORDER BY datetime ASC'
    const result = await pool.query(selectQuery)
    res.status(200).json(result.rows)
  } catch (error) {
    res.status(409).json({ error: error.message })
    console.error
  }
}

const getGiftById = async (req, res) => {
  try {
    const selectQuery = `SELECT * FROM events WHERE id=$1`

    const id = parseInt(req.params.id)
    const result = await pool.query(selectQuery, [id])
    res.status(200).json(result.rows[0])
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}
