import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Procedimento')
export default class Procedimento {
  @PrimaryGeneratedColumn()
  idProcedimento: number;

  @Column({ length: 100, nullable: false })
  nome: string;

  @Column(
    {
      enum: ['ativo', 'inativo'],
      default: 'ativo'
    }
  )
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  dataAlteracao: Date;
}
