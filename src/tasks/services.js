const {ObjectId} = require('mongodb');
const {Database} = require('../database/index');
const COLLECTION = 'tasks';

const getAll = async () => {
    const collection = await Database(COLLECTION);
    return await collection.find({}).toArray();
}

const getById = async (id) => {
    const collection = await Database(COLLECTION);
    return collection.findOne({_id: ObjectId(id)});
}

const create = async (task) => {
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(task);
    return result.insertedId;
}

module.exports.TaskService = {
    getAll,
    getById,
    create,
}