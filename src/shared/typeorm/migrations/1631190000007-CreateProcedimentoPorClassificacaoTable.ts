import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateProcedimentoPorClassificacaoTable1631190000007 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ProcedimentoPorClassificacao',
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
            referencedTableName: 'Programa',
            referencedColumnNames: ['idPrograma'],
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['idPatologia'],
            referencedTableName: 'Patologia',
            referencedColumnNames: ['ID'],
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['idRisco'],
            referencedTableName: 'Riscos',
            referencedColumnNames: ['ID'],
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['idProcedimento'],
            referencedTableName: 'Procedimento',
            referencedColumnNames: ['idProcedimento'],
            onDelete: 'CASCADE',
          }),
        ],
      })
    );

    await queryRunner.createPrimaryKey('ProcedimentoPorClassificacao', ['idPrograma', 'idPatologia', 'idRisco', 'idProcedimento']);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('ProcedimentoPorClassificacao');
  }
}
