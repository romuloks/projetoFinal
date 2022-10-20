import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { DeleteResult } from "typeorm";
import { tema } from "../entities/tema.entity";
import { TemaService } from "../service/tema.service";

@Controller("/tema")
export class TemaController{
    constructor(private readonly TemaService:TemaService){}
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise <tema[]> {
        return this.TemaService.findAll()
    }
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id:number): Promise<tema>{
        return this.TemaService.findById(id)
    }
    @Get('/descricao/:educaco')
    @HttpCode(HttpStatus.OK)
    findByEducacao(@Param('educacao') educacao:string):Promise <tema[]>{
        return this.TemaService.findByEducacao(educacao)
    }
    @Get('/conteudo/:conteudo')
    @HttpCode(HttpStatus.OK)
    findByConteudo(@Param ('conteudo') conteudo:string): Promise <tema[]>{
        return this.TemaService.findByconteudo(conteudo)
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() tema:tema): Promise <tema> {
      return this.TemaService.create(tema)
    }
    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() tema:tema):Promise<tema>{
      return this.TemaService.update(tema)
    }
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete (@Param('id', ParseIntPipe) id: number):Promise<DeleteResult>{
      return this.TemaService.delete(id)
    }
}
