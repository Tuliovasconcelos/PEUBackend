import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Convenio from '../typeorm/entities/Convenio';
import ConvenioRepository from '../typeorm/repositories/ConvenioRepository';

interface IRequest {
  idConvenio: number;
  nome?: string;
  status?: 'A' | 'I';
}

export default class UpdateConvenioService {
  public async execute({ idConvenio, nome, status }: IRequest): Promise<Convenio> {
    const convenioRepository = getCustomRepository(ConvenioRepository);
    const convenio = await convenioRepository.findById(idConvenio);

    if (!convenio) {
      throw new AppError('Convenio not found');
    }

    if (nome) {
      const convenioWithSameName = await convenioRepository.findByName(nome);
      if (convenioWithSameName && convenioWithSameName.idConvenio !== idConvenio) {
        throw new AppError('There is already a convenio with this name');
      }
      convenio.nome = nome;
    }

    if (status) {
      convenio.status = status;
    }

    convenio.dataAlteracao = new Date();

    await convenioRepository.save(convenio);

    return convenio;
  }
}
