import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('AgendamentoTipo')
export default class AgendamentoTipo {
  @PrimaryGeneratedColumn()
  idAgendamentoTipo: number;

  @Column()
  nome: string;

  @Column({ enum: ['ativo', 'inativo'], default: 'ativo' })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  dataAlteracao: Date;
}
