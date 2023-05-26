import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Convenio from '../typeorm/entities/Convenio';
import ConvenioRepository from '../typeorm/repositories/ConvenioRepository';

interface IRequest {
  nome: string;
  status: 'A' | 'I';
}

export default class CreateConvenioService {
  public async execute({ nome, status }: IRequest): Promise<Convenio> {
    const convenioRepository = getCustomRepository(ConvenioRepository);
    const convenioExists = await convenioRepository.findByName(nome);

    if (convenioExists) {
      throw new AppError('There is already a convenio with this name');
    }

    const convenio = convenioRepository.create({
      nome,
      status,
      dataAlteracao: new Date(),
    });

    await convenioRepository.save(convenio);

    return convenio;
  }
}
