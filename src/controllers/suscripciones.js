
import { connect } from "../database";

export const getSuscripciones = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query('SELECT * FROM suscripciones');
  // console.log(rows);
  res.json(rows)
}

export const getSuscripcion = async (req, res) => {
  // console.log(req.params.id);
  const connection = await connect();
  const [rows] = await connection.query(`SELECT * FROM suscripciones WHERE id = ${req.params.id}`);
  console.log(rows[0]);
  res.json(rows[0])
}

export const postSuscripcion = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(`INSERT INTO suscripciones(lugarDeSuscripcion, nombreUsuario, contrasena) VALUES (?,?,?)`, [
    req.body.lugarDeSuscripcion,
    req.body.nombreUsuario,
    req.body.contrasena
  ]);
  res.sendStatus(204); //indicamos que no nos devuelta ningun dato
  // res.json({
  //   id: results.insertId,
  //   ...req.body
  // })
}

export const putSuscripcion = async (req, res) => {
  const connection = await connect();
  const result = connection.query('UPDATE suscripciones SET ? WHERE id = ?', [
    req.body,
    req.params.id
  ]);
  console.log(result);
  res.sendStatus(204); //indicamos que no nos devuelta ningun dato
}

export const deleteSuscripcion = async (req, res) => {
  const connection = await connect();
  const result = await connection.query('DELETE FROM suscripciones WHERE id = ?', [req.params.id]);
  res.sendStatus(204); //indicamos que no nos devuelta ningun dato
}