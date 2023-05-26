import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from 'typeorm';

export class CreateUserTokensTable1631181382568 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'userTokens',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'token',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'idUsuario',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'dataCriacao',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'dataAlteracao',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            columnNames: ['idUsuario'],
            referencedColumnNames: ['idUsuario'],
            referencedTableName: 'usuario',
            onDelete: 'CASCADE',
          })
        ],
      }),
      true
    );
    await queryRunner.createPrimaryKey('userTokens', ['id']);

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('userTokens', 'FK_userTokens_idUsuario');
    await queryRunner.dropTable('userTokens');
  }
}
