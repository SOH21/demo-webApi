const person = [


    { id: 1, firstName: "zaza", lastName: "vanderquack" },
    { id: 2, firstName: "Riri", lastName: "Duck" }

];
let lastId = 2;
export const getall = (req, res) => {

    res.status(200).json(person);
};

export const add = (req, res) => {

    //verification des données avant insertion
    const data = req.body;

    const nextId = ++lastId
    person.push({ id: nextId, ...data });
    res.status(200).json({ id: nextId });

};

export const getOne = (req, res) => {

    const id = res.params.id;
    const data = people.find(p => p.id === id);

    (data) ? res.send(200).json(data): res.sendStatus(404);
};

export const update = (req, res) => {

    res.sendStatus(501);
};

export const deleteOne = (req, res) => {
    const id = parseInt(req.params.id);

    const indexToDelete = person.findIndex(person => person.id === id);

    if (indexToDelete > 0) {

        person.slice(indexToDelete, 1);
        res.sendStatus(204);
    }

    res.sendStatus(501);
};

export default {

    getOne,
    getall,
    add,
    deleteOne,
    update
}