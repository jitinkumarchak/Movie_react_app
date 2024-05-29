import notfound from "/404.gif";
const Notfound = () => {
  return (
    <div className=" absolute top-[0] left-0 w-screen h-screen flex justify-center items-center bg-black">
      <img className=" object-cover" src={notfound} alt="" />
      
    </div>
  )
}

export default Notfound