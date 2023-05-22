import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import PacienteConvenioRepository from '../typeorm/repositories/PacienteConvenioRepository';

interface IRequest {
  idPacienteConvenio: number;
}

export default class DeletePacienteConvenioService {
  public async execute({ idPacienteConvenio }: IRequest): Promise<void> {
    const pacienteConvenioRepository = getCustomRepository(PacienteConvenioRepository);

    const pacienteConvenio = await pacienteConvenioRepository.findById(idPacienteConvenio);
    if (!pacienteConvenio) {
      throw new AppError('Paciente convenio not found.');
    }

    await pacienteConvenioRepository.remove(pacienteConvenio);
  }
}
