import { EntityRepository, Repository } from 'typeorm';
import Programa from '../entities/Programa';

@EntityRepository(Programa)
export default class ProgramaRepository extends Repository<Programa> {
  public async findByDescricao(nome: string): Promise<Programa | null> {
    const programa = await this.findOne({
      where: {
        descricao: nome,
      },
    });

    return programa || null;
  }

  public async findById(id: number): Promise<Programa | null> {
    const programa = await this.findOne({
      where: {
        idPrograma: id,
      },
    });

    return programa || null;
  }
}
