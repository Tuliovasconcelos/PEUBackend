import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import ConvenioRepository from '../typeorm/repositories/ConvenioRepository';

interface IRequest {
  idConvenio: number;
}

export default class DeleteConvenioService {
  public async execute({ idConvenio }: IRequest): Promise<void> {
    const convenioRepository = getCustomRepository(ConvenioRepository);
    const convenio = await convenioRepository.findById(idConvenio);

    if (!convenio) {
      throw new AppError('Convenio not found');
    }

    await convenioRepository.remove(convenio);
  }
}
