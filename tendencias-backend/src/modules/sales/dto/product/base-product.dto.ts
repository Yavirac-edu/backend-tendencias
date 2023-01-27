import { IsNotEmpty } from "class-validator";
import { IsString } from "class-validator/types/decorator/decorators";
import { isNotEmptyValidationOpntions, IsStringValidationOpntions } from '@shared/validation'
export  class BaseProductDto{

    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsString(IsStringValidationOpntions())
    readonly title:string;

    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsString(IsStringValidationOpntions())
    readonly price:number;

    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsString(IsStringValidationOpntions())
    readonly description:string;

    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsString(IsStringValidationOpntions())
    readonly images:string[];
    
}