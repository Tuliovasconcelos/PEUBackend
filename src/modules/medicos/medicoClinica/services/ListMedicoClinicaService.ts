import { getCustomRepository } from 'typeorm';
import MedicoClinica from '../typeorm/entities/MedicoClinica';
import MedicoClinicaRepository from '../typeorm/repositories/MedicoClinicaRepository';

export default class ListMedicoClinicaService {
  public async execute(): Promise<MedicoClinica[]> {
    const medicoClinicaRepository = getCustomRepository(MedicoClinicaRepository);
    const medicoClinicas = await medicoClinicaRepository.find();

    return medicoClinicas;
  }
}
