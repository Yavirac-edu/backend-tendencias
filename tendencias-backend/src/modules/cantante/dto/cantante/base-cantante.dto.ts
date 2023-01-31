import { IsNotEmpty } from "class-validator";
import { isPositive, IsString } from "class-validator/types/decorator/decorators";
// import { isNotEmptyValidationOpntions, IsStringValidationOpntions,IsPositiveValidationOpntions } from '@shared/validation'
export  class BaseCantanteDto{

    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsString(IsStringValidationOpntions())
    readonly name:string;

    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsString(IsStringValidationOpntions())
    // @isPositive(IsPositiveValidationOpntions())
    readonly fechaNacimiento:Date;

    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsString(IsStringValidationOpntions())
    readonly nacionalidad:string;
}

function isNotEmptyValidationOpntions(): import("class-validator").ValidationOptions {
    throw new Error("Function not implemented.");
}


function IsStringValidationOpntions(): import("class-validator").ValidationOptions {
    throw new Error("Function not implemented.");
}


function IsPositiveValidationOpntions(): unknown {
    throw new Error("Function not implemented.");
}
