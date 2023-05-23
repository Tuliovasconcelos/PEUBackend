import { getCustomRepository } from 'typeorm';
import Clinica from '../typeorm/entities/Clinica';
import ClinicaRepository from '../typeorm/repositories/ClinicaRepository';

export default class ListClinicaService {
  public async execute(): Promise<Clinica[]> {
    const clinicaRepository = getCustomRepository(ClinicaRepository);
    const clinicas = await clinicaRepository.find();

    return clinicas;
  }
}
