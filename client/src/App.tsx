
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {
    const [systems, setSystems] = useState<any>([])
    const [users, setUsers] = useState<any>([])
    const [refresh, setRefresh] = useState<number>(0)

    useEffect(() => {
        const getSystems = async () => {
            try {
                const res = await axios.get('http://localhost:2303/api/systems')
                setSystems(res.data.data)
            } catch (err: any) {
                console.log(err)
            }
        }

        const getUsers = async () => {
            try {
                const res = await axios.get('http://localhost:2303/api/users')
                setUsers(res.data.data)
            } catch (err: any) {
            }
        }

        getUsers()
        getSystems()
    }, [refresh])

    const insertSystem = async () => {
        try {
            await axios.get('http://localhost:2303/api/systems/insert')
            setRefresh((pre: number) => pre + 1)
        } catch (err: any) {

        }
    }

    const deleteSystem = async (id: string) => {
        try {
            await axios.delete(`http://localhost:2303/api/systems/delete/${id}`)
            setRefresh((pre: number) => pre + 1)
        } catch (err: any) {

        }
    }

    const createUser = async () => {
        try {
            await axios.post('http://localhost:2303/api/users')
            setRefresh((pre: number) => pre + 1)
        } catch (err: any) {

        }
    }

    const deletUser = async (_id: string) => {
        try {
            await axios.delete(`http://localhost:2303/api/users/${_id}`)
            setRefresh((pre: number) => pre + 1)
        } catch (err: any) {

        }
    }

    return (
        <div className='flex space-x-2' >
            <div className="flex w-full h-full justify-center pt-10 flex-col items-center">
                <div className="flex space-x-2" >
                    <button onClick={() => insertSystem()} >Thêm version</button>
                </div>
                <div className="flex space-x-2 flex-col justify-center" >
                    {systems.map((item: any, index: number) =>
                        <div className='flex space-x-3' key={index}>
                            <p>version: {item.version}</p>
                            <button onClick={() => deleteSystem(item.id)}>Xóa</button>
                        </div>)}
                </div>
            </div><div className="flex w-full h-full justify-center pt-10 flex-col items-center">
                <div className="flex space-x-2" >
                    <button onClick={createUser} >Thêm user</button>
                </div>
                <div className="flex space-x-2 flex-col justify-center" >
                    {users.map((item: any, index: number) =>
                        <div className='flex space-x-3' key={index}>
                            <p>{item.displayName}</p>
                            <button onClick={() => deletUser(item._id)}>Xóa</button>
                        </div>)}
                </div>
            </div>
        </div>
    );
}

export default App;
