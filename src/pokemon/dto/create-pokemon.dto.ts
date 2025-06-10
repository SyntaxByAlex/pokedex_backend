import { IsInt, IsNotEmpty, IsPositive, IsString, MinLength } from "class-validator";

export class CreatePokemonDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    name: string;

    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    no: number;

}
