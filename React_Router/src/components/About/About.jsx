import React from 'react'

export default function About() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        
        <div className="space-y-10 md:space-y-0 md:flex md:gap-12 lg:items-center">
          
          {/* Image */}
          <div className="md:w-5/12 lg:w-5/12">
            <img
              src=""
              alt="image"
              className="w-1/4 h-[100px] object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Content */}
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              React development is carried out <br />
              by passionate developers
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eum omnis voluptatem accusantium nemo perspiciatis delectus
              atque autem! Voluptatum tenetur beatae unde aperiam.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat.
              Asperiores nemo possimus nesciunt dicta veniam aspernatur.
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}
