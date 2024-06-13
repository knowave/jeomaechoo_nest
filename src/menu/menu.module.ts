import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { MenuRepository } from './menu.repository';
import { S3Module } from 'src/s3/s3.module';

@Module({
  controllers: [MenuController, S3Module],
  providers: [MenuService, MenuRepository],
})
export class MenuModule {}
