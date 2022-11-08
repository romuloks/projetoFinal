import { Controller, Get, Post, Put, Delete, HttpCode, HttpStatus, Param, Body, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { DeleteResult } from "typeorm";
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';
import { Postagem } from '../entities/postagem.entity';
import { PostagemService } from '../service/postagem.service';

@ApiTags('Postagem')
@UseGuards(JwtAuthGuard)
@Controller('/postagem')
@ApiBearerAuth()
export class PostagemController {
    constructor(private readonly postagemService: PostagemService) {}

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number ): Promise<Postagem> {
        return this.postagemService.findById(id)
    }

    @Get('/titulo/:titulo')
    @HttpCode(HttpStatus.OK)
    findByTitulo(@Param('titulo') titulo: string): Promise<Postagem[]> {
        return this.postagemService.findByTitulo(titulo)
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Postagem[]> {
        return this.postagemService.findAll()
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.create(postagem)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.update(postagem)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
     delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
        return this.postagemService.delete(id)
    }

} 