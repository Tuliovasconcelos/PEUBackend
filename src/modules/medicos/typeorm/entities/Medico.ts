import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import  Usuario  from '../../../users/typeorm/entities/Usuario';
import  Especialidade  from '../../../especialidades/typeorm/entities/Especialidade';

@Entity('Medico')
export default class Medico {
  @PrimaryGeneratedColumn()
  idMedico: number;

  @Column()
  idUsuario: number;

  @Column()
  nome: string;

  @Column()
  crm: string;

  @Column({
    type: 'enum',
    enum: ['ativo', 'inativo'],
    default: 'ativo',
  })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dataAlteracao: Date;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'idUsuario' })
  usuario: Usuario;

  @ManyToOne(() => Especialidade)
  @JoinColumn({ name: 'especialidade_id' })
  especialidade: Especialidade;
}
