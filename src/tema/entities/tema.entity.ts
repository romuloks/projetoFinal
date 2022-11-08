
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn,} from "typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";

@Entity({name: "tb_tema"})
export class Tema{
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number
    
    @IsNotEmpty()
    @MaxLength(255)
    @Column({length: 255, nullable:false})
    @ApiProperty()
    educacao: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({length: 255, nullable:false})
    @ApiProperty()
    serie: string

    @ApiProperty({type:() => Postagem})
    @OneToMany(() => Postagem, (postagem) => postagem.tema)
    postagem:Postagem[]


}