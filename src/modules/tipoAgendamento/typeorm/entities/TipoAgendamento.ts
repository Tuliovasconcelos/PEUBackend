import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('TipoAgendamento')
export default class TipoAgendamento {
  @PrimaryGeneratedColumn('increment')
  idTipoAgendamento: number;

  @Column()
  nome: string;

  @Column({
    enum: ['A', 'I'],
    default: 'A',
  })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  dataAlteracao: Date;
}
