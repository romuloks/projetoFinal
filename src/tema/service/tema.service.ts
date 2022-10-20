import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { tema } from "../entities/tema.entity";


@Injectable()
export class TemaService {


    constructor (
        @InjectRepository(tema)
        private TemaRepsitory: Repository<tema>
    ){}
async findAll(): Promise<tema[]> {
    return await this.TemaRepsitory.find()
}
async findById(id: number): Promise<tema> {
    let tema = await this.TemaRepsitory.findOne({
        where: {
            id
        }
    })
    if (!tema)
    throw new HttpException('Tema não existe',HttpStatus.NOT_FOUND)
    return tema
}

async findByEducacao(educacao: string): Promise<tema[]>{
    return await this.TemaRepsitory.find({
        where: {
            educacao: ILike (`%${educacao}%`)
        }
    })
}
async findByconteudo(conteudo: string): Promise<tema[]>{
    return await this.TemaRepsitory.find({
        where: {
            educacao: ILike (`%${conteudo}%`)
        }
    })
}
async  create (tema: tema):Promise<tema> {
    return await this.TemaRepsitory.save(tema)
}
async update (tema: tema): Promise<tema> {
    let buscarTema = await this.findById(tema.id)

if (!buscarTema || !tema.id) 
throw new HttpException ('Tema não existe', HttpStatus.NOT_FOUND)
return await this.TemaRepsitory.save(tema)
}
    
async delete (id:number): Promise <DeleteResult> {
    let buscarTema = await this.findById(id)

    if(buscarTema)
    throw new HttpException ('Tema não encontrado', HttpStatus.NOT_FOUND)
    
    return await this.TemaRepsitory.delete(id)
}
}