import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Prontuario from '@modules/prontuarios/prontuario/typeorm/entities/Prontuario';

@Entity('ProntuarioHistoricoSaude')
export default class ProntuarioHistoricoSaude {
  @PrimaryGeneratedColumn('increment')
  idProntuarioHistoricoSaude: number;

  @Column({ name: 'idProntuario' })
  idProntuario: number;

  @Column({ type: 'date' })
  dataRegistro: Date;

  @Column({ type: 'text' })
  descricao: string;

  @Column({
    type: 'enum',
    enum: ['A', 'I'],
    default: 'A'
  })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dataAlteracao: Date;

  @ManyToOne(() => Prontuario, prontuario => prontuario.idProntuario)
  @JoinColumn({ name: 'idProntuario' })
  prontuario: Prontuario;
}
