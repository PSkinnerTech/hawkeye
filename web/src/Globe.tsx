import { useEffect, useRef } from 'react'

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const WW = (window as any).WorldWind
    if (!WW || !canvasRef.current) return

    const wwd = new WW.WorldWindow(canvasRef.current)
    wwd.addLayer(new WW.BMNGLayer())
    wwd.addLayer(new WW.BMNGLandsatLayer())
    wwd.addLayer(new WW.CompassLayer())
    wwd.addLayer(new WW.CoordinatesDisplayLayer(wwd))
    wwd.addLayer(new WW.ViewControlsLayer(wwd))
  }, [])

  return <canvas ref={canvasRef} className="h-screen w-screen block" />
}


