import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import Programa from '@modules/programas/programa/typeorm/entities/Programa';
import Clinica from '@modules/clinicas/typeorm/entities/Clinica';

@Entity('ProgramaClinica')
export default class ProgramaClinica {
  @PrimaryGeneratedColumn('increment')
  idProgramaClinica: number;

  @ManyToOne(() => Programa)
  @JoinColumn({ name: 'idPrograma' })
  programa: Programa;

  @ManyToOne(() => Clinica)
  @JoinColumn({ name: 'idClinica' })
  clinica: Clinica;

  @Column({
    type: 'enum',
    enum: ['ativo', 'inativo'],
    default: 'ativo',
  })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  dataAlteracao: Date;
}
