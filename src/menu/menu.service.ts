import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { MenuRepository } from './menu.repository';
import { Menu } from './entities/menu.entity';

@Injectable()
export class MenuService {
  constructor(private readonly menuRepository: MenuRepository) {}

  async create(createMenuDto: CreateMenuDto): Promise<boolean> {
    const { name, image } = createMenuDto;

    if (!name || !image) throw new BadRequestException('Invalid input data');

    await this.menuRepository.save(new Menu({ name, image }));
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

    if (!menu) throw new BadRequestException('Menu not found');

    await this.menuRepository.softRemove(menu);
  }
}
