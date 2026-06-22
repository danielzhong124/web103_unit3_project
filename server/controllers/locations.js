import { pool } from '../config/database'

const getLocations = async (req, res) => {
  try {
    const selectQuery = 'SELECT * FROM locations ORDER BY id ASC'
    const result = await pool.query(selectQuery)
    res.status(200).json(result.rows)
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const getLocationsById = async (req, res) => {
  try {
    const selectQuery = 'SELECT * FROM locations WHERE id=$1'
    const id = parseInt(req.params.id)
    const result = await pool.query(selectQuery, [id])
    res.status(200).json(result.rows[0])
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

export default {
  getLocations,
  getLocationsById,
}
