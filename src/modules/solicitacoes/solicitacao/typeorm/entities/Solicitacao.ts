import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import Paciente from '@modules/pacientes/paciente/typeorm/entities/Paciente';
import Medico from '@modules/medicos/medico/typeorm/entities/Medico';
import Clinica from '@modules/clinicas/typeorm/entities/Clinica';

@Entity('Solicitacao')
export default class Solicitacao {
  @PrimaryGeneratedColumn('increment')
  idSolicitacao: number;

  @ManyToOne(() => Paciente, { eager: true })
  @JoinColumn({ name: 'idPaciente' })
  paciente: Paciente;

  @ManyToOne(() => Medico, { eager: true })
  @JoinColumn({ name: 'idMedico' })
  medico: Medico;

  @ManyToOne(() => Clinica, { eager: true })
  @JoinColumn({ name: 'idClinica' })
  clinica: Clinica;

  @Column('date')
  dataSolicitacao: Date;

  @Column({
    enum: ['A', 'I'],
    default: 'A'
  })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  dataAlteracao: Date;
}
