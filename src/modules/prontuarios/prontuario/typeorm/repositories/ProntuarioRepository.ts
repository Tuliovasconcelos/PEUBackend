import { EntityRepository, Repository } from 'typeorm';
import Prontuario from '../entities/Prontuario';

@EntityRepository(Prontuario)
export default class ProntuarioRepository extends Repository<Prontuario> {
  public async findById(idProntuario: number): Promise<Prontuario | null> {
    const prontuario = await this.findOne({ where: { idProntuario: idProntuario } });
    return prontuario || null;
  }

  public async findByPaciente(idPaciente: number): Promise<Prontuario | null> {
    const prontuario = await this.findOne({ where: { idPaciente: idPaciente } });
    return prontuario || null;
  }
}
