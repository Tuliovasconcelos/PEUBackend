import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import Usuario from '@modules/users/typeorm/entities/Usuario';
import Especialidade from '@modules/especialidades/typeorm/entities/Especialidade';

@Entity('Medico')
export default class Medico {
  @PrimaryGeneratedColumn('increment')
  idMedico: number;

  @Column()
  idUsuario: number;

  @Column()
  nome: string;

  @Column()
  crm: string;

  @Column({
    type: 'enum',
    enum: ['A', 'I'],
    default: 'A',
  })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dataAlteracao: Date;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'idUsuario' })
  usuario: Usuario;
}
