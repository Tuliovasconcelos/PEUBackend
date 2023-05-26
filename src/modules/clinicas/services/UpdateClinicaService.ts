import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Clinica from '../typeorm/entities/Clinica';
import ClinicaRepository from '../typeorm/repositories/ClinicaRepository';

interface IRequest {
  idClinica: number;
  nome: string;
  endereco: string;
  telefone: string;
  status: 'A' | 'I';
}

export default class UpdateClinicaService {
  public async execute({ idClinica, nome, endereco, telefone, status }: IRequest): Promise<Clinica> {
    const clinicaRepository = getCustomRepository(ClinicaRepository);
    const clinica = await clinicaRepository.findById(idClinica);

    if (!clinica) {
      throw new AppError('Clinica not found.');
    }

    clinica.nome = nome;
    clinica.endereco = endereco;
    clinica.telefone = telefone;
    clinica.status = status;
    clinica.dataAlteracao = new Date();

    await clinicaRepository.save(clinica);

    return clinica;
  }
}
