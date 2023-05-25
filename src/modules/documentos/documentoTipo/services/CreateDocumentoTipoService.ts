import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import DocumentoTipo from '../typeorm/entities/DocumentoTipo';
import DocumentoTipoRepository from '../typeorm/repositories/DocumentoTipoRepository';

interface IRequest {
  nome: string;
  status: 'ativo' | 'inativo';
}

export default class CreateDocumentoTipoService {
  public async execute({ nome, status }: IRequest): Promise<DocumentoTipo> {
    const documentoTipoRepository = getCustomRepository(DocumentoTipoRepository);
    const documentoTipoExists = await documentoTipoRepository.findByName(nome);

    if (documentoTipoExists) {
      throw new AppError('There is already a DocumentoTipo with this name');
    }

    const documentoTipo = documentoTipoRepository.create({
      nome,
      status,
      dataAlteracao: new Date(),
    });

    await documentoTipoRepository.save(documentoTipo);

    return documentoTipo;
  }
}
