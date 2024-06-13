import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UploadedFile,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  async create(
    @Body() createMenuDto: CreateMenuDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    createMenuDto.image = {
      fileName: file.originalname,
      mimeType: file.mimetype,
      fileContent: file.buffer,
    };
    return await this.menuService.create(createMenuDto);
  }

  @Get()
  async menus() {
    return await this.menuService.menus();
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.menuService.remove(id);
  }
}
