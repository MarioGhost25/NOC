import { emit, env } from "process";
import { server } from "./presentation/server";
import {envs} from './config/plugins/env.plugin';


(async () => {
    main();
})();



function main(){

    //console.log( envs.MAILER_EMAIL, envs.MAILER_SECRET_KEY)

    server.start();
}