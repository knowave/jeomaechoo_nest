import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MysqlModule } from './database/mysql.module';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [MysqlModule, MenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
