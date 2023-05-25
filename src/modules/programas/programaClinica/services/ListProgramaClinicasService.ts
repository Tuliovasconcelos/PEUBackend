import { getCustomRepository } from 'typeorm';
import ProgramaClinica from '../typeorm/entities/ProgramaClinica';
import ProgramaClinicaRepository from '../typeorm/repositories/ProgramaClinicaRepository';

export default class ListProgramaClinicasService {
  public async execute(): Promise<ProgramaClinica[]> {
    const programaClinicaRepository = getCustomRepository(ProgramaClinicaRepository);

    const programaClinicas = await programaClinicaRepository.find();

    return programaClinicas;
  }
}
