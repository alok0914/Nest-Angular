import { IsNotEmpty, IsString, MaxLength } from "class-validator";
export class CreateNotesDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  name: string;
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  content: string;
}