const editoraModel = require("../models/editoraModel");

const getAllPublishers = async (req, res) => {
    try {
        const publishers = await editoraModel.getPublishers();
        res.json(publishers);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar editoras." });
    }
};

const getPublisher = async (req, res) => {
    try {
        const publisher = await editoraModel.getPublisherById(req.params.id);
        if (!publisher) {
            return res.status(404).json({ message: "Editora não encontrada." });
        }
        res.json(publisher);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar editora." });
    }
};

const createPublisher = async (req, res) => {
    try {
        const { name } = req.body;
        const newPublisher = await editoraModel.createPublisher(name);
        res.status(201).json(newPublisher);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro ao criar editora." });
    }
};

const updatePublisher = async (req, res) => {
    try {
        const { name } = req.body;
        const updatedPublisher = await editoraModel.updatePublisher(req.params.id, name);
        if (!updatedPublisher) {
            return res.status(404).json({ message: "Editora não encontrada." });
        }
        res.json(updatedPublisher);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar editora." });
    }
};

const deletePublisher = async (req, res) => {
    try {
        const message = await editoraModel.deletePublisher(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar editora." });
    }
};

module.exports = { getAllPublishers, getPublisher, createPublisher, updatePublisher, deletePublisher };