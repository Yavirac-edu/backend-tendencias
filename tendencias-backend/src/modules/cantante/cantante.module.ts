import { Global, Module } from "@nestjs/common";
import { cantanteProviders } from "./providers/cantante.providers";

// import {DatabaseModule} from "@database";

@Global()
@Module(
    {
        // imports: [DatabaseModule],
        controllers:[],
        providers:[
            ...cantanteProviders
        ],
    })

    export class CantanteModule{

    }