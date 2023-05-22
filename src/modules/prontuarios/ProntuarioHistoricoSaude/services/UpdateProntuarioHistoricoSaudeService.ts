import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import ProntuarioHistoricoSaude from '../typeorm/entities/ProntuarioHistoricoSaude';
import ProntuarioHistoricoSaudeRepository from '../typeorm/repositories/ProntuarioHistoricoSaudeRepository';

interface IRequest {
  id: number;
  idProntuario: number;
  dataRegistro: Date;
  descricao: string;
  status: 'ativo' | 'inativo';
}

export default class UpdateProntuarioHistoricoSaudeService {
  public async execute({
    id,
    idProntuario,
    dataRegistro,
    descricao,
    status,
  }: IRequest): Promise<ProntuarioHistoricoSaude> {
    const historicoRepository = getCustomRepository(ProntuarioHistoricoSaudeRepository);

    const historico = await historicoRepository.findById(id);

    if (!historico) {
      throw new AppError('Historico not found.');
    }

    historico.idProntuario = idProntuario;
    historico.dataRegistro = dataRegistro;
    historico.descricao = descricao;
    historico.status = status;
    historico.dataAlteracao = new Date();

    await historicoRepository.save(historico);

    return historico;
  }
}
