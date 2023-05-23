import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Convenio')
class Convenio {
  @PrimaryGeneratedColumn('increment')
  idConvenio: number;

  @Column()
  nome: string;

  @Column({
    type: 'enum',
    enum: ['ativo', 'inativo'],
    default: 'ativo',
  })
  status: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  dataAlteracao: Date;
}

export default Convenio;
