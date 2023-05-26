import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateSolicitacaoItem1685123989259 implements MigrationInterface {
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
            enum: ['A', 'I'],
            default: "'A'",
            isNullable: false,
          },
          {
            name: 'dataAlteracao',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            columnNames: ['idSolicitacao'],
            referencedTableName: 'solicitacao',
            referencedColumnNames: ['idSolicitacao'],
            onDelete: 'CASCADE',
          })
        ]
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('solicitacaoItem', 'FK_solicitacaoItem_idSolicitacao');
    await queryRunner.dropTable('solicitacaoItem');
  }
}
