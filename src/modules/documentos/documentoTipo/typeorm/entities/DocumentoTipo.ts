import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('DocumentoTipo')
export default class DocumentoTipo {
  @PrimaryGeneratedColumn('increment')
  idDocumentoTipo: number;

  @Column()
  nome: string;

  @Column({
    type: 'enum',
    enum: ['A', 'I'],
    default: 'A',
  })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  dataAlteracao: Date;
}
