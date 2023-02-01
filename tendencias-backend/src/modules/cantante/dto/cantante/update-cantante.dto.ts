import { IsString, MinLength, MaxLength, IsNotEmpty, IsDate, IsIn, IsOptional } from "class-validator";
import { CancionEntity } from "src/modules/cancion/entities/cancion.entity";
import { BaseCantanteDto } from "./base-cantante.dto";
import { isNotEmptyValidationOpntions, IsStringValidationOpntions,IsPositiveValidationOpntions } from '@shared/validation'


export class CantanteUpdate extends BaseCantanteDto{
    
    @IsString()
    @MinLength(3)
    @MaxLength(100)
    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsString(IsStringValidationOpntions())
    readonly name:string;

    @IsDate()
    @IsOptional()
    readonly fechaNacimiento:Date;

    @IsString()
    @MinLength(3)
    @MaxLength(100)
    @IsOptional()
    @IsString(IsStringValidationOpntions())
    readonly nacionalidad:string;

    @IsNotEmpty()
    @IsString()
    @IsIn([])
    @IsNotEmpty(isNotEmptyValidationOpntions())
    readonly Cancion:CancionEntity[];
}