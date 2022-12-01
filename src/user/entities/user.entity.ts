import { Table, Model, Column } from 'sequelize-typescript';
@Table
export class User extends Model {
  @Column({ unique: true })
  userID: string;

  @Column
  userNombre: string;

  @Column
  createdAt: Date;
}
