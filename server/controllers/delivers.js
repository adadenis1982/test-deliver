const { Sudject, Deliver } = require('../db/models');

const getData = async (req, res) => {

  try {

    const subjects = await Sudject.findAll({ raw: true });
    const delivers = await Deliver.findAll({ raw: true });

    res.status(200).json({ subjects, delivers });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }

};

const createDeliver = async (req, res) => {
  const deliver = req.body

  try {

  const newDeliver = await Deliver.create({ ...deliver })

  res.status(201).json(newDeliver);
  } catch (error) {
  res.status(409).json({ message: error.message });
  }
};

const updateDeliver = async (req, res) => {
  const { id } = req.params;

  try {
    const deliver = await Deliver.findOne({ where: { id: id } });

    if (!deliver) return res.status(404).send(`Нет доставки с таким id: ${id}`);

    await Deliver.update(
      { ...req.body },
      { where: { id } }
    );

    const updatedDeliver = await Deliver.findOne({ where: { id } });

    res.json(updatedDeliver);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteDeliver = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Deliver.findOne({ where: { id: id } });

    if (!post) return res.status(404).send(`Нет доставки с таким id: ${id}`);

    await Deliver.destroy({ where: { id: id } });

    res.json({ message: 'Доставка успешна удалена.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getData,
  createDeliver,
  updateDeliver,
  deleteDeliver
};
