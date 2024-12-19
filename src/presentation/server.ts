import { error } from "console";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { EmailService } from "./email/email.service";
import { SendEmailLogs } from "../domain/use-cases/email/send.email-log";


const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDataSource(),
  );
  
const emailService = new EmailService();

export class server {
    

    static start(){

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

        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'https://google.com';
        //         new CheckService(
        //             fileSystemLogRepository,
        //             () => console.log(`${url} is okay`),
        //             (error) => console.log(error),
        //         ).execute(url);
        //     }
        // );
    }
}