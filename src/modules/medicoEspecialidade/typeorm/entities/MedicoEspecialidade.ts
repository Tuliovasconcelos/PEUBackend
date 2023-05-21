import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Medico from './Medico';
import Especialidade from './Especialidade';

@Entity('MedicoEspecialidade')
export default class MedicoEspecialidade {
  @PrimaryGeneratedColumn()
  idMedicoEspecialidade: number;

  @ManyToOne(() => Medico)
  @JoinColumn({ name: 'medico_id' })
  medico: Medico;

  @ManyToOne(() => Especialidade)
  @JoinColumn({ name: 'especialidade_id' })
  especialidade: Especialidade;
}

