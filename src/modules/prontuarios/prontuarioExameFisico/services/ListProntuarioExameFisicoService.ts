import { getCustomRepository } from 'typeorm';
import ProntuarioExameFisico from '../typeorm/entities/ProntuarioExameFisico';
import ProntuarioExameFisicoRepository from '../typeorm/repositories/ProntuarioExameFisicoRepository';

export default class ListProntuarioExameFisicoService {
  public async execute(): Promise<ProntuarioExameFisico[]> {
    const prontuarioExameFisicoRepository = getCustomRepository(ProntuarioExameFisicoRepository);

    const prontuariosExameFisico = await prontuarioExameFisicoRepository.find();

    return prontuariosExameFisico;
  }
}
