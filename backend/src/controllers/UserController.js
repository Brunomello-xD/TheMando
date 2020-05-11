const crypto = require("crypto");

const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    //lista todos os usuários cadastrados na tabela users
    const users = await connection("users").select("*");

    return response.json(users);
  },

  //cadastro de dados na tabela users
  async create(request, response) {
    const { name, username, email, password } = request.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await connection("users").insert({
      id,
      name,
      username,
      email,
      password,
    });

    return response.json({ id });
  },
};
