import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateAtendimentoProcedimentoTable1631180399950 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'AtendimentoProcedimento',
        columns: [
          {
            name: 'idAtendimentoProcedimento',
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
            name: 'idProcedimento',
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

    const table = await queryRunner.getTable('AtendimentoProcedimento');

    if (table) {
      await queryRunner.createForeignKey(
        'AtendimentoProcedimento',
        new TableForeignKey({
          columnNames: ['idAtendimento'],
          referencedColumnNames: ['idAtendimento'],
          referencedTableName: 'Atendimento',
          onDelete: 'CASCADE',
        })
      );

      await queryRunner.createForeignKey(
        'AtendimentoProcedimento',
        new TableForeignKey({
          columnNames: ['idProcedimento'],
          referencedColumnNames: ['idProcedimento'],
          referencedTableName: 'Procedimentos',
          onDelete: 'CASCADE',
        })
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('AtendimentoProcedimento');
  }
}
