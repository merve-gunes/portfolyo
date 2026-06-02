import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './LiquidEther.css';

function LiquidEther({ colors = ['#FFDCDC', '#BDE0FE', '#FFC6FF', '#A0C4FF'] }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    
    // Set up standard Three.js boilerplate
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false });
    
    // Cap pixel ratio at 2 for better performance
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create shader material geometry
    const geometry = new THREE.PlaneGeometry(2, 2);

    // Parse colors to THREE.Color
    const parsedColors = colors.map(c => new THREE.Color(c));

    // Custom fluid noise GLSL fragment shader
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec3 u_color1;
      uniform vec3 u_color2;
      uniform vec3 u_color3;
      uniform vec3 u_color4;
      varying vec2 vUv;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
                   mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        vec2 shift = vec2(100.0);
        // Rotate noise to avoid axial alignment artifacting
        mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
        for (int i = 0; i < 4; ++i) {
          v += a * noise(p);
          p = rot * p * 2.0 + shift;
          a *= 0.5;
        }
        return v;
      }

      void main() {
        // Safe aspect ratio UV coords
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        
        // Fluid domain warping simulation
        vec2 q = vec2(0.0);
        q.x = fbm(uv * 2.5 + vec2(0.0, u_time * 0.03));
        q.y = fbm(uv * 2.5 + vec2(1.0, u_time * 0.02));
        
        vec2 r = vec2(0.0);
        r.x = fbm(uv * 2.5 + 4.0 * q + vec2(1.7, 9.2 + u_time * 0.01));
        r.y = fbm(uv * 2.5 + 4.0 * q + vec2(8.3, 2.8 + u_time * 0.008));
        
        float f = fbm(uv * 1.8 + 4.0 * r);
        
        // Mix the four vibrant pastel colors based on noise density
        vec3 col = mix(u_color1, u_color2, clamp(f * 1.5, 0.0, 1.0));
        col = mix(col, u_color3, clamp(length(q), 0.0, 1.0));
        col = mix(col, u_color4, clamp(r.x, 0.0, 1.0));
        
        // Add smooth highlights
        col += vec3(0.08) * f;
        
        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const uniforms = {
      u_time: { value: 0.0 },
      u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      u_color1: { value: parsedColors[0] || new THREE.Color('#FFDCDC') },
      u_color2: { value: parsedColors[1] || new THREE.Color('#BDE0FE') },
      u_color3: { value: parsedColors[2] || new THREE.Color('#FFC6FF') },
      u_color4: { value: parsedColors[3] || new THREE.Color('#A0C4FF') },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      depthWrite: false,
      depthTest: false
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Anim loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      uniforms.u_time.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      uniforms.u_resolution.value.set(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [colors]);

  return <canvas ref={canvasRef} className="liquid-ether-canvas" />;
}

export default LiquidEther;
