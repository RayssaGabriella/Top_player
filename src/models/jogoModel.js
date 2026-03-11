import { conexao } from "../config/db.js";

export async function listarJogos() {
    const [rows] = await conexao.query(
        "SELECT * FROM jogos ORDER BY id DESC"
    );
    return rows;
}

export async function buscarJogoID(id) {
    const [rows] = await conexao.query(
        "SELECT * FROM jogos WHERE id = ?",
        [id]
    );
    return rows[0];
}

export async function criarJogo(data) {
    const { nome, genero } = data;

    const [resultado] = await conexao.query(
        "INSERT INTO jogos (nome, genero) VALUES (?,?)",
        [nome, genero]
    );

    return resultado.insertId;
}

export async function atualizarJogo(id, data) {
    const { nome, genero } = data;

    await conexao.query(
        "UPDATE jogos SET nome=?, genero=? WHERE id=?",
        [nome, genero, id]
    );
}

export async function deletarJogo(id) {
    await conexao.query(
        "DELETE FROM jogos WHERE id=?",
        [id]
    );
}