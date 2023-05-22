import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import PacienteConvenio from '../typeorm/entities/PacienteConvenio';
import PacienteConvenioRepository from '../typeorm/repositories/PacienteConvenioRepository';

interface IRequest {
  idPacienteConvenio: number;
  numeroCarteira: string;
}

export default class UpdatePacienteConvenioService {
  public async execute({ idPacienteConvenio, numeroCarteira }: IRequest): Promise<PacienteConvenio> {
    const pacienteConvenioRepository = getCustomRepository(PacienteConvenioRepository);

    const pacienteConvenio = await pacienteConvenioRepository.findById(idPacienteConvenio);
    if (!pacienteConvenio) {
      throw new AppError('Paciente convenio not found.');
    }

    const pacienteConvenioWithSameCarteira = await pacienteConvenioRepository.findByNumeroCarteiraExcludingId(
      numeroCarteira,
      idPacienteConvenio
    );
    if (pacienteConvenioWithSameCarteira) {
      throw new AppError('There is already a paciente convenio with this number of carteira');
    }

    pacienteConvenio.numeroCarteira = numeroCarteira;
    pacienteConvenio.dataAlteracao = new Date();

    await pacienteConvenioRepository.save(pacienteConvenio);

    return pacienteConvenio;
  }
}
