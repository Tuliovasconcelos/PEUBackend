import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Especialidade')
export default class Especialidade {
  @PrimaryGeneratedColumn('increment')
  idEspecialidade: number;

  @Column()
  nome: string;

  @Column({
    enum: ['A', 'I'],
  })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  dataAlteracao: Date;
}

