//✅......REDIS CONECTION..........🟢

const redis = require('redis');
const { promisify } = require('util');
require('dotenv').config();

const redisClient = redis.createClient(
    process.env.REDIS_PORT,
    process.env.REDIS_URI,
    {
        no_ready_check: true
    }
);

redisClient.auth(process.env.REDIS_PASSWORD, (error) => {
    if (error) throw error;
});

redisClient.on('connect', async () => {
    console.log("Radis is connected !");
});

const SET_ASYNC = promisify(redisClient.SET).bind(redisClient);
const GET_ASYNC = promisify(redisClient.GET).bind(redisClient);
//const MSET_ASYNC = promisify(redisClient.MSET).bind(redisClient);


//............EXPORTING ..........⤴⤴⤴⤴
module.exports = {
    SET_ASYNC,
    GET_ASYNC
}