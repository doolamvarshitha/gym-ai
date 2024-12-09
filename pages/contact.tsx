export default function Contact() {
  return (
    <div className='bg-gray-900 text-white min-h-screen py-20 px-6'>
      <h1 className='text-5xl font-bold text-center mb-12'>Contact Us</h1>
      <form className='max-w-2xl mx-auto'>
        <div className='mb-6'>
          <label className='block mb-2 text-sm font-medium'>Name</label>
          <input
            type='text'
            className='w-full p-3 bg-gray-800 rounded-lg focus:outline-none'
            placeholder='Enter your name'
          />
        </div>
        <div className='mb-6'>
          <label className='block mb-2 text-sm font-medium'>Email</label>
          <input
            type='email'
            className='w-full p-3 bg-gray-800 rounded-lg focus:outline-none'
            placeholder='Enter your email'
          />
        </div>
        <div className='mb-6'>
          <label className='block mb-2 text-sm font-medium'>Message</label>
          <textarea
            className='w-full p-3 bg-gray-800 rounded-lg focus:outline-none'
            rows={5}
            placeholder='Your message'
          ></textarea>
        </div>
        <button
          type='submit'
          className='px-6 py-3 bg-green-500 text-white rounded-lg'
        >
          Submit
        </button>
      </form>
    </div>
  )
}
