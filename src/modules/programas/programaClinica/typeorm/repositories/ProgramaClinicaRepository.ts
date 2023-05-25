import { EntityRepository, Repository } from 'typeorm';
import ProgramaClinica from '../entities/ProgramaClinica';

@EntityRepository(ProgramaClinica)
export default class ProgramaClinicaRepository extends Repository<ProgramaClinica> {
  public async findByIdProgramaAndIdClinica(IdPrograma: number, IdClinica: number): Promise<ProgramaClinica | null> {
    const programaClinica = await this.findOne({
      where: {
        programa: { idPrograma: IdPrograma },
        clinica: { idClinica: IdClinica },
      },
    });
    return programaClinica || null;
  }

  public async findByIdProgramaClinica(idProgramaClinica: number): Promise<ProgramaClinica | null> {
    const programaClinica = await this.findOne({
      where: {
        idProgramaClinica: idProgramaClinica,
      },
    });
    return programaClinica || null;
  }
}
