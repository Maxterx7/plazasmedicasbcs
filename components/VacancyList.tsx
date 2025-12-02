import React, { useState } from 'react';
import { VACANCIES, LOCATIONS } from '../constants';
import { Vacancy } from '../types';
import { BriefcaseMedical, Clock, MapPin } from 'lucide-react';

const VacancyList: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>(LOCATIONS[0].name);

  const filteredVacancies = VACANCIES.filter(v => v.location === selectedLocation);

  return (
    <div className="w-full bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200">
      <div className="bg-imss-green text-white p-6">
        <h3 className="text-2xl font-bold flex items-center gap-2">
          <BriefcaseMedical className="w-6 h-6" />
          Vacantes Disponibles
        </h3>
        <p className="text-imss-light opacity-90">Selecciona una localidad para ver las plazas disponibles.</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap border-b border-gray-200 bg-gray-50">
        {LOCATIONS.map((loc) => (
          <button
            key={loc.name}
            onClick={() => setSelectedLocation(loc.name)}
            className={`flex-1 py-4 px-2 text-sm md:text-base font-medium transition-colors duration-200 min-w-[120px]
              ${selectedLocation === loc.name 
                ? 'bg-white text-imss-green border-t-4 border-imss-green shadow-sm' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
          >
            {loc.name}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="p-4 md:p-8 min-h-[400px]">
        <div className="flex justify-between items-center mb-6">
           <h4 className="text-xl font-bold text-gray-800">{selectedLocation}</h4>
           <span className="bg-bcs-ocean/10 text-bcs-ocean text-sm px-3 py-1 rounded-full font-semibold">
             {filteredVacancies.length} Plazas
           </span>
        </div>
       
        {filteredVacancies.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-500 border-b border-gray-200 text-sm uppercase tracking-wider">
                  <th className="py-3 px-4 font-semibold">No. Plaza</th>
                  <th className="py-3 px-4 font-semibold">Especialidad</th>
                  <th className="py-3 px-4 font-semibold">Turno</th>
                  <th className="py-3 px-4 font-semibold text-center">Estatus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredVacancies.map((vacancy) => (
                  <tr key={`${vacancy.id}-${vacancy.specialty}`} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-mono text-gray-600 font-medium">#{vacancy.id}</td>
                    <td className="py-4 px-4 font-bold text-imss-green">{vacancy.specialty}</td>
                    <td className="py-4 px-4 flex items-center gap-2 text-gray-700">
                      <Clock className="w-4 h-4 text-gray-400" />
                      {vacancy.shift}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-block px-3 py-1 text-xs font-bold text-green-700 bg-green-100 rounded-full">
                        DISPONIBLE
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            No hay vacantes listadas para esta ubicación en este momento.
          </div>
        )}
      </div>
    </div>
  );
};

export default VacancyList;