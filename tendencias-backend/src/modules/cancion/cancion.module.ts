import { Global, Module } from "@nestjs/common";
import { cancionProviders } from "./providers/cancion.providers";
// import {DatabaseModule} from "@database";

@Global()
@Module(
    {
        // imports: [DatabaseModule],
        controllers:[],
        providers:[
            ...cancionProviders
        ],
    })

    export class CancionModule{

    }