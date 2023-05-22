import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Risco')
export default class Risco {
  @PrimaryGeneratedColumn('increment')
  idRisco: number;

  @Column()
  descricao: string;

  @Column({
    enum: ['ativo', 'inativo'],
    default: 'ativo'
  })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  dataAlteracao: Date;
}

