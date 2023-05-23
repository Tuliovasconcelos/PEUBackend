import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Clinica from '../typeorm/entities/Clinica';
import ClinicaRepository from '../typeorm/repositories/ClinicaRepository';

interface IRequest {
  nome: string;
  endereco: string;
  telefone: string;
  status: 'ativo' | 'inativo';
}

export default class CreateClinicaService {
  public async execute({ nome, endereco, telefone, status }: IRequest): Promise<Clinica> {
    const clinicaRepository = getCustomRepository(ClinicaRepository);
    const clinicaExists = await clinicaRepository.findByName(nome);

    if (clinicaExists) {
      throw new AppError('There is already a clinica with this name');
    }

    const clinica = clinicaRepository.create({
      nome,
      endereco,
      telefone,
      status,
      dataAlteracao: new Date(),
    });

    await clinicaRepository.save(clinica);

    return clinica;
  }
}
