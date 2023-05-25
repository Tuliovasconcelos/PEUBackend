import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import Paciente from '@modules/pacientes/paciente/typeorm/entities/Paciente';
import Medico from '@modules/medicos/medico/typeorm/entities/Medico';
import Clinica from '@modules/clinicas/typeorm/entities/Clinica';
import AgendamentoTipo from '@modules/agendamentos/agendamentoTipo/typeorm/entities/agendamentoTipo';

@Entity('Agendamento')
export default class Agendamento {
  @PrimaryGeneratedColumn('increment')
  idAgendamento: number;

  @Column()
  idPaciente: number;

  @ManyToOne(() => Paciente)
  @JoinColumn({ name: 'idPaciente' })
  paciente: Paciente;

  @Column()
  idMedico: number;

  @ManyToOne(() => Medico)
  @JoinColumn({ name: 'idMedico' })
  medico: Medico;

  @Column()
  idClinica: number;

  @ManyToOne(() => Clinica)
  @JoinColumn({ name: 'idClinica' })
  clinica: Clinica;

  @Column()
  idAgendamentoTipo: number;

  @ManyToOne(() => AgendamentoTipo)
  @JoinColumn({ name: 'idAgendamentoTipo' })
  agendamentoTipo: AgendamentoTipo;

  @Column()
  dataAgendamento: Date;

  @Column()
  horaAgendamento: string;

  @Column({ enum: ['ativo', 'inativo'] })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  dataAlteracao: Date;
}
