import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import PacienteEndereco from '../typeorm/entities/PacienteEndereco';
import PacienteEnderecoRepository from '../typeorm/repositories/PacienteEnderecoRepository';
import PacienteRepository from '@modules/pacientes/paciente/typeorm/repositories/PacienteRepository';

interface IRequest {
  idEndereco: number;
  idPaciente: number;
  endereco: string;
  cidade: string;
  estado: string;
  cep: string;
}

export default class UpdatePacienteEnderecoService {
  public async execute({
    idEndereco,
    idPaciente,
    endereco,
    cidade,
    estado,
    cep,
  }: IRequest): Promise<PacienteEndereco> {
    const pacienteEnderecoRepository = getCustomRepository(
      PacienteEnderecoRepository
    );
    const pacienteRepository = getCustomRepository(PacienteRepository);

    const PacienteEndereco = await pacienteEnderecoRepository.findById(idEndereco);

    if (!PacienteEndereco) {
      throw new AppError('Endereço do paciente não encontrado.');
    }

    const paciente = await pacienteRepository.findById(idPaciente);

    if (!paciente) {
      throw new AppError('Paciente não encontrado.');
    }

    PacienteEndereco.idPaciente = paciente;
    PacienteEndereco.endereco = endereco;
    PacienteEndereco.cidade = cidade;
    PacienteEndereco.estado = estado;
    PacienteEndereco.cep = cep;

    await pacienteEnderecoRepository.save(PacienteEndereco);

    return PacienteEndereco;
  }
}
