import { Column, Entity } from 'typeorm';
import { BaseEntity } from 'src/common/base.entity';

@Entity()
export class Menu extends BaseEntity {
  @Column({ comment: 'menu name' })
  name: string;

  @Column('text', { comment: 'menu image' })
  image: string;

  @Column({ comment: 'selected menu count', nullable: true })
  selectedCount?: number;
}
