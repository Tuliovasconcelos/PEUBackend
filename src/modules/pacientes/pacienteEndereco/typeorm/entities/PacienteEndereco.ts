import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import Paciente from '@modules/pacientes/paciente/typeorm/entities/Paciente';

@Entity('PacienteEndereco')
export default class PacienteEndereco {
  @PrimaryGeneratedColumn('increment')
  idPacienteEndereco: number;

  @ManyToOne(() => Paciente, paciente => paciente.idPaciente)
  idPaciente: Paciente;

  @Column()
  endereco: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  cep: string;
}
