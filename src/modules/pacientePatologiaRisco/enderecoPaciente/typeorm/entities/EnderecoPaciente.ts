import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import Paciente from '@modules/pacientes/paciente/typeorm/entities/Paciente';

@Entity('EnderecoPaciente')
export default class EnderecoPaciente {
  @PrimaryGeneratedColumn('increment')
  idEndereco: number;

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
