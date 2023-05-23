import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Medico from '@modules/medicos/medico/typeorm/entities/Medico';
import Especialidade from '@modules/especialidades/typeorm/entities/Especialidade';

@Entity('MedicoEspecialidade')
export default class MedicoEspecialidade {
  @PrimaryGeneratedColumn('increment')
  idMedicoEspecialidade: number;

  @ManyToOne(() => Medico)
  @JoinColumn({ name: 'idMedico' })
  medico: Medico;

  @ManyToOne(() => Especialidade)
  @JoinColumn({ name: 'idMedico' })
  especialidade: Especialidade;
}

