import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import PacientePatologiaRisco from '../typeorm/entities/PacientePatologiaRisco';
import PacientePatologiaRiscoRepository from '../typeorm/repositories/PacientePatologiaRiscoRepository';

interface IRequest {
  idPaciente: number;
  idPatologia: number;
  idRisco: number;
}

export default class ShowPacientePatologiaRiscoService {
  public async execute({ idPaciente, idPatologia, idRisco }: IRequest): Promise<PacientePatologiaRisco | null> {
    const pacientePatologiaRiscoRepository = getCustomRepository(PacientePatologiaRiscoRepository);

    const pacientePatologiaRisco = await pacientePatologiaRiscoRepository.findOne({
      where: {
        idPaciente,
        idPatologia,
        idRisco,
      },
    });

    if (!pacientePatologiaRisco) {
      throw new AppError('Paciente Patologia Risco not found');
    }

    return pacientePatologiaRisco || null;
  }
}
