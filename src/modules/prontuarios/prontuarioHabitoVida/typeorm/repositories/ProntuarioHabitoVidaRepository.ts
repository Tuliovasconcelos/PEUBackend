import { EntityRepository, Repository } from 'typeorm';
import ProntuarioHabitoVida from '../entities/ProntuarioHabitoVida';

@EntityRepository(ProntuarioHabitoVida)
export default class ProntuarioHabitoVidaRepository extends Repository<ProntuarioHabitoVida> {

  public async findById(idHabitoVida: number): Promise<ProntuarioHabitoVida | null> {
    const HabitoVida = await this.findOne({
      where: {
        idHabitoVida: idHabitoVida,
      },
    });

    return HabitoVida || null;
  }

  public async findByIdProntuario(idProntuario: number): Promise<ProntuarioHabitoVida[]> {
    const HabitoVida = await this.find({
      where: {
        idProntuario: idProntuario,
      },
    });

    return HabitoVida;
  }

}
