import { TypeOrmModule } from "@nestjs/typeorm";
import { Usuario } from "./entities/usuario.entity";
import {Module} from "@nestjs/common"
import { UsuarioController } from "./controller/usuario.controller";
import { UsuarioService } from "./service/usuario.service";
import { Bcrypt } from "../auth/bcrypt/bcrypt";


@Module({
    imports:[TypeOrmModule.forFeature([Usuario])],
    controllers:[UsuarioController],
    providers:[UsuarioService, Bcrypt],
    exports:[UsuarioService]
})
export class UsuarioModule{}