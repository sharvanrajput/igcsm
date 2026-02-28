import { useInView } from '@/components/about/ChairmanMesage';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label';
import React from 'react'

const OnlineResult = () => {
  const [headerRef, headerInView] = useInView();
  return (
    <>
      <section className='pt-30'>
        <div className="section-header">
          <div
            ref={headerRef}
            className={`fade-up ${headerInView ? "visible" : ""}`}
          >

            <h2 className="main-title">
              Online    <em>Result</em>
            </h2>
            <div className="ornamental-divider">
              <div className="ornamental-diamond" />
              <div className="ornamental-diamond" style={{ width: 5, height: 5, opacity: 0.5 }} />
              <div className="ornamental-diamond" />
            </div>
          </div>
        </div>
      </section>
      <section className='pt-00 pb-20'>
        <div className="container">

          <div className="  mx-auto">

            <form className="w-full   mb-10 mx-auto bg-white rounded-xl shadow-lg overflow-hidden">

              <div className="p-6 space-y-6 flex flex-col justify-center">
                <div className="flex gap-10  justify-center">
                  <Label className={""} >Enter Your Enrollment No.</Label>
                  <Input input="text" placeholder="Enter Enrolment No." className={"w-md"} />
                </div>
                <button
                  type="submit"

                  className="bg-orange-500 w-xs my-10 mx-auto px-3 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition"
                >
                  Check Result
                </button>

              </div>
            </form>




          </div>

        </div>
      </section>
    </>
  )
}

export default OnlineResult