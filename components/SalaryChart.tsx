import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Sueldo Base', value: 6422.10 },
  { name: 'Zona Aislada', value: 5848.93 },
  { name: 'Otras Percepciones', value: 12355.26 },
  { name: 'Estímulos', value: 7272.15 },
  // Calculated remainder to reach total of 63796.88
  // 63796.88 - (6422.10 + 5848.93 + 12355.26 + 7272.15) = 31898.44
  { name: 'Bonos/Compensación Complementaria', value: 31898.44 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const SalaryChart: React.FC = () => {
  return (
    <div className="w-full h-[400px] bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
      <h3 className="text-xl font-bold text-gray-700 mb-4">Composición Mensual Aproximada</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => `$${value.toLocaleString('es-MX', { minimumFractionDigits: 2 })}`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <p className="text-xs text-gray-400 mt-2 text-center italic">*Cifras estimadas sujetas a tabulador vigente y condiciones contractuales.</p>
    </div>
  );
};

export default SalaryChart;