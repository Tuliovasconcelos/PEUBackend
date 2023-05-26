import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

import TipoUsuario from './TipoUsuario';

@Entity('Usuario')
export default class Usuario {
  @PrimaryGeneratedColumn('increment')
  idUsuario: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  senha: string;

  @Column({
    enum: ['A', 'I'],
    default: 'A',
  })
  status: string;

  @Column({ nullable: true })
  foto: string;

  @CreateDateColumn({ name: 'dataCriacao' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'dataAlteracao' })
  updatedAt: Date;

  @Column({ name: 'idTipoUsuario' })
  idTipoUsuario: number;

  @ManyToOne(() => TipoUsuario)
  @JoinColumn({ name: 'idTipoUsuario' })
  tipoUsuario: TipoUsuario;

  @Expose({ name: 'avatar_url' })
  getAvatarUrl(): string | null {
    if (!this.foto) {
      return null;
    }
    return `${process.env.APP_API_URL}/files/${this.foto}`;
  }
}
