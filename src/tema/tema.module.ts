import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TemaController } from "./controller/tema.controller";
import { tema } from "./entities/tema.entity";
import { TemaService } from "./service/tema.service";


@Module({
    imports: [TypeOrmModule.forFeature([tema])],
    providers: [TemaService],
    controllers: [TemaController],
    exports: [TypeOrmModule]
})
export class TemaModule{}