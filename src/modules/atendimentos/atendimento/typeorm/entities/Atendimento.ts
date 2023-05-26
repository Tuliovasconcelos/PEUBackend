import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import Paciente from '@modules/pacientes/paciente/typeorm/entities/Paciente';
import Medico from '@modules/medicos/medico/typeorm/entities/Medico';
import Prontuario from '@modules/prontuarios/prontuario/typeorm/entities/Prontuario';
import Clinica from '@modules/clinicas/typeorm/entities/Clinica';
import TipoAgendamento from '@modules/tipoAgendamento/typeorm/entities/TipoAgendamento';
import Programa from '@modules/programas/programa/typeorm/entities/Programa';
@Entity('Atendimento')
export default class Atendimento {
  @PrimaryGeneratedColumn('increment')
  idAtendimento: number;

  @ManyToOne(() => Paciente)
  @JoinColumn({ name: 'idPaciente' })
  paciente: Paciente;

  @ManyToOne(() => Medico)
  @JoinColumn({ name: 'idMedico' })
  medico: Medico;

  @ManyToOne(() => Prontuario)
  @JoinColumn({ name: 'idProntuario' })
  prontuario: Prontuario;

  @ManyToOne(() => Clinica)
  @JoinColumn({ name: 'idClinica' })
  clinica: Clinica;

  @ManyToOne(() => TipoAgendamento)
  @JoinColumn({ name: 'idTipoAgendamento' })
  tipoAgendamento: TipoAgendamento;

  @ManyToOne(() => Programa)
  @JoinColumn({ name: 'idPrograma' })
  programa: Programa;

  @Column({ type: 'date' })
  dataAtendimento: Date;

  @Column({ type: 'time' })
  horaAtendimento: string;

  @Column({ type: 'text' })
  conclusao: string;

  @Column({
    enum: ['ativo', 'inativo'],
    default: 'ativo',
  })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  dataAlteracao: Date;
}
