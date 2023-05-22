import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import User from './Usuario';

@Entity('userTokens')
export default class UserToken {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  token: string;

  @ManyToOne(() => User, user => user.idUsuario)
  idUsuario: User | number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dataCriacao: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dataAlteracao: Date;
}
