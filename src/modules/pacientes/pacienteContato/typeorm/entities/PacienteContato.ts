import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import Paciente from '@modules/pacientes/paciente/typeorm/entities/Paciente';

@Entity('PacienteContato')
export default class PacienteContato {
  @PrimaryGeneratedColumn('increment')
  idPacienteContato: number;

  @ManyToOne(() => Paciente, (paciente: Paciente) => paciente.idPaciente)
  paciente: Paciente;

  @Column({ type: 'enum', enum: ['telefone', 'email', 'O'] })
  tipoContato: 'telefone' | 'email' | 'outro';

  @Column()
  valorContato: string;
}
