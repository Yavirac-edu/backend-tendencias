import { IsString, MinLength, MaxLength, IsDate, IsOptional } from "class-validator";
import { BaseCancionDto } from "./base-cancion.dto";
import { isNotEmptyValidationOpntions, IsStringValidationOpntions,IsPositiveValidationOpntions } from '@shared/validation'

export class CancionUpdate extends BaseCancionDto{
 
    @IsString()
    @MinLength(3)
    @MaxLength(100)
    @IsOptional()
    @IsString(IsStringValidationOpntions())
    readonly name:string;

    @IsDate()
    @IsOptional()
    readonly fechaCreacion: Date;

    @IsString()
    @MinLength(3)
    @MaxLength(100)
    @IsOptional()
    @IsString(IsStringValidationOpntions())
    readonly album:string;
}