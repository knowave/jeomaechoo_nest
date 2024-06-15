import 'dotenv/config';

// Database Environment Variables
export const DATABASE_HOST = process.env.DATABASE_HOST;
export const DATABASE_PORT = +process.env.DATABASE_PORT;
export const DATABASE_USER = process.env.DATABASE_USER;
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
export const DATABASE_NAME = process.env.DATABASE_NAME;

// AWS S3 Environment Variables
export const AWS_S3_BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME;
export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;

// Origin Environment Variables
export const ORIGIN = process.env.ORIGIN;
