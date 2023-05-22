import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import Prontuario from '@modules/prontuarios/prontuario/typeorm/entities/Prontuario';

@Entity('ProntuarioQueixaSaude')
export default class ProntuarioQueixaSaude {
  @PrimaryGeneratedColumn('increment')
  idQueixaSaude: number;

  @Column()
  idProntuario: number;

  @Column()
  dataRegistro: Date;

  @Column()
  descricao: string;

  @Column({
    type: 'enum',
    enum: ['ativo', 'inativo'],
    default: 'ativo'
  })
  status: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  dataAlteracao: Date;

  @ManyToOne(() => Prontuario, prontuario => prontuario.idProntuario)
  @JoinColumn({ name: 'idProntuario' })
  prontuario: Prontuario;
}
