import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Patologia')
export default class Patologia {
  @PrimaryGeneratedColumn('increment')
  idPatologia: number;

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

