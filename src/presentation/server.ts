import { error } from "console";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { EmailService } from "./email/email.service";
import { SendEmailLogs } from "../domain/use-cases/email/send.email-log";
import { mongo } from "mongoose";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { LogSeverityLevel } from "../domain/entities/log.entity";
import { PostgresLogDatasource } from "../infrastructure/datasources/postgres-log.datasource";


const fsLogRepository = new LogRepositoryImpl(
    new FileSystemDataSource(),
  );
  const mongoLogRepository = new LogRepositoryImpl(
    new MongoLogDatasource(),
  );
  const postgresLogRepository = new LogRepositoryImpl(
    new PostgresLogDatasource(),
  );
  
const emailService = new EmailService();

export class server {
    

    static async start(){

       console.log('Server started...');

    //    new SendEmailLogs(
    //    emailService, 
    //    fileSystemLogRepository,
    //    ).execute(
    //      'mp22005@esfe.agape.edu.sv'
    //    )
    //    emailService.sendEmailWithFileSystemLogs(
    //      'mp22005@esfe.agape.edu.sv'
    //  );

    // const logs = await LogRepository.getLogs(LogSeverityLevel.medium);
    // console.log(logs);

        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'https://google.com';
        //         new CheckService(
        //            [ fsLogRepository, postgresLogRepository, mongoLogRepository ],
        //             () => console.log(`${url} is okay`),
        //             (error) => console.log(error),
        //         ).execute(url);
        //     }
        // );
    }
}