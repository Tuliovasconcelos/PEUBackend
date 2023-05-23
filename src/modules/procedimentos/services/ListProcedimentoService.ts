import { getCustomRepository } from 'typeorm';
import Procedimento from '../typeorm/entities/Procedimento';
import ProcedimentoRepository from '../typeorm/repositories/ProcedimentoRepository';

export default class ListProcedimentoService {
  public async execute(): Promise<Procedimento[]> {
    const procedimentoRepository = getCustomRepository(ProcedimentoRepository);
    const procedimentos = await procedimentoRepository.find();

    return procedimentos;
  }
}
