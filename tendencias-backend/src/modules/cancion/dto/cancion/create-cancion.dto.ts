import { IsString, MinLength, MaxLength, IsNotEmpty, IsDate } from "class-validator";
import { BaseCancionDto } from "./base-cancion.dto";
import { isNotEmptyValidationOpntions, IsStringValidationOpntions,IsPositiveValidationOpntions } from '@shared/validation'


export class CancionCreate extends BaseCancionDto{
    
    @IsString()
    @MinLength(3)
    @MaxLength(100)
    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsString(IsStringValidationOpntions())
    readonly name:string;

    @IsDate()
    @IsNotEmpty(isNotEmptyValidationOpntions())
    readonly fechaCreacion: Date;

    @IsString()
    @MinLength(3)
    @MaxLength(100)
    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsString(IsStringValidationOpntions())
    readonly album:string;
}