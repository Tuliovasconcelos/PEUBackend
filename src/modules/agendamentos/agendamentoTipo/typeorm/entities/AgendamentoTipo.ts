import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('AgendamentoTipo')
export default class AgendamentoTipo {
  @PrimaryGeneratedColumn('increment')
  idAgendamentoTipo: number;

  @Column()
  nome: string;

  @Column({ enum: ['A', 'I'], default: 'A' })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  dataAlteracao: Date;
}
