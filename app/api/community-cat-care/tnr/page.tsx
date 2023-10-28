import React from 'react'

function TNR() {
  return (
    <div className='flex flex-col lg:flex items-center justify-center'>
      <div>
        <div className=' w-[559px] h-[1604px] lg:[w-[900px] lg:h-[1100px] bg-blue-400'>
          <div className='flex'>
            <div className='w-[216px] h-[367px] bg-yellow-300'>
              <h3 className='text-lg'>Categories</h3>
              <div className='flex flex-col items-center'>
                <ul>
                  <li><h4>Trap-Neuter-Return</h4></li>
                  <li>Planning</li>
                  <li>Trapping</li>
                  <li>Recovery</li>
                  <li>Return</li>
                  <li>Troubleshooting</li>
                </ul>
              </div>
            </div>
            <div className='w-[637px] h-[1050px] bg-green-300'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TNR