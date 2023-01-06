import React, { useRef, useEffect } from 'react'
import { useAppSelector } from '../../../app/reduxHooks'
import {
  HeroCanvas,
  HeroCanvasLabel,
  NumberBackground,
} from '../../../styles/misc.styled'

interface HeroChartProps {
  values: [number, number, number]
  labels: [string, string, string]
}

const HeroChart: React.FC<HeroChartProps> = ({ values, labels }) => {
  const preferedScheme = useAppSelector(
    (state) => state.preference.preferedScheme
  )
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const prevValues = useRef<HeroChartProps>()
  const prevDpi = useRef<number | undefined>()
  useEffect(() => {
    const valuesCurrent = JSON.stringify(values)
    const valuesEmpty = JSON.stringify([0, 0, 0])
    // * JSON.stringify method returns a string representation of an object that includes the object's keys and values
    // * If the two objects have the same keys and values, their string representations will be the same.

    const valuesPrevious = JSON.stringify(prevValues.current?.values)
    // ! this is to be removed when I find the reason I get 2 calls to change mainKeyword with one action
    if (
      (prevValues.current && valuesCurrent === valuesPrevious) ||
      valuesCurrent === valuesEmpty
    ) {
      return
    }
    prevValues.current = { values, labels }

    //* this function adjusts width and height of the canvas to devicePixelRatio
    function fixDpi() {
      let dpi = window.devicePixelRatio

      prevDpi.current = dpi
      //* this checks whether values changed if they didn't it stops
      if (
        (prevValues.current && valuesCurrent === valuesPrevious) ||
        valuesCurrent === valuesEmpty
      ) {
        return
      }
      //* this checks whether dpi changed
      if (prevDpi.current && prevDpi.current !== dpi)
        if (canvasRef.current) {
          let styleHeight = +getComputedStyle(canvasRef.current)
            .getPropertyValue('height')
            .slice(0, -2)
          let styleWidth = +getComputedStyle(canvasRef.current)
            .getPropertyValue('width')
            .slice(0, -2)
          canvasRef.current.setAttribute(
            'height',
            (styleHeight * dpi).toString()
          )
          canvasRef.current.setAttribute('width', (styleWidth * dpi).toString())
        }
    }
    if (canvasRef.current) {
      fixDpi()
      const ctx = canvasRef.current.getContext('2d')

      if (ctx) {
        // Calculate the size of each arc based on the values
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
        ctx.imageSmoothingEnabled = true
        // set the stroke style and line width for the canvas context
        ctx.strokeStyle = 'rgb(0, 0, 0)'
        ctx.strokeStyle = getComputedStyle(canvasRef.current).getPropertyValue(
          '--background1-main'
        )

        ctx.lineWidth = 1

        ctx.beginPath()
        ctx.moveTo(105, 105)
        ctx.arc(105, 105, 100, 0, (angle1 * Math.PI) / 180)
        ctx.closePath()
        ctx.fillStyle = 'rgb( 0, 0, 0 )'
        ctx.fillStyle = getComputedStyle(canvasRef.current).getPropertyValue(
          '--background2-main'
        )

        ctx.stroke()
        ctx.fill()

        // draw second slice
        ctx.beginPath()

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
  }, [values, labels, preferedScheme])

  return (
    <>
      <HeroCanvas ref={canvasRef} width={210} height={210} />

      {values[0] !== 0 ? (
        <HeroCanvasLabel>
          <NumberBackground
            colorProps='var(--background5-main)'
            backgroundProps='var(--background2-main)'
            value={values[0] > 9 ? true : false}
          >
            {values[0]}
          </NumberBackground>
          {labels[0]}
        </HeroCanvasLabel>
      ) : null}
      {values[1] !== 0 ? (
        <HeroCanvasLabel colorProps='var(--background-secondary1)'>
          <NumberBackground
            colorProps='var(--background1-main)'
            backgroundProps='var(--background-secondary1)'
            value={values[1] > 9 ? true : false}
          >
            {values[1]}
          </NumberBackground>
          {labels[1]}
        </HeroCanvasLabel>
      ) : null}
      {values[2] !== 0 ? (
        <HeroCanvasLabel colorProps='var(--background-secondary2)'>
          <NumberBackground
            colorProps='var(--background1-main)'
            backgroundProps='var(--background-secondary2)'
            value={values[2] > 9 ? true : false}
          >
            {values[2]}
          </NumberBackground>
          {labels[2]}
        </HeroCanvasLabel>
      ) : null}
    </>
  )
}
export default HeroChart
