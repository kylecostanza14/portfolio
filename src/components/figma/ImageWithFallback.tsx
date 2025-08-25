import image_6f3b04de12328d1b4b3541e7c08e7500435b479f from 'figma:asset/6f3b04de12328d1b4b3541e7c08e7500435b479f.png';
import React, { useState } from 'react'

const ERROR_IMG_SRC =
  image_6f3b04de12328d1b4b3541e7c08e7500435b479f

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, ...rest } = props

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}
