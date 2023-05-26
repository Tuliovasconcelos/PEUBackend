import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Procedimento')
export default class Procedimento {
  @PrimaryGeneratedColumn('increment')
  idProcedimento: number;

  @Column({ length: 100, nullable: false })
  nome: string;

  @Column(
    {
      enum: ['A', 'I'],
      default: 'A'
    }
  )
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  dataAlteracao: Date;
}
