import { getCustomRepository } from 'typeorm';
import PacienteEndereco from '../typeorm/entities/PacienteEndereco';
import PacienteEnderecoRepository from '../typeorm/repositories/PacienteEnderecoRepository';
import PacienteRepository from '@modules/pacientes/paciente/typeorm/repositories/PacienteRepository';

interface IRequest {
  idPaciente: number;
  endereco: string;
  cidade: string;
  estado: string;
  cep: string;
}

export default class CreatePacienteEnderecoService {
  public async execute({
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
    const paciente = await pacienteRepository.findById(idPaciente);

    if (!paciente) {
      throw new Error('Paciente não encontrado.');
    }

    const PacienteEndereco = pacienteEnderecoRepository.create([
      {
        idPaciente: paciente,
        endereco,
        cidade,
        estado,
        cep,
      },
    ]);

    const createdPacienteEndereco = await pacienteEnderecoRepository.save(
      PacienteEndereco
    );

    return createdPacienteEndereco[0];
  }
}
