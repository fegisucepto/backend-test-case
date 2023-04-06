module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('pinjams', 'tgl_pinjam',
      {
        type: Sequelize.DATE,
        allowNull: true,
      })
      await queryInterface.addColumn('pinjams', 'tgl_kembali',
      {
        type: Sequelize.DATE,
        allowNull: true,
      })
  },
  down: async () => {
  },
}
