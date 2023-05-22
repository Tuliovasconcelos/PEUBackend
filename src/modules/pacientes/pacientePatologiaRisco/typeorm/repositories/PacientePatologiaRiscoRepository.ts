import { EntityRepository, In, Repository } from 'typeorm';
import PacientePatologiaRisco from '../entities/PacientePatologiaRisco';

interface IFindPacientePatologiaRiscos {
  idPaciente: number;
  idPatologia: number;
  idRisco: number;
}

@EntityRepository(PacientePatologiaRisco)
export default class PacientePatologiaRiscoRepository extends Repository<PacientePatologiaRisco> {

  public async findByPaciente(pacienteId: number): Promise<PacientePatologiaRisco[]> {
    const pacientePatologiaRiscos = await this.find({
      where: {
        idPaciente: pacienteId,
      },
    });

    return pacientePatologiaRiscos;
  }

  public async findByPatologiaRisco(patologiaId: number, riscoId: number): Promise<PacientePatologiaRisco[]> {
    const pacientePatologiaRiscos = await this.find({
      where: {
        idPatologia: patologiaId,
        idRisco: riscoId,
      },
    });

    return pacientePatologiaRiscos;
  }

  public async findAllByIds(pacientePatologiaRiscos: IFindPacientePatologiaRiscos[]): Promise<PacientePatologiaRisco[]> {
    const { idPaciente, idPatologia, idRisco } = pacientePatologiaRiscos[0];
    const existentPacientePatologiaRiscos = await this.find({
      where: {
        idPaciente,
        idPatologia,
        idRisco,
      },
    });

    return existentPacientePatologiaRiscos;
  }
}
