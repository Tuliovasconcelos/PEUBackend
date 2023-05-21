import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Especialidade')
export default class Especialidade {
  @PrimaryGeneratedColumn()
  idEspecialidade: number;

  @Column()
  nome: string;

  @Column({
    enum: ['ativo', 'inativo'],
  })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  dataAlteracao: Date;
}

