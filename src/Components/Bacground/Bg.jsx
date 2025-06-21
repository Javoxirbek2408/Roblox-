import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"


export const NetworkBackground = () => {
    const canvasRef = useRef(null)
    const [particles, setParticles] = useState([])
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
    const animationRef = useRef()

    useEffect(() => {
        const updateDimensions = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        updateDimensions()
        window.addEventListener("resize", updateDimensions)

        return () => window.removeEventListener("resize", updateDimensions)
    }, [])

    useEffect(() => {
        if (dimensions.width === 0 || dimensions.height === 0) return

        const particleCount = Math.floor((dimensions.width * dimensions.height) / 15000)
        const newParticles = []

        for (let i = 0; i < particleCount; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 3 + 2,
            })
        }

        setParticles(newParticles)
    }, [dimensions])

    useEffect(() => {
        if (!particles.length) return

        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        canvas.width = dimensions.width
        canvas.height = dimensions.height

        const animate = () => {
            ctx.clearRect(0, 0, dimensions.width, dimensions.height)

            // Update particle positions
            setParticles((prevParticles) =>
                prevParticles.map((particle) => {
                    let newX = particle.x + particle.vx
                    let newY = particle.y + particle.vy
                    let newVx = particle.vx
                    let newVy = particle.vy

                    // Bounce off edges
                    if (newX <= 0 || newX >= dimensions.width) {
                        newVx = -newVx
                        newX = Math.max(0, Math.min(dimensions.width, newX))
                    }
                    if (newY <= 0 || newY >= dimensions.height) {
                        newVy = -newVy
                        newY = Math.max(0, Math.min(dimensions.height, newY))
                    }

                    return {
                        ...particle,
                        x: newX,
                        y: newY,
                        vx: newVx,
                        vy: newVy,
                    }
                }),
            )

            animationRef.current = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [particles.length, dimensions])

    useEffect(() => {
        if (!particles.length) return

        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const maxDistance = 120

        // Draw connections
        ctx.strokeStyle = "rgba(255, 255, 0, 0.3)"
        ctx.lineWidth = 0.5

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x
                const dy = particles[i].y - particles[j].y
                const distance = Math.sqrt(dx * dx + dy * dy)

                if (distance < maxDistance) {
                    const opacity = (maxDistance - distance) / maxDistance
                    ctx.strokeStyle = `rgba(255, 255, 0, ${opacity * 0.3})`
                    ctx.beginPath()
                    ctx.moveTo(particles[i].x, particles[i].y)
                    ctx.lineTo(particles[j].x, particles[j].y)
                    ctx.stroke()
                }
            }
        }

        ctx.fillStyle = "#FFFF00"
        particles.forEach((particle) => {
            ctx.beginPath()
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
            ctx.fill()
        })
    }, [particles])


    return (
        <div className="fixed inset-0 bg-black overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ background: "transparent" }} />

            <div className="absolute inset-0 pointer-events-none">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute bg-yellow-400 rounded-full"
                        style={{
                            width: particle.size * 2,
                            height: particle.size * 2,
                            left: particle.x - particle.size,
                            top: particle.y - particle.size,
                        }}
                        animate={{
                            x: [0, particle.vx * 100, 0],
                            y: [0, particle.vy * 100, 0],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                            ease: "linear",
                        }}
                    />
                ))}
            </div>
        </div>
    )
}