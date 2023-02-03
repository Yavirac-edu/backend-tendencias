import { IsNotEmpty } from "class-validator";
import { isPositive, IsString } from "class-validator/types/decorator/decorators";
import { ProductEntity } from "src/modules/sales/entities";
// import { isNotEmptyValidationOpntions, IsStringValidationOpntions,IsPositiveValidationOpntions } from '@shared/validation'
export  class BaseCategorytDto{

    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsString(IsStringValidationOpntions())
    readonly name:string;


    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsString(IsStringValidationOpntions())
    readonly product:ProductEntity[];
    
}

