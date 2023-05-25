import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import Medico from '@modules/medicos/medico/typeorm/entities/Medico';
import Clinica from '@modules/clinicas/typeorm/entities/Clinica';

@Entity('MedicoClinica')
export default class MedicoClinica {
  @PrimaryGeneratedColumn('increment')
  idMedicoClinica: number;

  @ManyToOne(() => Medico, { eager: true })
  @JoinColumn({ name: 'idMedico' })
  medico: Medico;

  @ManyToOne(() => Clinica, { eager: true })
  @JoinColumn({ name: 'idClinica' })
  clinica: Clinica;

  @Column({ enum: ['ativo', 'inativo'], default: 'ativo' })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  dataAlteracao: Date;
}
