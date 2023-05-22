import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import PacienteConvenio from '../typeorm/entities/PacienteConvenio';
import PacienteConvenioRepository from '../typeorm/repositories/PacienteConvenioRepository';

interface IRequest {
  idPacienteConvenio: number;
}

export default class ShowPacienteConvenioService {
  public async execute({ idPacienteConvenio }: IRequest): Promise<PacienteConvenio> {
    const pacienteConvenioRepository = getCustomRepository(PacienteConvenioRepository);

    const pacienteConvenio = await pacienteConvenioRepository.findById(idPacienteConvenio);
    if (!pacienteConvenio) {
      throw new AppError('Paciente convenio not found.');
    }

    return pacienteConvenio;
  }
}
