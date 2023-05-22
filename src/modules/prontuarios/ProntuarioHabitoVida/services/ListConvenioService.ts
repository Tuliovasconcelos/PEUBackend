import { getCustomRepository } from 'typeorm';
import Convenio from '../typeorm/entities/Convenio';
import ConvenioRepository from '../typeorm/repositories/ProntuarioQueixaSaudeRepository';

export default class ListConvenioService {
  public async execute(): Promise<Convenio[]> {
    const convenioRepository = getCustomRepository(ConvenioRepository);
    const convenios = await convenioRepository.find();

    return convenios;
  }
}
