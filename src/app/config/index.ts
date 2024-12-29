import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  default_password: process.env.DEFAULT_PASSWORD,
  token: process.env.JWT_ACCESS_TOKEN,
  token_time: process.env.JWT_ACCESS_EXPIRES,
  node_env: process.env.NODE_ENV,
};
