import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Programa')
export default class Programa {
  @PrimaryGeneratedColumn('increment')
  idPrograma: number;

  @Column()
  descricao: string;

  @Column({
    type: 'enum',
    enum: ['A', 'I'],
    default: 'A',
  })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  dataAlteracao: Date;
}
