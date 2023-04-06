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

    await queryInterface.bulkInsert('books', [
      {
        uuid: crypto.randomUUID(),
        code: "SHR-1",
        title: "A Study in Scarlet",
        author: "Arthur Conan Doyle",
        stock: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        uuid: crypto.randomUUID(),
        code: "JK-45",
        title: "Harry Potter",
        author: "J.K Rowling",
        stock: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        uuid: crypto.randomUUID(),
        code: "TW-11",
        title: "Twilight",
        author: "Stephenie Meyer",
        stock: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        uuid: crypto.randomUUID(),
        code: "HOB-83",
        title: "The Hobbit, or There and Back Again",
        author: "J.R.R. Tolkien",
        stock: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        uuid: crypto.randomUUID(),
        code: "NRN-7",
        title: "The Lion, the Witch and the Wardrobe",
        author: "C.S. Lewis",
        stock: 1,
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
