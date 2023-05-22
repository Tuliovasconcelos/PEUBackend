import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import Paciente from '@modules/pacientes/paciente/typeorm/entities/Paciente';

@Entity('ContatoPaciente')
export default class ContatoPaciente {
  @PrimaryGeneratedColumn('increment')
  idContato: number;

  @ManyToOne(() => Paciente, (paciente: Paciente) => paciente.idPaciente)
  paciente: Paciente;

  @Column({ type: 'enum', enum: ['telefone', 'email', 'outro'] })
  tipoContato: 'telefone' | 'email' | 'outro';

  @Column()
  valorContato: string;
}
