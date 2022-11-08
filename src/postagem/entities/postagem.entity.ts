import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Entity({ name: "tb_postagem" })
export class Postagem {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty()
    titulo: string;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty()
    conteudo: string;

    @Column({nullable: true})
    @ApiProperty()
    curtida: number

    @Column()
    @ApiProperty()
    data_hora: string;

    @ApiProperty({type:() => Tema})
    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
         
    })
    tema: Tema

    @ApiProperty({type:() => Usuario})
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {

        onDelete: "CASCADE"
    })
    usuario: Usuario



}
