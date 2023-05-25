import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateProcedimentoPorClassificacaoTable1631190000007 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'procedimentoPorClassificacao',
        columns: [
          {
            name: 'idPrograma',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'idPatologia',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'idRisco',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'idProcedimento',
            type: 'int',
            isNullable: false,
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            columnNames: ['idPrograma'],
            referencedTableName: 'programa',
            referencedColumnNames: ['idPrograma'],
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['idPatologia'],
            referencedTableName: 'patologia',
            referencedColumnNames: ['idPatologia'],
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['idRisco'],
            referencedTableName: 'risco',
            referencedColumnNames: ['idRisco'],
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['idProcedimento'],
            referencedTableName: 'procedimento',
            referencedColumnNames: ['idProcedimento'],
            onDelete: 'CASCADE',
          }),
        ],
      })
    );

    await queryRunner.createPrimaryKey('procedimentoPorClassificacao', ['idPrograma', 'idPatologia', 'idRisco', 'idProcedimento']);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('procedimentoPorClassificacao', 'FK_procedimentoPorClassificacao_idPrograma');
    await queryRunner.dropForeignKey('procedimentoPorClassificacao', 'FK_procedimentoPorClassificacao_idPatologia');
    await queryRunner.dropForeignKey('procedimentoPorClassificacao', 'FK_procedimentoPorClassificacao_idRisco');
    await queryRunner.dropForeignKey('procedimentoPorClassificacao', 'FK_procedimentoPorClassificacao_idProcedimento');
    await queryRunner.dropTable('ProcedimentoPorClassificacao');
  }
}
