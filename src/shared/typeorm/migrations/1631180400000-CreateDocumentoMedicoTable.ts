import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateDocumentoMedicoTable1631180400000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'DocumentoMedico',
        columns: [
          {
            name: 'idDocumentoMedico',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'idAtendimento',
            type: 'int',
          },
          {
            name: 'idDocumentoTipo',
            type: 'int',
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['ativo', 'inativo'],
            default: "'ativo'",
            isNullable: false,
          },
          {
            name: 'dataAlteracao',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
      true // Indica que a tabela deve ser criada com a opção "IF NOT EXISTS"
    );

    await queryRunner.createForeignKey(
      'DocumentoMedico',
      new TableForeignKey({
        columnNames: ['idAtendimento'],
        referencedColumnNames: ['idAtendimento'],
        referencedTableName: 'Atendimento',
        onDelete: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'DocumentoMedico',
      new TableForeignKey({
        columnNames: ['idDocumentoTipo'],
        referencedColumnNames: ['idDocumentoTipo'],
        referencedTableName: 'DocumentoTipo',
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('DocumentoMedico');
  }
}
