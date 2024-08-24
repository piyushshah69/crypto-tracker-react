/* eslint-disable react/prop-types */

const Navbar = ({setCurrency}) => {
  return (
      <div className="navbar p-0 bg-base-100 w-[90%] md:w-[70%] m-auto">
          <div className="flex-1">
              <a className="text-2xl cursor-pointer font-bold">CRYPTO TRACKER</a>
          </div>
          <div className="flex-none">
              <ul className="menu menu-horizontal px-1 text-lg">
                  <li><a onClick={()=>setCurrency('inr')}>INR</a></li>
                  <li><a onClick={()=>setCurrency('usd')}>USD</a></li>
              </ul>
          </div>
      </div>
  )
}

export default Navbar