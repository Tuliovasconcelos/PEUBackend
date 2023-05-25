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
      }),
      true // Indica que a tabela deve ser criada com a opção "IF NOT EXISTS"
    );

    await queryRunner.addColumn(
      'userTokens',
      new TableColumn({
        name: 'idUsuario',
        type: 'int',
        isNullable: false,
      })
    );

    await queryRunner.createForeignKey(
      'userTokens',
      new TableForeignKey({
        columnNames: ['idUsuario'],
        referencedColumnNames: ['idUsuario'],
        referencedTableName: 'Usuario',
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const userTokensTableExists = await queryRunner.hasTable('userTokens');
    if (userTokensTableExists) {
      const table = await queryRunner.getTable('userTokens');
      const foreignKey = table?.foreignKeys.find((fk) => fk.columnNames.indexOf('idUsuario') !== -1);
      if (foreignKey) {
        await queryRunner.dropForeignKey('userTokens', foreignKey);
      }
      await queryRunner.dropColumn('userTokens', 'idUsuario');
    }
    await queryRunner.dropTable('userTokens');
  }
}
