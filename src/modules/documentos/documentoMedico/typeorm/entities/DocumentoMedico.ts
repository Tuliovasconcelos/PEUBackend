import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import Atendimento from '@modules/atendimentos/atendimento/typeorm/entities/Atendimento';
import DocumentoTipo from '@modules/documentos/documentoTipo/typeorm/entities/DocumentoTipo';

@Entity('DocumentoMedico')
export default class DocumentoMedico {
  @PrimaryGeneratedColumn('increment')
  idDocumentoMedico: number;

  @Column()
  idAtendimento: number;

  @Column()
  idTipoDocumento: number;

  @Column({ enum: ['A', 'I'], default: 'A' })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  dataAlteracao: Date;

  @ManyToOne(() => Atendimento)
  @JoinColumn({ name: 'idAtendimento' })
  atendimento: Atendimento;

  @ManyToOne(() => DocumentoTipo)
  @JoinColumn({ name: 'idTipoDocumento' })
  tipoDocumento: DocumentoTipo;
}
