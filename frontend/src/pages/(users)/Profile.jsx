import react from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { User } from 'lucide-react';
import { AuthContext } from '../../context/AuthProvider';
import { useContext } from 'react';
import Avatar from 'react-avatar';


function Profile() {
    const {user} = useContext(AuthContext)

    return (
        <div className=' w-screen h-screen' style={{ fontFamily: "'Inria Sans', sans-serif" }}>
            <div className="flex-1 flex w-full h-7/12 justify-center text-2xl font-bold mt-4">
                <div className=' bg-white w-2/12 h-10/12 flex p-10 justify-center flex-col border-2 rounded-[10px]'>
                    <div className='w-full flex flex-1 justify-center items-center'>
                        <div className='w-32 h-32 bg-white rounded-full flex justify-center items-center'>
                            <Avatar 
                                name={user.username}
                                size='100'
                                round={true}
                            />
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col'>
                        <div className=" flex-1 flex items-center gap-x-4">
                            <label htmlFor="" className="flex-1 text-sm text-gray-800">user name</label>
                            <label htmlFor="" className="flex-1 text-sm text-gray-800">{user.username}</label>
                        </div>
                        <div className=" flex-1 flex items-center gap-x-4">
                            <label htmlFor="" className="flex-1 text-sm text-gray-800">email</label>
                            <label htmlFor="" className="flex-1 text-sm text-gray-800">{user.email}</label>
                        </div>
                        <div className=" flex-1 flex items-center gap-x-4">
                            <label htmlFor="" className="flex-1 text-sm text-gray-800">Create at</label>
                            <label htmlFor="" className="flex-1 text-sm text-gray-800">{user.createAt.split("T")[0]}</label>
                        </div>
                        <div className=" flex-1 flex items-center gap-x-4">
                            <label htmlFor="" className="flex-1 text-sm text-gray-800">Type</label>
                            <label htmlFor="" className="flex-1 text-sm text-gray-800">{user.type}</label>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Profile;