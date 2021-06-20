const Pool = require('pg').Pool
const pool = new Pool({
    user: 'rszkeavjwnwzoo',
    host: 'ec2-18-214-140-149.compute-1.amazonaws.com',
    database: 'dbmfpb5tl4mn4m',
    password: 'f195f18b1fea7ad977ad94b5610bad1286cb85e845acb21e418205e9ce3a34b7',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
})


module.exports = {
    pool
}
// module.exports = {
//     getUsers,
//     // getUserById,
//     // createUser,
//     // updateUser,
//     // deleteUser,
// }
