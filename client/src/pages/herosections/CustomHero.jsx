import React from 'react'

const CustomHero = ({title, subtitle}) => {
  return (
<section className='h-screen flex items-center justify-center text-center bg-transparent'>
        <div className='max-w-2xl px-4'>
            <h1 className='poppins-bold py-10 text-4xl md:text-6xl font-bold mb-4 text-primary'>{title}</h1>
            <p className='poppins-semibold pb-10 text-lg md:text-xl mb-6 text-secondary leading-loose'>
                {subtitle}
            </p>
        </div>
    </section>
  )
}

export default CustomHero