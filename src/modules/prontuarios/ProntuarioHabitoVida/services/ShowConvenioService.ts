import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Convenio from '../typeorm/entities/Convenio';
import ConvenioRepository from '../typeorm/repositories/ProntuarioQueixaSaudeRepository';

interface IRequest {
  idConvenio: number;
}

export default class ShowConvenioService {
  public async execute({ idConvenio }: IRequest): Promise<Convenio> {
    const convenioRepository = getCustomRepository(ConvenioRepository);
    const convenio = await convenioRepository.findById(idConvenio);

    if (!convenio) {
      throw new AppError('Convenio not found');
    }

    return convenio;
  }
}
