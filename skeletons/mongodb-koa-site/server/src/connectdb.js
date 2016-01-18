import config from '../../config';
import mongodb from 'mongodb';

let MongoClient = mongodb.MongoClient;
let dbConf = config.db;

let url = `mongodb://${dbConf.hostname}:${dbConf.port}/${dbConf.dbName}`;

let db = null;

let sleep = (time) => new Promise((r) => setTimeout(r, time));

let getDB = async (count = 0) => {
    if(db === null) {
        try {
            db = await MongoClient.connect(url);
        } catch (err) {
            if(count > 10) {
                throw err;
            }
            await sleep(200);
            return getDB(++count);
        }
    }
    return db;
}

export default {
    getDB
};