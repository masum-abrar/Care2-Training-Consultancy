import React, { useEffect, useRef } from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const particles = [];
    const colors = ["#ffffff", "#bbbbbb", "#999999"];
    const numParticles = 100;
    const maxRadius = 3;

    // Resize canvas to fit the footer
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Handle window resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle class
    class Particle {
      constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
      }
    }

    // Initialize particles
    for (let i = 0; i < numParticles; i++) {
      const radius = Math.random() * maxRadius;
      const x = Math.random() * (canvas.width - radius * 2) + radius;
      const y = Math.random() * (canvas.height - radius * 2) + radius;
      const dx = (Math.random() - 0.5) * 2;
      const dy = (Math.random() - 0.5) * 2;
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push(new Particle(x, y, dx, dy, radius, color));
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => particle.update());
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer className="relative text-white bg-slate-950">
      {/* Canvas for Particle Effect */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full"></canvas>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Details */}
        <div>
          <h3 className="font-bold text-xl mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>121 Rock Street, 21 Avenue</li>
            <li>New York, NY 92103</li>
            <li>Phone: (123) 456-7890</li>
            <li>Email: care2@gmail.com</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <h3 className="font-bold text-xl mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-2xl hover:text-gray-300 transition">
              <FaFacebook />
            </a>
            <a href="#" className="text-2xl hover:text-gray-300 transition">
              <FaTwitter />
            </a>
            <a href="#" className="text-2xl hover:text-gray-300 transition">
              <FaInstagram />
            </a>
            <a href="#" className="text-2xl hover:text-gray-300 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Legal Links */}
        <div className="text-right">
          <h3 className="font-bold text-xl mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 text-center py-4 border-t border-gray-300 border-opacity-50">
        <p className="text-sm">&copy; 2025 YourCompany. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
