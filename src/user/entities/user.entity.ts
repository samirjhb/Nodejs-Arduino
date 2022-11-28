import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'User' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  userID: string;

  @Column()
  userNombre: string;

  @Column({
    type: 'timestamp',
    default: () => {
      'CURRENT_TIMESTAMP';
    },
  })
  createdAt: Date;
}
