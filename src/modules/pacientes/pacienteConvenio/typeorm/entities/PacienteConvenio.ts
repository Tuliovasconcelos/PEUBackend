import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Paciente from '@modules/pacientes/paciente/typeorm/entities/Paciente';
import Convenio from '@modules/convenios/typeorm/entities/Convenio';

@Entity('PacienteConvenio')
export default class PacienteConvenio {
  @PrimaryGeneratedColumn('increment')
  idPacienteConvenio: number;

  @Column()
  idPaciente: number;

  @Column()
  idConvenio: number;

  @Column({ length: 50 })
  numeroCarteira: string;

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

  @ManyToOne(() => Convenio)
  @JoinColumn({ name: 'idConvenio' })
  convenio: Convenio;
}
