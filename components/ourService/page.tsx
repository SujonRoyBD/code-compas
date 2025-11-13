import React from 'react'
import AwardIcon from '../icon/AwardIcon'
import BorderIcon from '../icon/BorderIcon'

export default function OurService() {
    return (
        <div className='container'>
            <div className='flex col-span-3 gap-3'> {/* First section with 3 spaces (col-span-3) */}
                <AwardIcon />
                <p>Our Services</p>


            </div>
            <div className='grid grid-cols-8 gap-3 '>  {/* 8 columns grid */}

                <div>
                    <h3>Let's be <span className='text-blue-500'>Concrete</span>. What exactly do we do?</h3>
                </div>
                <div className='flex items-center justify-center col-span-1'> {/* Second section with 1 space */}
                    <BorderIcon className='text-black bg-black' />
                </div>
                <div className='col-span-4'> {/* Third section with 4 spaces */}

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quaerat ad, beatae veritatis aliquam maiores nostrum recusandae sapiente rerum distinctio aperiam? Voluptatum est, iusto laborum blanditiis accusamus, sapiente porro tempora aspernatur qui obcaecati ex assumenda! Sit natus unde neque temporibus?
                    </p>
                </div>
            </div>
        </div>
    )
}
