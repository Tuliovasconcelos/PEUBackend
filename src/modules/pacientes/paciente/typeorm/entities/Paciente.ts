import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Usuario from '@modules/users/typeorm/entities/Usuario';

@Entity('Paciente')
export default class Paciente {
  @PrimaryGeneratedColumn('increment')
  idPaciente: number;

  @Column({ name: 'idUsuario' })
  idUsuario: number;

  @Column()
  nome: string;

  @Column({ type: 'date' })
  dataNascimento: Date;

  @Column({
    enum: ['masculino', 'feminino', 'outro'],
  })
  genero: string;

  @Column({
    enum: ['ativo', 'inativo'],
  })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dataAlteracao: Date;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'idUsuario' })
  usuario: Usuario;
}

