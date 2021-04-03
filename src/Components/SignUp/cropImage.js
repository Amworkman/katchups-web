const createImage = (url) =>
    new Promise((resolve, reject) => {
        const image = new Image()
        image.src = url
        image.addEventListener('load', () => resolve(image))
        image.addEventListener('error', error => reject(error))        
    })

export const getCroppedImg = async (imageSrc, crop) => {
    const image = await createImage(imageSrc)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    
    canvas.width = 250
    canvas.height = 250

    ctx.drawImage(
        image,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        canvas.width,
        canvas.height
    )

    return new Promise(resolve => {
      let imageData = canvas.toDataURL("image/png")      
        resolve(imageData)
    })
}