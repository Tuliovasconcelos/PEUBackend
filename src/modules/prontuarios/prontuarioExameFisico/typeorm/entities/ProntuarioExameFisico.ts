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

@Entity('ProntuarioExameFisico')
export default class ProntuarioExameFisico extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  idExameFisico: number;

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
    enum: ['ativo', 'inativo'],
    default: 'ativo',
  })
  status: string;

  @CreateDateColumn()
  dataCriacao: Date;

  @UpdateDateColumn()
  dataAlteracao: Date;
}
