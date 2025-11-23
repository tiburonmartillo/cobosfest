import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Code, Palette, Clock, CheckCircle2, Brain } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import LogoAdnACorto from '../imports/LogoAdnACorto';
import beforeImage from '../assets/e38d6271b9c67f390110f8962edb49c5d0ab0c61.png';
import afterImage from '../assets/de60ffc62a98ebea5d3bd70bd56d5762224586bc.png';
import fotocaminantesLogo from '../assets/fotocaminantes .png';
import logoAdnA from '../assets/Logo ADN-A completo.png';
import logoImep from '../assets/para fondo claro.png';
import logoMapeo from '../assets/mapeo.png';
import myPhoto from '../assets/pic.jpg';

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'title',
      content: <TitleSlide />
    },
    {
      id: 'about',
      content: <AboutMeSlide />
    },
    {
      id: 'problem',
      content: <ProblemSlide />
    },
    {
      id: 'solution',
      content: <SolutionSlide />
    },
    {
      id: 'ai-design',
      content: <AIDesignSlide />
    },
    {
      id: 'ai-development',
      content: <AIDevelopmentSlide />
    },
    {
      id: 'timeline',
      content: <TimelineSlide />
    },
    {
      id: 'conclusion',
      content: <ConclusionSlide />
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 flex flex-col">
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full bg-white rounded-2xl shadow-2xl ">
          <div className="relative w-full h-full flex items-center justify-center p-12">
            {slides[currentSlide].content}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="pb-8 flex items-center justify-center gap-6">
        <Button
          onClick={prevSlide}
          variant="outline"
          size="icon"
          className="bg-white/90 hover:bg-white border-white/50"
        >
          <ChevronLeft className="size-5" />
        </Button>

        {/* Slide Indicators */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 w-2 hover:bg-white/70'
              }`}
              aria-label={`Ir a diapositiva ${index + 1}`}
            />
          ))}
        </div>

        <Button
          onClick={nextSlide}
          variant="outline"
          size="icon"
          className="bg-white/90 hover:bg-white border-white/50"
        >
          <ChevronRight className="size-5" />
        </Button>
      </div>

      {/* Slide Counter */}
      <div className="pb-4 text-center text-white/80">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}

function TitleSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
      <div className="w-64 h-auto mb-4">
        <LogoAdnACorto />
      </div>
      <h1 className="text-5xl max-w-4xl bg-clip-text text-[rgb(61,83,221)] px-[0px] py-[52px] pt-[52px] pr-[0px] pb-[36px] pl-[0px]">
        El uso de la IA para la protección del Ambiente en Aguascalientes
      </h1>
      <h3 className="text-3xl text-gray-500 max-w-2xl">
        Sergio Villanueva
      </h3>
      <p className="text-xl text-gray-500 max-w-2xl">
        Transformación digital de los Boletines SSMAA con inteligencia artificial
      </p>
    </div>
  );
}

function AboutMeSlide() {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full px-8">
        {/* Foto y contenido */}
        <div className="flex flex-row gap-8 mb-8 items-start">
          {/* Foto a la izquierda */}
          <div className="flex-shrink-0">
            <ImageWithFallback
              src={myPhoto}
              alt="Sergio Villanueva"
              className="w-64 h-64 rounded-full object-cover border-4 border-blue-200 shadow-lg"
            />
          </div>
          
          {/* Nombre, título y colaboraciones a la derecha */}
          <div className="flex-1 flex flex-col">
            {/* Nombre y título */}
            <div className="mb-6">
              <h2 className="text-5xl text-gray-800 mb-3 font-bold">
                Sergio Villanueva
              </h2>
              <p className="text-2xl text-gray-600 mb-6">
                Diseñador de productos digitales
              </p>
            </div>

            {/* Colaboraciones */}
            <div>
              
              <ul className="space-y-3 text-xl text-gray-700 list-disc list-inside">
                <li>
                  Colaboro como diseñador en <strong>IMEPP</strong>
                </li>
                <li>
                  Comunicación y diseño de plataformas <strong>ADN-Ags</strong> y <strong>Mapeo Verde</strong>
                </li>
                <li>
                  <strong>Fotocaminante</strong> en Fotocaminantes
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-center h-20">
            <ImageWithFallback
              src={logoImep}
              alt="IMEPP"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-20">
            <ImageWithFallback
              src={logoAdnA}
              alt="ADN-Ags"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-20">
            <ImageWithFallback
              src={logoMapeo}
              alt="Mapeo Verde"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-8">
            <ImageWithFallback
              src={fotocaminantesLogo}
              alt="Fotocaminantes"
              className="h-14 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProblemSlide() {
  return (
    <div className="h-full flex flex-col">
      <div className="text-center mb-6">
        <h2 className="text-4xl text-gray-800 mb-3">El Problema</h2>
        <p className="text-xl text-gray-600">Navegación limitada en archivos PDF</p>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <ImageWithFallback
            src={beforeImage}
            alt="Página anterior con solo PDFs"
            className="w-full h-auto rounded-lg shadow-lg border-4 border-red-200"
          />
            <a className="bg-blue-500 text-white px-4 py-2 rounded-md block w-full text-center"  href="https://www.aguascalientes.gob.mx/SSMAA/BoletinesSMA/usuario_webexplorer.asp">Boletines SSMAA</a>
          <div className="mt-6 bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <p className="text-gray-700">
              ❌ Solo listado de carpetas por año<br />
              ❌ Sin funciones de búsqueda<br />
              ❌ Difícil acceso a información específica
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SolutionSlide() {
  return (
    <div className="h-full flex flex-col">
      <div className="text-center mb-6">
        <h2 className="text-4xl text-gray-800 mb-3">La Solución</h2>
        <p className="text-xl text-gray-600">Plataforma interactiva con búsqueda avanzada</p>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <ImageWithFallback
            src={afterImage}
            alt="Nueva página con buscador y mapa"
            className="w-full h-auto rounded-lg shadow-lg border-4 border-green-200"
          />
<a className="bg-blue-500 text-white px-4 py-2 rounded-md block w-full text-center"  href="https://adn-a.org/">Página ADN-Ags</a>
          <div className="mt-6 bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="text-gray-700">
              ✅ Búsqueda por proyecto, promovente y ubicación<br />
              ✅ Mapa interactivo de proyectos<br />
              ✅ Acceso rápido y eficiente a información ambiental<br />
              ✅ Suscripción para recibir resumen semanal del boletín ambiental
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AIDesignSlide() {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
          <Palette className="size-8 text-purple-600" />
        </div>
        <h2 className="text-4xl text-gray-800 mb-3">IA en el Diseño</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border-2 border-purple-200">
          <h3 className="text-2xl text-gray-800 mb-4">Análisis de Usabilidad</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-purple-600 flex-shrink-0 mt-1" />
              <span>La IA analizó patrones de navegación óptimos</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-purple-600 flex-shrink-0 mt-1" />
              <span>Generó propuestas de interfaz adaptadas al usuario</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-purple-600 flex-shrink-0 mt-1" />
              <span>Sugirió la integración del mapa interactivo</span>
            </li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl border-2 border-blue-200">
          <h3 className="text-2xl text-gray-800 mb-4">Optimización Visual</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-blue-600 flex-shrink-0 mt-1" />
              <span>Paleta de colores basada en psicología ambiental</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-blue-600 flex-shrink-0 mt-1" />
              <span>Layout responsive generado automáticamente</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-blue-600 flex-shrink-0 mt-1" />
              <span>Jerarquía visual optimizada por IA</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function AIDevelopmentSlide() {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          <Code className="size-8 text-blue-600" />
        </div>
        <h2 className="text-4xl text-gray-800 mb-3">IA en la Programación</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200">
          <h3 className="text-2xl text-gray-800 mb-4">Generación de Código</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-blue-600 flex-shrink-0 mt-1" />
              <span>Componentes React generados automáticamente</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-blue-600 flex-shrink-0 mt-1" />
              <span>Sistema de búsqueda inteligente implementado</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-blue-600 flex-shrink-0 mt-1" />
              <span>Integración de API de mapas optimizada</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-blue-600 flex-shrink-0 mt-1" />
              <span>Sistema de suscripción a resúmenes semanales</span>
            </li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200">
          <h3 className="text-2xl text-gray-800 mb-4">Optimización</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-green-600 flex-shrink-0 mt-1" />
              <span>Código limpio y mantenible desde el inicio</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-green-600 flex-shrink-0 mt-1" />
              <span>Sugerencias de performance en tiempo real</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-green-600 flex-shrink-0 mt-1" />
              <span>Debugging asistido por IA</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function TimelineSlide() {
  return (
    <div className="h-full flex flex-col justify-center px-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
          <Clock className="size-8 text-orange-600" />
        </div>
        <h2 className="text-4xl text-gray-800 mb-3">Línea de Tiempo del Proyecto</h2>
      </div>
      <div className="max-w-6xl mx-auto w-full">
        <div className="relative">
          {/* Timeline Line Horizontal */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 via-green-300 to-purple-300 transform -translate-y-1/2" />
          
          {/* Timeline Items */}
          <div className="relative flex justify-between items-center">
            {/* Item 1 */}
            <div className="flex flex-col items-center w-1/3">
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200 mb-4">
                <h3 className="text-2xl text-gray-800 mb-2">Recopilación de Datos</h3>
                <p className="text-gray-600">Análisis de información ambiental</p>
                <div className="mt-3 inline-flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full">
                  <Clock className="size-4 text-blue-600" />
                  <span className="text-blue-700">10 meses</span>
                </div>
              </div>
              <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white z-10 shadow-lg" />
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center w-1/3">
              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200 mb-4">
                <h3 className="text-2xl text-gray-800 mb-2">Desarrollo con IA</h3>
                <p className="text-gray-600">Diseño + Programación completa</p>
                <div className="mt-3 inline-flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
                  <Sparkles className="size-4 text-green-600" />
                  <span className="text-green-700">3 días</span>
                </div>
              </div>
              <div className="w-6 h-6 bg-green-500 rounded-full border-4 border-white z-10 shadow-lg" />
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center w-1/3">
              <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200 mb-4">
                <h3 className="text-2xl text-gray-800 mb-2">Resultado</h3>
                <p className="text-gray-600">Plataforma funcional y optimizada</p>
                <div className="mt-3 inline-flex items-center gap-2 bg-purple-100 px-3 py-1 rounded-full">
                  <CheckCircle2 className="size-4 text-purple-600" />
                  <span className="text-purple-700">Éxito</span>
                </div>
              </div>
              <div className="w-6 h-6 bg-purple-500 rounded-full border-4 border-white z-10 shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConclusionSlide() {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center space-y-8">
      <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mb-4">
        <Brain className="size-12 text-white" />
      </div>
      <h2 className="text-5xl text-gray-800">Conclusión</h2>
      <div className="max-w-4xl space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl border-2 border-blue-200">
          <p className="text-3xl text-gray-800">
            "La IA es una herramienta poderosa que amplifica nuestras capacidades,
          pero la visión y el propósito humano siguen siendo esenciales."
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-xl text-gray-800 mb-2">Velocidad</h3>
            <p className="text-gray-600">3 días de desarrollo vs. meses tradicionales</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-100">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-xl text-gray-800 mb-2">Precisión</h3>
            <p className="text-gray-600">Soluciones optimizadas desde el inicio</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-100">
            <div className="text-4xl mb-3">🌱</div>
            <h3 className="text-xl text-gray-800 mb-2">Impacto</h3>
            <p className="text-gray-600">Mejor acceso a información ambiental</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-orange-100">
            <div className="text-4xl mb-3">📧</div>
            <h3 className="text-xl text-gray-800 mb-2">Comunicación</h3>
            <p className="text-gray-600">Resúmenes semanales directos al correo</p>
          </div>
        </div>
       
      </div>
    </div>
  );
}