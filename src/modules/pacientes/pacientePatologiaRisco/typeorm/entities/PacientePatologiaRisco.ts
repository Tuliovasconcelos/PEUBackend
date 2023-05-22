import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import Paciente from '@modules/pacientes/paciente/typeorm/entities/Paciente';
import Patologia from '@modules/patologias/typeorm/entities/Patologia';
import Risco from '@modules/riscos/typeorm/entities/Risco';


@Entity('PacientePatologiaRisco')
export default class PacientePatologiaRisco {
  @PrimaryColumn()
  idPaciente: number;

  @PrimaryColumn()
  idPatologia: number;

  @PrimaryColumn()
  idRisco: number;

  @ManyToOne(() => Paciente, paciente => paciente.idPaciente)
  @JoinColumn({ name: 'idPaciente' })
  paciente: Paciente;

  @ManyToOne(() => Patologia, patologia => patologia.idPatologia)
  @JoinColumn({ name: 'idPatologia' })
  patologia: Patologia;

  @ManyToOne(() => Risco, risco => risco.idRisco)
  @JoinColumn({ name: 'idRisco' })
  risco: Risco;
}
