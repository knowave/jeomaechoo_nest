import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { MenuRepository } from './menu.repository';
import { Menu } from './entities/menu.entity';
import { v4 as uuid } from 'uuid';
import { S3Service } from 'src/s3/s3.service';
import { INVALID_INPUT_DATA, MENU_NOT_FOUND } from './menu.error';
import { AWS_S3_BUCKET_NAME } from 'src/common/env';

@Injectable()
export class MenuService {
  constructor(
    private readonly menuRepository: MenuRepository,
    private readonly s3Service: S3Service,
  ) {}

  async create(createMenuDto: CreateMenuDto): Promise<boolean> {
    const { name, image } = createMenuDto;
    let uploadImage: string;

    if (!name || !image) throw new BadRequestException(INVALID_INPUT_DATA);

    if (image) {
      const { fileName, mimeType, fileContent } = image;
      const newFileName = `${uuid()}-${fileName}`;

      const upload = await this.s3Service.uploadObject(
        newFileName,
        fileContent,
        mimeType,
      );

      uploadImage = `https://${AWS_S3_BUCKET_NAME}.s3.ap-northeast-2.amazonaws.com/${upload.Key}`;
    }

    await this.menuRepository.save(
      new Menu({ name, image: uploadImage ? uploadImage : null }),
    );
    return true;
  }

  async menus() {
    const menus = await this.menuRepository.getMenus();

    for (let i = menus.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [menus[i], menus[j]] = [menus[j], menus[i]];
    }

    return menus;
  }

  async remove(id: string): Promise<void> {
    const menu = await this.menuRepository.getMenu(id);

    if (!menu) throw new BadRequestException(MENU_NOT_FOUND);

    await this.menuRepository.softRemove(menu);
  }
}
