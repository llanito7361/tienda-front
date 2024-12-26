
const NewsletterBox = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault()
  }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20%</p>
        <p className="text-gray-400 mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestias obcaecati ab accusantium maiores in eveniet laboriosam, iure pariatur minus iusto magni facere ad cumque repudiandae optio, vero cum doloribus.
          <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className="w-full sm:flex-1 outline-none" type='email' placeholder='Enter your email' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
          </form>
        </p>
    </div>
  )
}

export default NewsletterBox 