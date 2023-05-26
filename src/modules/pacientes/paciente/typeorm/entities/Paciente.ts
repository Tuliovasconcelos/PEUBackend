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
    type: 'enum',
    enum: ['M', 'F', 'O'],
  })
  genero: string;

  @Column({
    type: 'enum',
    enum: ['A', 'I'],
  })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dataAlteracao: Date;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'idUsuario' })
  usuario: Usuario;
}
