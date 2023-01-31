import { Global, Module } from "@nestjs/common";
import { categoryProviders } from "./providers";

// import {DatabaseModule} from "@database";

@Global()
@Module(
    {
        // imports: [DatabaseModule],
        controllers:[],
        providers:[
            ...categoryProviders
        ],
    })

    export class CategoryModule{

    }