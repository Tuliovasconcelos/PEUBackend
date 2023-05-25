import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateAtendimentoProcedimentoTable1631180399950 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'atendimentoProcedimento',
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

    const table = await queryRunner.getTable('atendimentoProcedimento');

    if (table) {
      await queryRunner.createForeignKey(
        'atendimentoProcedimento',
        new TableForeignKey({
          columnNames: ['idAtendimento'],
          referencedColumnNames: ['idAtendimento'],
          referencedTableName: 'atendimento',
          onDelete: 'CASCADE',
        })
      );

      await queryRunner.createForeignKey(
        'atendimentoProcedimento',
        new TableForeignKey({
          columnNames: ['idProcedimento'],
          referencedColumnNames: ['idProcedimento'],
          referencedTableName: 'procedimento',
          onDelete: 'CASCADE',
        })
      );
    }
    await queryRunner.createPrimaryKey('atendimentoProcedimento', ['idAtendimentoProcedimento']);

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('atendimentoProcedimento', 'FK_atendimentoProcedimento_idAtendimento');
    await queryRunner.dropForeignKey('atendimentoProcedimento', 'FK_atendimentoProcedimento_idProcedimento');
    await queryRunner.dropTable('atendimentoProcedimento');
  }
}
