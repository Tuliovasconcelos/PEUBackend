import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Paciente from '@modules/pacientes/paciente/typeorm/entities/Paciente';

@Entity('Prontuario')
export default class Prontuario {
  @PrimaryGeneratedColumn()
  idProntuario: number;

  @Column()
  idPaciente: number;

  @Column({
    type: 'enum',
    enum: ['ativo', 'inativo'],
    default: 'ativo'
  })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dataAlteracao: Date;

  @ManyToOne(() => Paciente)
  @JoinColumn({ name: 'idPaciente' })
  paciente: Paciente;
}
