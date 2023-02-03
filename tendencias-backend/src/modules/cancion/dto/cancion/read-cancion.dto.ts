import { BaseCancionDto } from "./base-cancion.dto";

@Exclude()
export class CancionRead extends BaseCancionDto{
    
    @Expose()
    readonly name;

    @Expose()
    readonly fechaCreacion;


}