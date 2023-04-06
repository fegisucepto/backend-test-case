const crypto = require('crypto')

module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('members', [
      {
        uuid: crypto.randomUUID(),
        code: "M001",
        name: "Angga",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        uuid: crypto.randomUUID(),
        code: "M002",
        name: "Ferry",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        uuid: crypto.randomUUID(),
        code: "M003",
        name: "Putri",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ])
  },
  down: async () => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}
