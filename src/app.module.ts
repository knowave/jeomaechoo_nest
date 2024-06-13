import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MysqlModule } from './database/mysql.module';
import { MenuModule } from './menu/menu.module';
import { S3Module } from './s3/s3.module';

@Module({
  imports: [MysqlModule, MenuModule, S3Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
