import React from 'react'

const ThreeDAvater = () => {
  return (
     <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* 3D Character Placeholder - Using CSS to create a playful character */}
                <div className="w-80 h-80 relative">
                  {/* Character Body */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800 rounded-full transform rotate-12">
                    {/* Character Face */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-yellow-200 rounded-full">
                      {/* Eyes */}
                      <div className="absolute top-4 left-3 w-2 h-2 bg-gray-800 rounded-full"></div>
                      <div className="absolute top-4 right-3 w-2 h-2 bg-gray-800 rounded-full"></div>
                      {/* Mouth */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-3 border-2 border-gray-800 border-t-0 rounded-b-full"></div>
                    </div>
                    
                    {/* Arms */}
                    <div className="absolute top-20 -left-8 w-12 h-4 bg-green-700 rounded-full transform -rotate-45"></div>
                    <div className="absolute top-20 -right-8 w-12 h-4 bg-green-700 rounded-full transform rotate-45"></div>
                    
                    {/* Legs */}
                    <div className="absolute bottom-8 left-16 w-4 h-16 bg-green-700 rounded-full"></div>
                    <div className="absolute bottom-8 right-16 w-4 h-16 bg-green-700 rounded-full"></div>
                    
                    {/* Laptop */}
                    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-gray-700 rounded">
                      <div className="w-full h-1/2 bg-gray-200 rounded-t"></div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-lg transform rotate-12 animate-bounce"></div>
                  <div className="absolute top-12 -left-8 w-6 h-6 bg-red-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 -right-8 w-10 h-6 bg-green-400 rounded-full transform -rotate-12"></div>
                </div>
                
                {/* Scroll indicator */}
                <div className="absolute -bottom-8 right-8 flex flex-col items-center text-gray-400">
                  <span className="text-xs mb-2">Scroll Down</span>
                  <div className="w-px h-8 bg-gray-300"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-1 animate-bounce"></div>
                </div>
              </div>
            </div>
  )
}

export default ThreeDAvater