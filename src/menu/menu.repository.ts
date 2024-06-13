import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Menu } from './entities/menu.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MenuRepository {
  constructor(
    @InjectRepository(Menu) private readonly repository: Repository<Menu>,
  ) {}

  async save(menu: Menu): Promise<Menu> {
    return this.repository.save(menu);
  }

  async getMenus(): Promise<Menu[]> {
    return this.repository.find();
  }

  async softRemove(menu: Menu): Promise<Menu> {
    return this.repository.softRemove(menu);
  }

  async getMenu(id: string): Promise<Menu> {
    return this.repository.findOne({ where: { id } });
  }
}
