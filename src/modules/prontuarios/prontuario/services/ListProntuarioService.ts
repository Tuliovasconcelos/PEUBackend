import { getCustomRepository } from 'typeorm';
import Prontuario from '../typeorm/entities/Prontuario';
import ProntuarioRepository from '../typeorm/repositories/ProntuarioRepository';

export default class ListProntuarioService {
  public async execute(): Promise<Prontuario[]> {
    const prontuarioRepository = getCustomRepository(ProntuarioRepository);
    const prontuarios = await prontuarioRepository.find();
    return prontuarios;
  }
}
