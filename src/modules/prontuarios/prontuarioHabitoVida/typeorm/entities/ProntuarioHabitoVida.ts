import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Prontuario from '@modules/prontuarios/prontuario/typeorm/entities/Prontuario';

@Entity('ProntuarioHabitoVida')
export default class ProntuarioHabitoVida extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  idHabitoVida: number;

  @Column()
  idProntuario: number;

  @ManyToOne(() => Prontuario)
  @JoinColumn({ name: 'idProntuario' })
  prontuario: Prontuario;

  @Column()
  dataRegistro: Date;

  @Column('text')
  descricao: string;

  @Column({
    type: 'enum',
    enum: ['A', 'I'],
    default: 'A',
  })
  status: string;

  @CreateDateColumn()
  dataCriacao: Date;

  @UpdateDateColumn()
  dataAlteracao: Date;
}
