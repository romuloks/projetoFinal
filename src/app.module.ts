import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.module';
import { Tema } from './tema/entities/tema.entity';
import { TemaModule } from './tema/tema.module';
import { Usuario } from './usuario/entities/usuario.entity'
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
   // TemaModule,
    //TypeOrmModule.forRoot({
      //type: 'mysql', //Define o programa de Banco de Dados
      //host: 'localhost', //Area
      //port: 3306, //Porta
      //username: 'root',  //User name do programa BD
      //password: 'rootroot', //Senha do programa DB
      //database: 'db_generatedu', //Seleciona o banco de dados
      //entities: [Tema,Postagem,Usuario], //Puxa as tables que serão adicionadas no BD
     // synchronize: true 
   // }),
   TypeOrmModule.forRoot({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    logging: false,
    dropSchema: false,
    ssl: {
      rejectUnauthorized: false,
    },
    synchronize: true,
    autoLoadEntities: true,
  }),
    TemaModule,
    PostagemModule,
    UsuarioModule,
    AuthModule
  ],

  controllers: [AppController],
  providers: [],
})
export class AppModule {}
