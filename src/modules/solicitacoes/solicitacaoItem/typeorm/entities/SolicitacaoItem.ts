import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import Solicitacao from '@modules/solicitacoes/solicitacao/typeorm/entities/Solicitacao';

@Entity('solicitacaoItem')
export default class SolicitacaoItem {
  @PrimaryGeneratedColumn('increment')
  idSolicitacaoItem: number;

  @ManyToOne(() => Solicitacao, { eager: true })
  @JoinColumn({ name: 'idSolicitacao' })
  solicitacao: Solicitacao;

  @Column({ type: 'text' })
  descricao: string;

  @Column({
    enum: ['A', 'I'],
    default: 'A'
  })
  status: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  dataAlteracao: Date;
}
