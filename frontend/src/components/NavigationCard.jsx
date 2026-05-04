import react from 'react'
import { useNavigate } from 'react-router-dom'
function NavigationCard(props) {
    let navigate = useNavigate();
    return(
        <div className='bg-[#D9D9D9] basis-80 flex flex-col p-4 justify-evenly rounded-[3px]'>
            <div className=" basis-55 flex justify-center place-items-center">
                <img src={props.imgUrl} alt="" srcset="" />
            </div>
            <div className=" basis-10 flex justify-center place-items-center">
                <label className=' font-bold'>{props.head}</label>
            </div>
            <div className="basis-40 flex justify-center place-items-center flex-col gap-5">
                <label>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, maxime ullam.</label>
                <button className='h-15 w-40 bg-[#2FCB2D] text-white font-bold rounded-[7px] active:scale-95' onClick={()=> navigate(props.route)}>{props.head}</button>
            </div>
        </div>
    )
}

export default NavigationCard;