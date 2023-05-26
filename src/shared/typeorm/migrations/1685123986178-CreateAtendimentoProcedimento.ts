import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateAtendimentoProcedimento1685123986178 implements MigrationInterface {
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
        foreignKeys: [
          new TableForeignKey({
            columnNames: ['idProcedimento'],
            referencedTableName: 'procedimento',
            referencedColumnNames: ['idProcedimento'],
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['idAtendimento'],
            referencedTableName: 'atendimento',
            referencedColumnNames: ['idAtendimento'],
            onDelete: 'CASCADE',
          })
        ]
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('atendimentoProcedimento', 'FK_atendimentoProcedimento_idAtendimento');
    await queryRunner.dropForeignKey('atendimentoProcedimento', 'FK_atendimentoProcedimento_idProcedimento');
    await queryRunner.dropTable('atendimentoProcedimento');
  }
}
