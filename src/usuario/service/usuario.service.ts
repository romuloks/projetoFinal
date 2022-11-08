import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ILike, Repository } from "typeorm";
import { Bcrypt } from "../../auth/bcrypt/bcrypt";
import { Usuario } from "../entities/usuario.entity";




@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(Usuario)
        private UsuarioRepository: Repository<Usuario>,
        private bcrypt: Bcrypt
    ) { }
async findByUsuario(usuario: string): Promise<Usuario | undefined> {
    return await this.UsuarioRepository.findOne({
        where: {
            usuario: usuario
        },
        relations:{
            postagem:true
        }
    })
}
async findAll(): Promise<Usuario[]> {
    return await this.UsuarioRepository.find({
        relations: {
            postagem: true
        }
    })
}

async findByNome(nome: string): Promise<Usuario | undefined> {
    return await this.UsuarioRepository.findOne({
        where: {
        name: ILike (`%${nome}%`)
        },
        relations:{
            postagem:true
        }
    })

}

async findById(id: number): Promise<Usuario> {
    let usuario = await this.UsuarioRepository.findOne({
        where: {
            id
        },
        relations: {
            postagem:true
        }
    })

 if(!usuario)
 throw new HttpException('Usuario não encontrado', HttpStatus.NOT_FOUND)
 return usuario
}
async create (usuario: Usuario): Promise<Usuario> {
    let buscarUsuario: Usuario =await this.findByUsuario(usuario.usuario)

    if(!buscarUsuario){
        usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha)
        return await this.UsuarioRepository.save(usuario)
    }
    throw new HttpException('O Usuario ja está cadastrado', HttpStatus.BAD_REQUEST)
}
async update(usuario: Usuario):Promise<Usuario>{
    let updateUsuario: Usuario = await this.findById(usuario.id)
    let buscarUsuario = await this.findByUsuario(usuario.usuario)
   
    if(!updateUsuario)
            throw new HttpException('Usuario não existe', HttpStatus.NOT_FOUND)

        if(buscarUsuario && buscarUsuario.id !== usuario.id)
            throw new HttpException('Usuario Já cadastrado', HttpStatus.BAD_REQUEST)

            usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha)
            return await this.UsuarioRepository.save(usuario)
    }

}

