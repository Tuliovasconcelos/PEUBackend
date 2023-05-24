import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import Atendimento from '@modules/atendimentos/atendimento/typeorm/entities/Atendimento';
import Procedimento from '@modules/procedimentos/typeorm/entities/Procedimento';

@Entity('AtendimentoProcedimento')
export default class AtendimentoProcedimento {
  @PrimaryGeneratedColumn('increment')
  idAtendimentoProcedimento: number;

  @ManyToOne(() => Atendimento)
  @JoinColumn({ name: 'idAtendimento' })
  atendimento: Atendimento;

  @ManyToOne(() => Procedimento)
  @JoinColumn({ name: 'idProcedimento' })
  procedimento: Procedimento;

  @Column({
    type: 'enum',
    enum: ['ativo', 'inativo'],
    default: 'ativo',
  })
  status: 'ativo' | 'inativo';

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  dataAlteracao: Date;
}
