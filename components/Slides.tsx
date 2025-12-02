import React from 'react';
import { 
  MapPin, ShieldCheck, Sun, TrendingUp, Users, 
  Target, Image, Phone, Mail, Building2, Clock, DollarSign,
  ExternalLink
} from 'lucide-react';
import { LOCATIONS, VACANCIES } from '../constants';
import { Vacancy } from '../types';

interface SlideProps {
  active: boolean;
}

// --- 1. TITLE SLIDE (Premium Hero Style - Clean) ---
export const TitleSlide: React.FC<SlideProps> = ({ active }) => (
  <div className={`w-full h-full relative overflow-hidden transition-opacity duration-700 ${active ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
    {/* Background Image with Overlay */}
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop" 
        alt="Medical Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-imss-green via-imss-green/90 to-transparent"></div>
    </div>

    {/* Content */}
    <div className="relative z-10 w-full h-full flex flex-col justify-center px-6 md:px-24 text-white">
      <div className="max-w-4xl space-y-6">
        <div className="inline-block border-l-4 border-imss-gold pl-4 animate-[fadeInRight_1s_ease-out]">
          <h2 className="text-imss-gold font-bold tracking-[0.2em] uppercase text-sm md:text-base">
            DRAFT 2026
          </h2>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight animate-[fadeInUp_1s_ease-out_0.2s_both]">
          IMSS <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Baja California Sur
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl animate-[fadeInUp_1s_ease-out_0.4s_both]">
          Construye aquí tu mejor vida profesional. <br/>
          <span className="font-semibold text-white">Plazas para Médicos Especialistas.</span>
        </p>
      </div>
    </div>
  </div>
);

// --- 2. SALARY SLIDE (Updated Text) ---
export const SalarySlide: React.FC<SlideProps> = ({ active }) => (
  <div className={`w-full h-full flex flex-col items-center bg-gray-50 transition-opacity duration-500 overflow-y-auto ${active ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
    <div className="w-full max-w-7xl px-4 py-8 md:py-12 mx-auto flex flex-col h-full">
      <h2 className="text-3xl md:text-4xl font-bold text-imss-green mb-8 text-center uppercase tracking-tight">
        Propuesta Económica Mensual
      </h2>
      
      <div className="grid lg:grid-cols-12 gap-6 flex-1">
        
        {/* Left: Monthly Breakdown */}
        <div className="lg:col-span-7 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col">
          <div className="bg-imss-green p-4 md:p-6 text-white flex justify-between items-center">
             <h3 className="text-xl font-bold">Percepciones Mensuales</h3>
             <span className="text-xs bg-white/20 px-2 py-1 rounded">Neto Estimado</span>
          </div>
          <div className="p-6 flex-1 overflow-auto">
             <table className="w-full text-sm md:text-base">
               <tbody>
                  {[
                    ["Sueldo Tabular", "$12,844.20"],
                    ["Ayuda de Renta (Cláusula 63 Bis B)", "$10,551.52"],
                    ["Concepto 15", "$11,697.86"],
                    ["Sobresueldo (Zona Aislada)", "$4,679.14"],
                    ["Estímulos (Asistencia/Puntualidad)", "$14,544.30"],
                    ["Atención Integral Continua", "$3,860.30"],
                    ["Otros bonos y ayudas", "$5,619.56"],
                  ].map(([label, val], i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="py-3 text-gray-600">{label}</td>
                      <td className="py-3 text-right font-bold text-gray-800">{val}</td>
                    </tr>
                  ))}
               </tbody>
             </table>
             <div className="mt-4 pt-4 border-t border-red-100 flex justify-between text-red-500 text-sm">
                <span>(-) Deducciones Aprox.</span>
                <span>$16,389.50</span>
             </div>
          </div>
          <div className="bg-gray-50 p-6 border-t flex justify-between items-center">
             <span className="text-gray-500 font-medium">Total Mensual Neto</span>
             <span className="text-3xl font-extrabold text-imss-green">$47,407.38</span>
          </div>
        </div>

        {/* Right: Annual & Highlights */}
        <div className="lg:col-span-5 flex flex-col gap-6">
           <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex-1">
              <h3 className="text-lg font-bold text-bcs-ocean mb-4 flex items-center gap-2">
                 <DollarSign className="w-5 h-5" />
                 Beneficios Anuales
              </h3>
              <div className="space-y-4">
                 <div className="flex justify-between items-center bg-blue-50 p-3 rounded-lg">
                    <span className="text-gray-700">Aguinaldo</span>
                    <span className="font-bold text-blue-900">$125,313.42</span>
                 </div>
                 <div className="flex justify-between items-center bg-blue-50 p-3 rounded-lg">
                    <span className="text-gray-700">Fondo de Ahorro</span>
                    <span className="font-bold text-blue-900">$33,840.25</span>
                 </div>
                 <div className="mt-4 pt-4 border-t flex justify-between text-bcs-ocean font-bold text-xl">
                    <span>Total Anual Bruto</span>
                    <span>$195,120.93</span>
                 </div>
              </div>
           </div>

           <div className="bg-gradient-to-r from-imss-gold to-yellow-600 rounded-2xl shadow-lg p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
              <h3 className="text-xl font-bold mb-2">Beneficio Especial</h3>
              <p className="opacity-90 leading-relaxed">
                 BCS es de los <span className="font-black bg-white/20 px-1 rounded">pocos estados</span> que otorga 50% de sobresueldo por Zona Aislada. Un incentivo superior al promedio nacional.
              </p>
           </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 3. BENEFITS SLIDE (Classic Grid Style) ---
export const BenefitsSlide: React.FC<SlideProps> = ({ active }) => (
    <div className={`w-full h-full flex flex-col items-center justify-center p-6 bg-white transition-opacity duration-500 overflow-y-auto ${active ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
        <div className="max-w-6xl w-full my-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Más que un trabajo</h2>
            <p className="text-gray-500 text-lg">Descubre por qué Baja California Sur es el lugar ideal para ti.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: ShieldCheck, title: "Seguridad Total", text: "Uno de los estados más seguros de México.", color: "text-blue-600" },
                { icon: Sun, title: "Calidad de Vida", text: "Aire puro, playas y contacto con la naturaleza.", color: "text-orange-600" },
                { icon: TrendingUp, title: "Desarrollo", text: "Crecimiento continuo en tu carrera médica.", color: "text-green-600" },
                { icon: Target, title: "Desafío Profesional", text: "Casos clínicos diversos y enriquecedores.", color: "text-purple-600" },
                { icon: Users, title: "Ambiente Familiar", text: "Comunidades acogedoras e ideales para familias.", color: "text-pink-600" },
                { icon: MapPin, title: "Destino Turístico", text: "Vive donde otros solo vienen de vacaciones.", color: "text-teal-600" },
              ].map((item, idx) => (
                 <div key={idx} className="bg-white border-l-4 border-gray-200 hover:border-imss-green rounded-r-xl p-6 shadow-md transition-all duration-300">
                    <div className={`mb-4 ${item.color}`}>
                       <item.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                 </div>
              ))}
          </div>
        </div>
    </div>
);

// --- 4. LOCATIONS SLIDE (Text Only - No Images) ---
export const LocationsSlide: React.FC<SlideProps> = ({ active }) => (
    <div className={`w-full h-full flex flex-col bg-gray-50 transition-opacity duration-500 ${active ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
        <div className="py-8 text-center flex-none bg-white shadow-sm z-10">
           <h2 className="text-2xl md:text-3xl font-bold text-imss-green uppercase tracking-widest">Nuestras Sedes</h2>
           <p className="text-gray-500 mt-2">Hospitales y Unidades en ubicaciones privilegiadas</p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 md:p-12 pb-32">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {LOCATIONS.map((loc, idx) => (
                 <div key={idx} className="bg-white rounded-xl p-8 shadow-md border border-gray-100 flex flex-col hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-imss-light rounded-full text-imss-green">
                            <MapPin size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">{loc.name}</h3>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                        {loc.description}
                    </p>

                    <a 
                        href={loc.tourismUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gray-900 text-white rounded-lg hover:bg-imss-gold transition-colors font-medium text-sm"
                    >
                        <ExternalLink size={16} />
                        Ver Galería de Fotos
                    </a>
                 </div>
              ))}
           </div>
        </div>
    </div>
);

// --- 5. VACANCY SLIDE (Horizontal Scrolling Table) ---
export const VacancySlide: React.FC<SlideProps & { location: string }> = ({ active, location }) => {
    const vacancies = VACANCIES.filter(v => v.location === location);
    const groupedVacancies: { [key: string]: Vacancy[] } = {};
    
    vacancies.forEach(v => {
      const unit = v.medicalUnit || "Unidad General";
      if (!groupedVacancies[unit]) groupedVacancies[unit] = [];
      groupedVacancies[unit].push(v);
    });
    
    return (
        <div className={`w-full h-full flex flex-col bg-white transition-opacity duration-500 ${active ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
            {/* Header */}
            <div className="bg-slate-900 text-white p-6 md:p-10 flex-none shadow-lg">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <div className="flex items-center gap-2 text-imss-gold mb-1 text-sm font-bold uppercase tracking-widest">
                           <MapPin size={16} /> Ubicación
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold">{location}</h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                           <p className="text-2xl font-bold">{vacancies.length}</p>
                           <p className="text-xs text-gray-400 uppercase">Vacantes</p>
                        </div>
                        <div className="w-px h-10 bg-gray-700"></div>
                        <div className="text-right">
                           <p className="text-lg font-bold text-red-400">Sin Candidato</p>
                           <p className="text-xs text-gray-400 uppercase">Estatus</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content with Horizontal Scroll Fix */}
            <div className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-8 pb-32">
               <div className="max-w-7xl mx-auto space-y-8">
                  {Object.entries(groupedVacancies).map(([unit, unitVacancies]) => (
                     <div key={unit} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="bg-white p-4 border-b border-gray-100 flex items-center gap-2">
                           <Building2 className="text-imss-green" />
                           <h3 className="font-bold text-gray-800 text-lg">{unit}</h3>
                        </div>
                        
                        {/* CRITICAL: Wrapper for Horizontal Scroll */}
                        <div className="overflow-x-auto w-full">
                           <table className="w-full min-w-[1000px] md:min-w-full text-left border-collapse">
                              <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-bold tracking-wider">
                                 <tr>
                                    <th className="py-4 px-6">No.</th>
                                    <th className="py-4 px-6">Especialidad</th>
                                    <th className="py-4 px-6">Turno</th>
                                    <th className="py-4 px-6">Tipo Contrato</th>
                                 </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-50">
                                 {unitVacancies.map(v => (
                                    <tr key={v.id + v.specialty} className="hover:bg-blue-50/50 transition-colors">
                                       <td className="py-4 px-6 font-mono text-gray-400">#{v.id}</td>
                                       <td className="py-4 px-6 font-bold text-imss-green text-lg">{v.specialty}</td>
                                       <td className="py-4 px-6 text-gray-600 flex items-center gap-2">
                                          <Clock size={16} className="text-gray-400" />
                                          {v.shift}
                                       </td>
                                       <td className="py-4 px-6">
                                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${v.contractType === 'Definitiva' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                                             {v.contractType}
                                          </span>
                                          {v.contractDetail && (
                                             <div className="text-xs text-gray-400 mt-1 ml-1">{v.contractDetail}</div>
                                          )}
                                       </td>
                                    </tr>
                                 ))}
                              </tbody>
                           </table>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
        </div>
    );
};

// --- 6. CLOSING SLIDE (Updated Contact) ---
export const ClosingSlide: React.FC<SlideProps> = ({ active }) => (
    <div className={`w-full h-full flex flex-col bg-slate-900 text-white transition-opacity duration-500 overflow-y-auto ${active ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
             <div className="w-20 h-20 bg-imss-green rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-imss-green/20">
                <Users size={40} className="text-white" />
             </div>
             
             <h2 className="text-4xl md:text-6xl font-bold mb-6">Únete al Equipo</h2>
             <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed mb-12">
                "En Baja California Sur te ofrecemos estabilidad laboral, crecimiento y un entorno único para tu familia."
             </p>

             <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
                 <div className="text-center md:text-left">
                    <p className="text-2xl font-bold mb-2 text-white">Marco A. Sandoval</p>
                    <a href="tel:6151110544" className="block text-xl text-imss-gold font-bold hover:underline mb-1">615 11 1 05 44</a>
                    <a href="mailto:marco.sandovalj@imss.gob.mx" className="block text-lg text-white opacity-80 hover:opacity-100">marco.sandovalj@imss.gob.mx</a>
                 </div>
                 <div className="text-center md:text-left border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
                    <p className="text-2xl font-bold mb-2 text-white">Genoveva Cota</p>
                    <a href="tel:6121416544" className="block text-xl text-imss-gold font-bold hover:underline mb-1">612 14 1 65 44</a>
                    <a href="mailto:genoveva.cota@imss.gob.mx" className="block text-lg text-white opacity-80 hover:opacity-100">genoveva.cota@imss.gob.mx</a>
                 </div>
             </div>
        </div>
        <div className="p-6 text-center text-gray-600 text-sm">
           IMSS Baja California Sur © 2024
        </div>
    </div>
);