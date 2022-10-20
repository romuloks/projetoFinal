import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { tema } from './tema/entities/tema.entity';
import { TemaModule } from './tema/tema.module';

@Module({
  imports: [
    TemaModule,
    TypeOrmModule.forRoot({
      type: 'mysql', //Define o programa de Banco de Dados
      host: 'localhost', //Area
      port: 3306, //Porta
      username: 'root',  //User name do programa BD
      password: 'rootroot', //Senha do programa DB
      database: 'db_generatedu', //Seleciona o banco de dados
      entities: [tema], //Puxa as tables que serão adicionadas no BD
      synchronize: true 
    }),
    TemaModule
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
