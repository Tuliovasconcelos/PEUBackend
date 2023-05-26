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
  @PrimaryGeneratedColumn('increment')
  idProntuario: number;

  @Column()
  idPaciente: number;

  @Column({
    type: 'enum',
    enum: ['A', 'I'],
    default: 'A'
  })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dataAlteracao: Date;

  @ManyToOne(() => Paciente)
  @JoinColumn({ name: 'idPaciente' })
  paciente: Paciente;
}
