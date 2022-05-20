const Anotation = require("../models/Anotation");

module.exports = {
    async store(req, res) {
        try {
            const data = {
                title: "Novo grupo",
                items: [
                    {
                        title: "Titulo",
                        description: "Descrição"
                    }
                ]
            }
            const response = await Anotation.create(data)
            res.status(200).json({ data: response });

        } catch (error) {

            res.status(400).json({ error: "Erro ao adicionar anotação!" })
        }

    },

    async get(req, res) {
        try {
            const response = await Anotation.find().select('-__v -createdAt');
            res.status(200).json(response);
        }
        catch {
            res.status(400).json({ error: "Erro ao buscar detalhes!" })
        }

    },
    async update(req, res) {
        try {
            const { list } = req.body
            if (!list) {
                return res.status(400).json({ error: "Informe a lista!" })
            }
            list.map(async (grupo) => {
                return await Anotation.findOneAndUpdate({ _id: grupo._id }, { $set: { items: grupo.items } })

            })

            res.status(200).json('Sucesso');

        } catch (error) {
            res.status(400).json({ error: "Erro ao atualizar detalhes!" })
        }
    },
    async createItem(req, res) {
        try {
            const { _id } = req.body;
            if (!_id) {
                return res.status(400).json({ error: "Informe qual grupo!" })
            }
            const response = await Anotation.findOneAndUpdate({ _id }, { $push: { items: { title: 'Novo item', description: 'descrição' } } })
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ error: "Erro ao criar item!" })
        }
    },
    async deleteItem(req, res) {
        try {
            const { _id, idItem } = req.body;
            if (!_id || !idItem) {
                return res.status(400).json({ error: "Erro ao deletar item!" })
            }
            const response = await Anotation.findOneAndUpdate({ _id }, { $pull: { items: { _id: idItem } } })
            if (response.items.length == 1) {
                await Anotation.findOneAndRemove({ _id })
            }
            res.status(200).json({ message: "Item deletado com sucesso!" });
        } catch (error) {
            res.status(400).json({ error: "Erro ao deletar item!" })
        }
    },
    async updateItem(req, res) {
        try {
            const { _id, title, description } = req.body;
            if (!_id) {
                return res.status(400).json({ error: "Informe qual item!" })
            }
            if (!title) {
                return res.status(400).json({ error: "Informe o titulo!" })
            }
            if (!description) {
                return res.status(400).json({ error: "Informe a descrição!" })
            }
            await Anotation.findOneAndUpdate({ "items._id": _id }, { $set: { "items.$.title": title, "items.$.description": description } })
            res.status(200).json({ message: "Item atualizado com sucesso!" });
        } catch (error) {
            res.status(400).json({ error: "Erro ao atualizar item!" })
        }
    },
    async hiddenGroup(req, res) {
        try {
            const {_id } = req.body;
            if (!_id) {
                return res.status(400).json({ error: "Informe qual grupo!" })
            }
            const response = await Anotation.findOne({ _id })
            if (response.hidden) {
                await Anotation.findOneAndUpdate({ _id }, { $set: { hidden: false } })
                return res.status(200).json({ message: "Sucesso!" });
            } else {
                await Anotation.findOneAndUpdate({ _id }, { $set: { hidden: true } })
                return res.status(200).json({ message: "Ocultado com sucesso!" });

            }
            
        } catch (error) {
            res.status(400).json({ error: "Erro ao ocultar item!" })
        }
    }


}


