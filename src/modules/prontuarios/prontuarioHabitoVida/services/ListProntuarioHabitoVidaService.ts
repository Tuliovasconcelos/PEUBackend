import { getCustomRepository } from 'typeorm';
import ProntuarioHabitoVida from '../typeorm/entities/ProntuarioHabitoVida';
import ProntuarioHabitoVidaRepository from '../typeorm/repositories/ProntuarioHabitoVidaRepository';

export default class ListProntuarioHabitoVidaService {
  public async execute(): Promise<ProntuarioHabitoVida[]> {
    const prontuarioHabitoVidaRepository = getCustomRepository(ProntuarioHabitoVidaRepository);

    const prontuariosHabitoVida = await prontuarioHabitoVidaRepository.find();

    return prontuariosHabitoVida;
  }
}
