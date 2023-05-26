import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from 'typeorm';

export class CreateUsuario1685123948121 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'usuario',
        columns: [
          {
            name: 'idUsuario',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'idPaciente',
            type: 'int',
            isNullable: false,
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
            enum: ['A', 'I'],
            default: "'A'",
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
        foreignKeys: [
          new TableForeignKey({
            columnNames: ['idTipoUsuario'],
            referencedColumnNames: ['idTipoUsuario'],
            referencedTableName: 'tipoUsuario',
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['idPaciente'],
            referencedColumnNames: ['idPaciente'],
            referencedTableName: 'paciente',
            onDelete: 'CASCADE',
          })
        ],

      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('usuario', 'FK_usuario_idTipoUsuario');
    await queryRunner.dropForeignKey('usuario', 'FK_usuario_idPaciente');
    await queryRunner.dropTable('usuario');
  }
}
