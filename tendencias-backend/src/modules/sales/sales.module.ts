import { Global, Module } from "@nestjs/common";
import { salesProviders } from "./providers";
// import {DatabaseModule} from "@database";

@Global()
@Module(
    {
        // imports: [DatabaseModule],
        controllers:[],
        providers:[
            ...salesProviders
        ],
    })

    export class SalesModule{

    }