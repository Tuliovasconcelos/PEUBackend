import { getCustomRepository } from 'typeorm';
import DocumentoMedico from '../typeorm/entities/DocumentoMedico';
import DocumentoMedicoRepository from '../typeorm/repositories/DocumentoMedicoRepository';

interface IRequest {
  idAtendimento: number;
  idTipoDocumento: number;
}

export default class CreateDocumentoMedicoService {
  public async execute({ idAtendimento, idTipoDocumento }: IRequest): Promise<DocumentoMedico> {

    const documentoMedicoRepository = getCustomRepository(DocumentoMedicoRepository);
    const documentoMedico = documentoMedicoRepository.create({
      idAtendimento,
      idTipoDocumento,
      status: 'ativo',
      dataAlteracao: new Date(),
    });

    await documentoMedicoRepository.save(documentoMedico);

    return documentoMedico;
  }
}
