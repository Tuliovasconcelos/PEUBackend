import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import EnderecoPaciente from '../typeorm/entities/EnderecoPaciente';
import EnderecoPacienteRepository from '../typeorm/repositories/EnderecoPacienteRepository';
import PacienteRepository from '@modules/pacientes/paciente/typeorm/repositories/PacienteRepository';

interface IRequest {
  id: number;
  idPaciente: number;
  endereco: string;
  cidade: string;
  estado: string;
  cep: string;
}

export default class UpdateEnderecoPacienteService {
  public async execute({
    id,
    idPaciente,
    endereco,
    cidade,
    estado,
    cep,
  }: IRequest): Promise<EnderecoPaciente> {
    const enderecoPacienteRepository = getCustomRepository(
      EnderecoPacienteRepository
    );
    const pacienteRepository = getCustomRepository(PacienteRepository);

    const enderecoPaciente = await enderecoPacienteRepository.findById(id);

    if (!enderecoPaciente) {
      throw new AppError('Endereço do paciente não encontrado.');
    }

    const paciente = await pacienteRepository.findById(idPaciente);

    if (!paciente) {
      throw new AppError('Paciente não encontrado.');
    }

    enderecoPaciente.idPaciente = paciente;
    enderecoPaciente.endereco = endereco;
    enderecoPaciente.cidade = cidade;
    enderecoPaciente.estado = estado;
    enderecoPaciente.cep = cep;

    await enderecoPacienteRepository.save(enderecoPaciente);

    return enderecoPaciente;
  }
}
