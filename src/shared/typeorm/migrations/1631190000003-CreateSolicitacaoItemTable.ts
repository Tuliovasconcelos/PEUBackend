import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateSolicitacaoItemTable1631190000003 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'solicitacaoItem',
        columns: [
          {
            name: 'idItemSolicitacao',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'idSolicitacao',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'descricao',
            type: 'text',
            isNullable: false,
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
    await queryRunner.createPrimaryKey('solicitacaoItem', ['idItemSolicitacao']);

    await queryRunner.createForeignKey(
      'solicitacaoItem',
      new TableForeignKey({
        columnNames: ['idSolicitacao'],
        referencedTableName: 'solicitacao',
        referencedColumnNames: ['idSolicitacao'],
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('solicitacaoItem', 'FK_solicitacaoItem_idSolicitacao');
    await queryRunner.dropTable('solicitacaoItem');
  }
}
