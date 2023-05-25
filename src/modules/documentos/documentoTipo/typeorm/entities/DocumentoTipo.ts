import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('DocumentoTipo')
export default class DocumentoTipo {
  @PrimaryGeneratedColumn()
  idDocumentoTipo: number;

  @Column()
  nome: string;

  @Column({
    type: 'enum',
    enum: ['ativo', 'inativo'],
    default: 'ativo',
  })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  dataAlteracao: Date;
}
