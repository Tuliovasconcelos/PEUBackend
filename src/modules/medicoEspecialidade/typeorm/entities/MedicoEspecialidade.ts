import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Medico from '@modules/medicos/typeorm/entities/Medico';
import Especialidade from '@modules/especialidades/typeorm/entities/Especialidade';

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

