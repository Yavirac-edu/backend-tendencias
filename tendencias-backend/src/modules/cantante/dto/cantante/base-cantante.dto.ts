import { IsNotEmpty } from "class-validator";
import { IsDate, IsIn, isPositive, IsString, MaxLength, MinLength } from "class-validator/types/decorator/decorators";
import { CancionEntity } from "src/modules/cancion/entities/cancion.entity";
import { isNotEmptyValidationOpntions, IsStringValidationOpntions,IsPositiveValidationOpntions } from '@shared/validation'

export  class BaseCantanteDto{

    @IsString()
    @MinLength(3)
    @MaxLength(100)
    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsString(IsStringValidationOpntions())
    readonly name:string;

    @IsDate()
    @IsNotEmpty(isNotEmptyValidationOpntions())
    readonly fechaNacimiento:Date;

    @IsString()
    @MinLength(3)
    @MaxLength(100)
    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsString(IsStringValidationOpntions())
    readonly nacionalidad:string;

    @IsNotEmpty()
    @IsString()
    @IsIn([])
    @IsNotEmpty(isNotEmptyValidationOpntions())
    readonly Cancion:CancionEntity[];
}


