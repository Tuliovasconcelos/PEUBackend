import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Convenio')
class Convenio {
  @PrimaryGeneratedColumn('increment')
  idConvenio: number;

  @Column()
  nome: string;

  @Column({
    type: 'enum',
    enum: ['A', 'I'],
    default: 'A',
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
