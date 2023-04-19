import * as mongoose from 'mongoose';

const mongoHost = process.env.MONGO_HOST;
const mongoPort = process.env.MONGO_PORT;
const mongoDatabase = process.env.MONGO_DATABASE;

const mongoUrl = `mongodb://${mongoHost}:${mongoPort}/${mongoDatabase}`;

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> => mongoose.connect(mongoUrl),
  },
];
