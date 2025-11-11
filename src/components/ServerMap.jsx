import { useEffect, useRef } from 'react'

export default function ServerMap() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let dpr = window.devicePixelRatio || 1

    function resize() {
      const { width } = canvas.getBoundingClientRect()
      canvas.width = width * dpr
      canvas.height = (width * 0.5) * dpr
      draw()
    }

    const nodes = Array.from({ length: 40 }).map(() => ({
      x: Math.random(),
      y: Math.random()*0.6 + 0.2,
      r: Math.random()*2 + 1,
      t: Math.random()*Math.PI*2
    }))

    function draw() {
      ctx.clearRect(0,0,canvas.width, canvas.height)
      ctx.fillStyle = '#0b0e14'
      ctx.fillRect(0,0,canvas.width, canvas.height)

      // subtle grid
      for (let i=0; i<canvas.width; i+=40*dpr){
        ctx.fillStyle = 'rgba(255,255,255,0.02)'
        ctx.fillRect(i,0,1,canvas.height)
      }

      nodes.forEach((n,i) => {
        n.t += 0.01
        const x = n.x*canvas.width + Math.sin(n.t+i)*8
        const y = n.y*canvas.height + Math.cos(n.t+i)*8

        // glow
        const grad = ctx.createRadialGradient(x,y,0,x,y,20)
        grad.addColorStop(0,'rgba(34,211,238,0.8)')
        grad.addColorStop(1,'rgba(34,211,238,0)')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(x,y,n.r*2,0,Math.PI*2)
        ctx.fill()

        // node
        ctx.fillStyle = '#67e8f9'
        ctx.beginPath()
        ctx.arc(x,y,n.r,0,Math.PI*2)
        ctx.fill()
      })

      // connect
      ctx.strokeStyle = 'rgba(56,189,248,0.25)'
      nodes.forEach((a, i) => {
        nodes.forEach((b, j) => {
          if (i<j){
            const ax = a.x*canvas.width, ay=a.y*canvas.height
            const bx = b.x*canvas.width, by=b.y*canvas.height
            const dist = Math.hypot(ax-bx, ay-by)
            if (dist < 180){
              ctx.globalAlpha = 1 - dist/180
              ctx.beginPath()
              ctx.moveTo(ax, ay)
              ctx.lineTo(bx, by)
              ctx.stroke()
              ctx.globalAlpha = 1
            }
          }
        })
      })

      requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <section className="bg-black py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-5xl font-bold mb-6">Global Server Network</h2>
        <p className="text-white/70 mb-8">Live visualization of active nodes across 80+ countries.</p>
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <canvas ref={canvasRef} className="w-full block"/>
        </div>
      </div>
    </section>
  )
}
