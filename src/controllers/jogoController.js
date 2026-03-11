import * as jogoModel from "../models/jogoModel.js";

export async function listar(req, res) {
    const jogos = await jogoModel.listarJogos();
    res.json(jogos);
}

export async function buscar(req, res) {
    const jogo = await jogoModel.buscarJogoID(req.params.id);

    if (!jogo) {
        return res.status(404).json({
            msg: "Jogo não encontrado"
        });
    }

    res.json(jogo);
}

export async function criar(req, res) {
    const { nome, genero } = req.body;

    if (!nome || !genero) {
        return res.status(400).json({
            msg: "nome e genero são obrigatórios"
        });
    }

    const id = await jogoModel.criarJogo(req.body);

    res.status(201).json({
        msg: "Jogo criado com sucesso",
        id
    });
}

export async function atualizarJogo(req, res) {
    const id = req.params.id;

    const jogo = await jogoModel.buscarJogoID(id);

    if (!jogo) {
        return res.status(404).json({
            msg: "Jogo não encontrado"
        });
    }

    await jogoModel.atualizarJogo(id, req.body);

    res.json({
        msg: "Jogo atualizado com sucesso"
    });
}

export async function remove(req, res) {
    const id = req.params.id;

    const jogo = await jogoModel.buscarJogoID(id);

    if (!jogo) {
        return res.status(404).json({
            msg: "Jogo não encontrado"
        });
    }

    await jogoModel.deletarJogo(id);

    res.json({
        msg: "Jogo removido com sucesso"
    });
}