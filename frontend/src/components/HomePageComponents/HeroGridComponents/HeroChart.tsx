import React, { useRef, useEffect } from 'react'
import { useAppSelector } from '../../../app/reduxHooks'
import { HeroCanvas } from '../../../styles/misc.styled'

interface HeroChartProps {
  values: [number, number, number]
  labels: [string, string, string]
}

const HeroChart: React.FC<HeroChartProps> = ({ values, labels }) => {
  const preferedScheme = useAppSelector(
    (state) => state.preference.preferedScheme
  )
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    //* this function adjusts width and height of the canvas to devicePixelRatio - it's a bit hacky
    // function fixDpi() {
    //   let dpi = window.devicePixelRatio
    //   if (canvasRef.current) {
    //     canvasRef.current.setAttribute('height', (135 * dpi).toString())
    //     canvasRef.current.setAttribute('width', (135 * dpi).toString())
    //   }
    // }
    if (canvasRef.current) {
      //   fixDpi()
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

        ctx.miterLimit = 10

        // enable antialiasing for the canvas context
        // ctx.imageSmoothingEnabled = true
        // set the stroke style and line width for the canvas context
        ctx.strokeStyle = 'rgb(0, 0, 0)'
        ctx.strokeStyle = getComputedStyle(canvasRef.current).getPropertyValue(
          '--background1-main'
        )
        // getComputedStyle(canvasRef.current).getPropertyValue(
        //   '--background1-main'
        // )
        // getComputedStyle(canvasRef.current).getPropertyValue(
        //   '--background-secondary1'
        // )
        ctx.lineWidth = 1

        ctx.beginPath()
        ctx.moveTo(105, 105)
        ctx.arc(105, 105, 100, 0, (angle1 * Math.PI) / 180)
        ctx.closePath()
        ctx.fillStyle = 'rgb( 0, 0, 0 )'
        ctx.fillStyle = getComputedStyle(canvasRef.current).getPropertyValue(
          '--background2-main'
          //   '--background-blur2'
        )
        // ctx.fillStyle = getComputedStyle(canvasRef.current).getPropertyValue(
        //   '--background-secondary1'
        // )

        ctx.stroke()
        ctx.fill()

        // draw second slice
        ctx.beginPath()
        // ctx.moveTo(100, 100)
        ctx.moveTo(105, 105)
        ctx.arc(
          105,
          105,
          100,
          (angle1 * Math.PI) / 180,
          ((angle1 + angle2) * Math.PI) / 180
        )

        ctx.closePath()
        //   ! This is a workaround to use my GlobalStyles within canvas fillStyle, all other methods are unsuported
        ctx.fillStyle = 'rgb( 0, 0, 0 )'

        ctx.fillStyle = getComputedStyle(canvasRef.current).getPropertyValue(
          '--background-secondary1'
        )
        ctx.stroke()
        ctx.fill()

        // draw third slice
        ctx.beginPath()
        // ctx.moveTo(100, 100)
        ctx.moveTo(105, 105)

        ctx.arc(
          105,
          105,
          100,
          ((angle1 + angle2) * Math.PI) / 180,
          ((angle1 + angle2 + angle3) * Math.PI) / 180
        )
        ctx.closePath()

        ctx.fillStyle = 'rgb( 0, 0, 0 )'

        ctx.fillStyle = getComputedStyle(canvasRef.current).getPropertyValue(
          '--background-secondary2'
        )

        ctx.fill()
        ctx.stroke()
        // draw doughnut hole

        ctx.beginPath()
        ctx.moveTo(105, 105)
        ctx.arc(105, 105, 80, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.fillStyle = 'rgb( 0, 0, 0 )'

        ctx.fillStyle = getComputedStyle(canvasRef.current).getPropertyValue(
          '--background1-main'
        )

        ctx.fill()
        ctx.stroke()
        // draw the border around the circle
      }
    }
  }, [values, preferedScheme])

  return (
    <>
      <HeroCanvas ref={canvasRef} width={210} height={210} />

      <p>{labels[0]}</p>
      <p>{labels[1]}</p>
      <p>{labels[2]}</p>
    </>
  )
}
export default HeroChart
