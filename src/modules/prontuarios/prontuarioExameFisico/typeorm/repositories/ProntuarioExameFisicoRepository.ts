import { EntityRepository, Repository } from 'typeorm';
import ProntuarioExameFisico from '../entities/ProntuarioExameFisico';

@EntityRepository(ProntuarioExameFisico)
export default class ProntuarioExameFisicoRepository extends Repository<ProntuarioExameFisico> {

  public async findById(idExameFisico: number): Promise<ProntuarioExameFisico | null> {
    const ExameFisico = await this.findOne({
      where: {
        idExameFisico: idExameFisico,
      },
    });

    return ExameFisico || null;
  }

  public async findByIdProntuario(idProntuario: number): Promise<ProntuarioExameFisico[]> {
    const ExameFisico = await this.find({
      where: {
        idProntuario: idProntuario,
      },
    });

    return ExameFisico;
  }

}
