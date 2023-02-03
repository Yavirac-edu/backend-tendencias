import { IsOptional, IsString } from "class-validator";
import { CancionPaginationDto } from "../pagination/pagination-cancion.dto";

export class CancionFilter extends CancionPaginationDto {

    @IsOptional()
    @IsString(IsStringValidationOpntions())
    readonly name;
}