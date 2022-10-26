export const titleSvg = (
  <svg
    // width='659.8249999999999px'
    width='max(30vw, 26rem, 200px)'
    // height='189.2px'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='-79.91249999999997 -19.599999999999994 659.8249999999999 189.2'
    preserveAspectRatio='xMidYMid'
  >
    <defs>
      <filter id='editing-hover' x='-100%' y='-100%' width='300%' height='300%'>
        <feFlood floodColor='var(--background4-main)' result='flood'></feFlood>
        <feComposite
          operator='in'
          in2='SourceAlpha'
          in='flood'
          result='shadow'
        ></feComposite>
        <feOffset
          dx='-4.7'
          dy='-4'
          in='SourceGraphic'
          result='offset-1'
        ></feOffset>
        <feOffset dx='4.7' dy='4' in='shadow' result='offset-2'></feOffset>
        <feMerge>
          <feMergeNode in='offset-2'></feMergeNode>
          <feMergeNode in='offset-1'></feMergeNode>
        </feMerge>
      </filter>
    </defs>
    <g filter='url(#editing-hover)'>
      <g transform='translate(14.674976825714111, 111.03500080108643)'>
        <path
          d='M69.71-70.80L69.71-48.78L54.05-48.78L54.05-55.87L48.23-55.87L48.23-14.92L54.60-14.92L54.60 0L16.38 0L16.38-14.92L22.75-14.92L22.75-55.87L16.93-55.87L16.93-48.78L1.27-48.78L1.27-70.80L69.71-70.80ZM128.49-14.92L132.50-14.92L132.50 0L107.56 0L107.56-7.10L107.56-7.10Q101.01 1.27 91.18 1.27L91.18 1.27L91.18 1.27Q83.63 1.27 79.85-3.46L79.85-3.46L79.85-3.46Q76.08-8.19 76.08-16.47L76.08-16.47L76.08-35.67L72.07-35.67L72.07-50.60L97.01-50.60L97.01-20.75L97.01-20.75Q97.01-17.75 98.33-16.33L98.33-16.33L98.33-16.33Q99.65-14.92 102.28-14.92L102.28-14.92L102.28-14.92Q104.92-14.92 106.24-16.33L106.24-16.33L106.24-16.33Q107.56-17.75 107.56-20.75L107.56-20.75L107.56-35.67L102.65-35.67L102.65-50.60L128.49-50.60L128.49-14.92ZM173.90-51.87L173.90-51.87Q175.72-51.87 177.36-51.51L177.36-51.51L177.36-51.51Q179.00-51.14 180.09-50.60L180.09-50.60L180.09-33.21L180.09-33.21Q176.36-34.76 172.08-34.76L172.08-34.76L172.08-34.76Q166.35-34.76 163.25-31.76L163.25-31.76L163.25-31.76Q160.16-28.76 160.16-22.84L160.16-22.84L160.16-14.92L168.35-14.92L168.35 0L135.23 0L135.23-14.92L139.23-14.92L139.23-35.67L135.23-35.67L135.23-50.60L160.16-50.60L160.16-43.95L160.16-43.95Q162.71-47.77 165.98-49.82L165.98-49.82L165.98-49.82Q169.26-51.87 173.90-51.87L173.90-51.87ZM222.04 1.27L222.04 1.27Q217.40 1.27 213.80-1.00L213.80-1.00L213.80-1.00Q210.21-3.28 207.94-6.19L207.94-6.19L207.94 0L183.00 0L183.00-14.92L187.00-14.92L187.00-55.87L183.00-55.87L183.00-70.80L207.94-70.80L207.94-44.41L207.94-44.41Q210.21-47.32 213.80-49.59L213.80-49.59L213.80-49.59Q217.40-51.87 222.04-51.87L222.04-51.87L222.04-51.87Q231.32-51.87 236.01-44.95L236.01-44.95L236.01-44.95Q240.69-38.04 240.69-25.30L240.69-25.30L240.69-25.30Q240.69-12.56 236.01-5.64L236.01-5.64L236.01-5.64Q231.32 1.27 222.04 1.27L222.04 1.27ZM213.21-14.92L213.21-14.92Q215.85-14.92 217.17-16.33L217.17-16.33L217.17-16.33Q218.49-17.75 218.49-20.75L218.49-20.75L218.49-29.85L218.49-29.85Q218.49-32.85 217.17-34.26L217.17-34.26L217.17-34.26Q215.85-35.67 213.21-35.67L213.21-35.67L213.21-35.67Q210.57-35.67 209.25-34.26L209.25-34.26L209.25-34.26Q207.94-32.85 207.94-29.85L207.94-29.85L207.94-20.75L207.94-20.75Q207.94-17.75 209.25-16.33L209.25-16.33L209.25-16.33Q210.57-14.92 213.21-14.92L213.21-14.92ZM270.36 1.27L270.36 1.27Q257.44 1.27 250.16-5.51L250.16-5.51L250.16-5.51Q242.88-12.29 242.88-25.30L242.88-25.30L242.88-25.30Q242.88-38.31 250.16-45.09L250.16-45.09L250.16-45.09Q257.44-51.87 270.36-51.87L270.36-51.87L270.36-51.87Q283.46-51.87 290.65-45.00L290.65-45.00L290.65-45.00Q297.84-38.13 297.84-25.30L297.84-25.30L297.84-25.30Q297.84-12.29 290.56-5.51L290.56-5.51L290.56-5.51Q283.28 1.27 270.36 1.27L270.36 1.27ZM270.36-14.92L270.36-14.92Q273-14.92 274.32-16.33L274.32-16.33L274.32-16.33Q275.64-17.75 275.64-20.75L275.64-20.75L275.64-29.85L275.64-29.85Q275.64-32.85 274.32-34.26L274.32-34.26L274.32-34.26Q273-35.67 270.36-35.67L270.36-35.67L270.36-35.67Q267.72-35.67 266.40-34.26L266.40-34.26L266.40-34.26Q265.08-32.85 265.08-29.85L265.08-29.85L265.08-20.75L265.08-20.75Q265.08-17.75 266.40-16.33L266.40-16.33L266.40-16.33Q267.72-14.92 270.36-14.92L270.36-14.92ZM357.27 0L300.94 0L300.94-14.92L305.49-14.92L305.49-55.87L300.94-55.87L300.94-70.80L339.34-70.80L339.34-55.87L330.97-55.87L330.97-14.92L339.16-14.92L339.16-23.30L357.27-23.30L357.27 0ZM387.30 1.27L387.30 1.27Q374.37 1.27 367.09-5.51L367.09-5.51L367.09-5.51Q359.81-12.29 359.81-25.30L359.81-25.30L359.81-25.30Q359.81-38.31 367.09-45.09L367.09-45.09L367.09-45.09Q374.37-51.87 387.30-51.87L387.30-51.87L387.30-51.87Q400.13-51.87 405.81-45.18L405.81-45.18L405.81-45.18Q411.50-38.49 411.50-28.57L411.50-28.57L411.50-22.02L382.02-22.02L382.02-21.48L382.02-21.48Q382.02-18.11 384.02-16.52L384.02-16.52L384.02-16.52Q386.02-14.92 390.66-14.92L390.66-14.92L390.66-14.92Q396.21-14.92 401.22-15.74L401.22-15.74L401.22-15.74Q406.22-16.56 409.95-17.84L409.95-17.84L409.95-3.28L409.95-3.28Q406.77-1.55 400.63-0.14L400.63-0.14L400.63-0.14Q394.48 1.27 387.30 1.27L387.30 1.27ZM382.02-32.03L392.57-32.03L392.57-33.12L392.57-33.12Q392.57-36.22 391.25-37.58L391.25-37.58L391.25-37.58Q389.93-38.95 387.30-38.95L387.30-38.95L387.30-38.95Q384.66-38.95 383.34-37.54L383.34-37.54L383.34-37.54Q382.02-36.13 382.02-33.12L382.02-33.12L382.02-32.03ZM454.73-26.03L466.47-14.92L469.38-14.92L469.38 0L440.99 0L440.99-14.92L443.53-14.92L439.98-20.29L439.07-20.29L435.53-14.92L438.07-14.92L438.07 0L413.69 0L413.69-14.92L417.51-14.92L428.52-24.75L416.96-35.67L414.05-35.67L414.05-50.60L442.44-50.60L442.44-35.67L439.89-35.67L443.44-30.39L444.35-30.39L447.90-35.67L445.35-35.67L445.35-50.60L469.01-50.60L469.01-35.67L465.19-35.67L454.73-26.03Z'
          // fill='var(--background1-main)'
        ></path>
      </g>
    </g>
    <style>text {}</style>
  </svg>
)
