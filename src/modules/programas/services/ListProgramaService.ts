import { getCustomRepository } from 'typeorm';
import Programa from '../typeorm/entities/Programa';
import ProgramaRepository from '../typeorm/repositories/ProgramaRepository';

export default class ListProgramaService {
  public async execute(): Promise<Programa[]> {
    const programaRepository = getCustomRepository(ProgramaRepository);
    const programas = await programaRepository.find();

    return programas;
  }
}
