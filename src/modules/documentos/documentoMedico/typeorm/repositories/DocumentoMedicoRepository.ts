import { EntityRepository, Repository } from 'typeorm';
import DocumentoMedico from '../entities/DocumentoMedico';

@EntityRepository(DocumentoMedico)
export default class DocumentoMedicoRepository extends Repository<DocumentoMedico> {
  public async findById(id: number): Promise<DocumentoMedico | null> {
    const documentoMedico = await this.findOne({
      where: {
        idDocumentoMedico: id,
      },
    });

    return documentoMedico || null;
  }

  public async findByIdAtendimento(idAtendimento: number): Promise<DocumentoMedico | null> {
    const documentoMedico = await this.findOne({
      where: {
        idAtendimento: idAtendimento,
      },
    });

    return documentoMedico || null;
  }

  public async findByIdTipoDocumento(idTipoDocumento: number): Promise<DocumentoMedico | null> {
    const documentoMedico = await this.findOne({
      where: {
        idTipoDocumento: idTipoDocumento,
      },
    });

    return documentoMedico || null;
  }

  // Os métodos de consulta podem ser implementados aqui, de acordo com suas necessidades
}
