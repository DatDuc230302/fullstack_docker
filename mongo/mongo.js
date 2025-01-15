const database = 'storage';
const collectionName = 'users';

// Create a new database.
use(database);

// Create a new collection.
const collection = db.getCollection(collectionName);

var data = [
    {
        _id: ObjectId('6785f9fc9bfc167b5232d6ae'),
        displayName: 'Trần Đức Đạt',
        age: 15,
        createdAt: new Date('2025-01-14T05:45:32.863Z'),
        updatedAt: new Date('2025-01-14T05:45:32.863Z'),
        __v: 0,
    },
];

collection.insertMany(data); // Nhập dữ liệu vào collection "users"

collection.find();
