import { emit, env } from "process";
import { server } from "./presentation/server";
import {envs} from './config/plugins/env.plugin';
import { LogModel, MongoDatabase } from "./data/mongo";
import { PrismaClient } from "@prisma/client";


(async () => {
    main();
})();



async function main(){

    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME,
    });

    //PostgresDatabase connect
    //const prisma = new PrismaClient();
    // const newLog = await prisma.logModel.create({
    //     data:{
    //         message: 'Server started',
    //         origin: 'app.ts',
    //         level: 'LOW',
    //     }
    // })
    // const logs = await prisma.logModel.findMany();
    // console.log('Logs', logs)




    //MongoDatabase connect
    // const newLog = await LogModel.create({
    //     message: 'Server started',
    //     origin: 'app.ts',
    //     level: 'low',
    // })

    // await newLog.save();
    // console.log('Log created', newLog)

    // const logs = await LogModel.find();
    // console.log('Logs', logs)

    //console.log( envs.MAILER_EMAIL, envs.MAILER_SECRET_KEY)

    server.start();
}