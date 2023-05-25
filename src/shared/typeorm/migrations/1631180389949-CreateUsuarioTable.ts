import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from 'typeorm';

export class CreateUsuarioTable1631180389949 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Usuario',
        columns: [
          {
            name: 'idUsuario',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'nome',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'senha',
            type: 'varchar',
            length: '100',
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
            name: 'foto',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'dataCriacao',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'dataAlteracao',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'idTipoUsuario',
            type: 'int',
            isNullable: true,
          },
        ],
      }),
      true // Indica que a tabela deve ser criada com a opção "IF NOT EXISTS"
    );

    await queryRunner.addColumn(
      'Usuario',
      new TableColumn({
        name: 'idTipoUsuario',
        type: 'int',
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      'Usuario',
      new TableForeignKey({
        columnNames: ['idTipoUsuario'],
        referencedColumnNames: ['idTipoUsuario'],
        referencedTableName: 'TipoUsuario',
        onDelete: 'SET NULL',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('Usuario');
    const foreignKey = table?.foreignKeys.find((fk) => fk.columnNames.indexOf('idTipoUsuario') !== -1);
    if (foreignKey) {
      await queryRunner.dropForeignKey('Usuario', foreignKey);
    }
    await queryRunner.dropColumn('Usuario', 'idTipoUsuario');
    await queryRunner.dropTable('Usuario');
  }
}
