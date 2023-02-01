import { IsNotEmpty } from "class-validator";
import { IsDate, IsIn, IsOptional, isPositive, IsString, MaxLength, MinLength } from "class-validator/types/decorator/decorators";
import { isNotEmptyValidationOpntions, IsStringValidationOpntions,IsPositiveValidationOpntions } from '@shared/validation'
export  class BaseCancionDto{


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



