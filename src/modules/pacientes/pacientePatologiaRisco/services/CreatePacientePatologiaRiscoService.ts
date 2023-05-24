import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import PacientePatologiaRisco from '../typeorm/entities/PacientePatologiaRisco';
import PacientePatologiaRiscoRepository from '../typeorm/repositories/PacientePatologiaRiscoRepository';

interface ICreatePacientePatologiaRisco {
  idPaciente: number;
  idPatologia: number;
  idRisco: number;
}

export default class CreatePacientePatologiaRiscoService {
  public async execute({ idPaciente, idPatologia, idRisco }: ICreatePacientePatologiaRisco): Promise<PacientePatologiaRisco> {
    const pacientePatologiaRiscoRepository = getCustomRepository(PacientePatologiaRiscoRepository);

    const pacientePatologiaRiscoFound = await pacientePatologiaRiscoRepository.findOne({
      where: {
        idPaciente,
        idPatologia,
        idRisco,
      },
    });

    if (pacientePatologiaRiscoFound) {
      throw new AppError('Paciente Patologia Risco has been found');
    }

    const pacientePatologiaRisco = pacientePatologiaRiscoRepository.create({
      idPaciente,
      idPatologia,
      idRisco,
    });

    await pacientePatologiaRiscoRepository.save(pacientePatologiaRisco);

    return pacientePatologiaRisco;
  }
}
