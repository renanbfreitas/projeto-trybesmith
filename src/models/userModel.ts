import { ResultSetHeader } from 'mysql2';
import { User } from '../interfaces';
import connection from './connection';

async function create(user: User): Promise<User> {
  const { username, vocation, level, password } = user;
  const q = 'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)';
  const values = [username, vocation, level, password];
  const [result] = await connection.execute<ResultSetHeader>(q, values);
  const { insertId: id } = result;
  const newUser: User = { id, username, vocation, level, password };

  return newUser;
}

export default {
  create,
};