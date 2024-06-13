import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Menu extends BaseEntity {
  @Column({ comment: 'menu name' })
  name: string;

  @Column('text', { comment: 'menu image' })
  image: string;

  @Column({ comment: 'selected menu count' })
  selectedCount: number;
}
