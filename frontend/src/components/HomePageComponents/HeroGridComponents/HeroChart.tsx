import React, { useRef, useEffect } from 'react'
import { useAppSelector } from '../../../app/reduxHooks'

interface HeroChartProps {
  values: [number, number, number]
}

const HeroChart: React.FC<HeroChartProps> = ({ values }) => {
  const preferedScheme = useAppSelector(
    (state) => state.preference.preferedScheme
  )
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')

      if (ctx) {
        // // Calculate the size of each arc based on the values
        const [value1, value2, value3] = values
        const total = value1 + value2 + value3
        //* calculate angles for each slice
        const angle1 = (value1 / total) * 360
        const angle2 = (value2 / total) * 360
        const angle3 = (value3 / total) * 360

        // set the line width and miter limit for the canvas context
        //         The lineWidth property controls the thickness of the lines used to draw the circle. By increasing the value of this property, you can increase the thickness of the lines and help to improve the smoothness of the edges.

        // The miterLimit property controls the maximum distance between the mitered corner and the outer edge of the line. By increasing the value of this property, you can help to improve the smoothness of the corners of the circle.

        ctx.miterLimit = 5

        // enable antialiasing for the canvas context
        ctx.imageSmoothingEnabled = true
        // set the stroke style and line width for the canvas context
        ctx.strokeStyle = 'rgb(0, 0, 0)'
        ctx.strokeStyle = getComputedStyle(canvasRef.current).getPropertyValue(
          '--background1-main'
        )
        ctx.lineWidth = 1

        ctx.beginPath()
        ctx.moveTo(100, 100)
        ctx.arc(100, 100, 100, 0, (angle1 * Math.PI) / 180)

        ctx.closePath()
        ctx.fillStyle = 'rgb( 0, 0, 0 )'

        ctx.fillStyle = getComputedStyle(canvasRef.current).getPropertyValue(
          '--background-secondary1'
        )

        ctx.fill()
        ctx.stroke()
        // draw second slice
        ctx.beginPath()
        ctx.moveTo(100, 100)
        ctx.arc(
          100,
          100,
          100,
          (angle1 * Math.PI) / 180,
          ((angle1 + angle2) * Math.PI) / 180
        )

        ctx.closePath()
        //   ! This is a workaround to use my GlobalStyles within canvas fillStyle, all other methods are unsuported
        ctx.fillStyle = 'rgb( 0, 0, 0 )'

        ctx.fillStyle = getComputedStyle(canvasRef.current).getPropertyValue(
          '--background-secondary2'
        )

        ctx.fill()
        ctx.stroke()
        // draw third slice
        ctx.beginPath()
        ctx.moveTo(100, 100)

        ctx.arc(
          100,
          100,
          100,
          ((angle1 + angle2) * Math.PI) / 180,
          ((angle1 + angle2 + angle3) * Math.PI) / 180
        )
        ctx.closePath()

        ctx.fillStyle = 'rgb( 0, 0, 0 )'

        ctx.fillStyle = getComputedStyle(canvasRef.current).getPropertyValue(
          '--background2-main'
        )

        ctx.fill()
        ctx.stroke()
        // draw doughnut hole
        ctx.beginPath()
        ctx.arc(100, 100, 80, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.fillStyle = 'rgb( 0, 0, 0 )'

        ctx.fillStyle = getComputedStyle(canvasRef.current).getPropertyValue(
          '--background1-main'
        )

        ctx.fill()
        // draw the border around the circle
      }
    }
  }, [values, preferedScheme])

  return (
    <>
      <canvas ref={canvasRef} width={210} height={210} />
      {/* <canvas width='200' height='200'></canvas> */}
    </>
  )
}
export default HeroChart
