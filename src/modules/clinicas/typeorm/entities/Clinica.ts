import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Clinicas')
export default class Clinica {
  @PrimaryGeneratedColumn('increment')
  idClinica: number;

  @Column()
  nome: string;

  @Column()
  endereco: string;

  @Column()
  telefone: string;

  @Column({
    enum: ['A', 'I'],
    default: 'A'
  })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  dataAlteracao: Date;
}
