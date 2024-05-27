import loader from '/loader.gif'

const Loading = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-black'>
        <img className='h-[80%] object-cover' src={loader} alt="" />
    </div>
  )
}

export default Loading