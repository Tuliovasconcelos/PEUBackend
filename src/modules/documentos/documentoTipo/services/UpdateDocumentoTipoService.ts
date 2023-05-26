import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import DocumentoTipo from '../typeorm/entities/DocumentoTipo';
import DocumentoTipoRepository from '../typeorm/repositories/DocumentoTipoRepository';

interface IRequest {
  idDocumentoTipo: number;
  nome?: string;
  status?: 'A' | 'I';
}

export default class UpdateDocumentoTipoService {
  public async execute({ idDocumentoTipo, nome, status }: IRequest): Promise<DocumentoTipo> {
    const documentoTipoRepository = getCustomRepository(DocumentoTipoRepository);
    const documentoTipo = await documentoTipoRepository.findById(idDocumentoTipo);

    if (!documentoTipo) {
      throw new AppError('DocumentoTipo not found');
    }

    if (nome) {
      documentoTipo.nome = nome;
    }

    if (status) {
      documentoTipo.status = status;
    }

    documentoTipo.dataAlteracao = new Date();

    await documentoTipoRepository.save(documentoTipo);

    return documentoTipo;
  }
}
