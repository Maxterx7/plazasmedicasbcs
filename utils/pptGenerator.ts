import { LOCATIONS, VACANCIES } from "../constants";
import { Vacancy } from "../types";

// Access the global PptxGenJS variable loaded via script tag
declare const PptxGenJS: any;

export const generatePresentation = () => {
  if (typeof PptxGenJS === 'undefined') {
    alert("La librería de PowerPoint aún se está cargando. Intenta de nuevo en unos segundos.");
    return;
  }

  const pptx = new PptxGenJS();
  // Standard 16:9 layout (10 inches x 5.625 inches)
  pptx.layout = 'LAYOUT_16x9'; 

  // --- DESIGN SYSTEM CONSTANTS (UPDATED PREMIUM) ---
  const Colors = {
    IMSS_GREEN: "135338",
    IMSS_GOLD: "B69255",
    IMSS_LIGHT: "E6F0EB",
    BCS_OCEAN: "008C99",
    BCS_SAND: "F2D0A4",
    WHITE: "FFFFFF",
    GRAY_900: "111827",
    GRAY_800: "1F2937",
    GRAY_100: "F3F4F6",
    TEXT_DARK: "1F2937",
    TEXT_LIGHT: "9CA3AF",
    RED: "EF4444"
  };

  // --- 1. TITLE SLIDE (Clean Hero) ---
  let slide = pptx.addSlide();
  // Background Image (simulated with solid dark green + overlay for PPT)
  slide.background = { color: Colors.IMSS_GREEN };
  
  // Hero Image (Left Half)
  slide.addImage({ 
    path: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop", 
    x: 0, y: 0, w: '100%', h: '100%',
    transparency: 50 // Darken it
  });

  // Text Overlay
  slide.addText("DRAFT 2026", { x: 0.5, y: 2.0, w: 9, fontSize: 14, color: Colors.IMSS_GOLD, bold: true, align: "center", fontFace: "Arial", charSpacing: 3 });
  
  slide.addText("IMSS BAJA CALIFORNIA SUR", { x: 0.5, y: 2.5, w: 9, fontSize: 44, color: Colors.WHITE, bold: true, align: "center", fontFace: "Arial Black" });
  
  slide.addText("Construye Aquí Tu Mejor Vida Profesional", { x: 1.0, y: 3.5, w: 8, fontSize: 24, color: Colors.GRAY_100, align: "center", fontFace: "Arial" });


  // --- 2. SALARY SLIDE (Clean Tables) ---
  slide = pptx.addSlide();
  slide.background = { color: Colors.WHITE };
  
  // Header
  slide.addText("Propuesta Económica Mensual", { x: 0.5, y: 0.3, w: 9, fontSize: 24, color: Colors.IMSS_GREEN, bold: true, fontFace: "Arial", align: "center" });

  // -- LEFT COLUMN: MONTHLY --
  const monthlyData = [
    { label: "Sueldo Tabular", val: "$12,844.20" },
    { label: "Cláusula 63 Bis Ayuda de Renta (B)", val: "$10,551.52" },
    { label: "Concepto 15", val: "$11,697.86" },
    { label: "Sobresueldo (Cláusula 86)", val: "$4,679.14" },
    { label: "Cláusula 63 Bis Ayuda de Renta (A)", val: "$500.00" },
    { label: "Estímulos (Asistencia/Puntualidad)", val: "$14,544.30" },
    { label: "Ayuda de Despensa", val: "$400.00" },
    { label: "Atención Integral Continua", val: "$3,860.30" },
    { label: "Ayuda para Libros Médicos", val: "$4,679.14" },
  ];

  const mTableRows: any[] = [];
  mTableRows.push([
      { text: "PERCEPCIONES MENSUALES", options: { fill: Colors.IMSS_GREEN, color: Colors.WHITE, bold: true, fontSize: 10, colspan: 2, align: "left" } }
  ]);
  
  monthlyData.forEach((item, idx) => {
      const fill = idx % 2 === 0 ? Colors.WHITE : Colors.GRAY_100;
      mTableRows.push([
          { text: item.label, options: { fill: fill, color: Colors.TEXT_DARK, fontSize: 9 } },
          { text: item.val, options: { fill: fill, color: Colors.TEXT_DARK, fontSize: 9, align: "right", bold: true } }
      ]);
  });
  
  // Deductions Row
  mTableRows.push([
    { text: "(-) Deducciones mensuales aprox.", options: { fill: Colors.WHITE, color: Colors.RED, fontSize: 9, italic: true } },
    { text: "$16,389.50", options: { fill: Colors.WHITE, color: Colors.RED, fontSize: 9, align: "right", italic: true } }
  ]);
  
  // Total Row
  mTableRows.push([
    { text: "TOTAL MENSUAL NETO:", options: { fill: Colors.IMSS_LIGHT, color: Colors.IMSS_GREEN, fontSize: 11, bold: true } },
    { text: "$47,407.38", options: { fill: Colors.IMSS_LIGHT, color: Colors.IMSS_GREEN, fontSize: 12, align: "right", bold: true } }
  ]);

  slide.addTable(mTableRows, {
      x: 0.5, y: 0.8, w: 4.8,
      colW: [3.3, 1.5],
      border: { pt: 0, color: "FFFFFF" }, // Clean no border look
  });


  // -- RIGHT COLUMN: ANNUAL + SUMMARY --
  const annualData = [
      { label: "Prima vacacional", val: "$6,031.30" },
      { label: "Ayuda Actividades Culturales", val: "$37,695.65" },
      { label: "Aguinaldo", val: "$125,313.42" },
      { label: "Fondo de Ahorro", val: "$33,840.25" },
  ];

  const aTableRows: any[] = [];
  aTableRows.push([
      { text: "BENEFICIOS ANUALES", options: { fill: Colors.BCS_OCEAN, color: Colors.WHITE, bold: true, fontSize: 10, colspan: 2, align: "left" } }
  ]);

  annualData.forEach((item, idx) => {
      const fill = idx % 2 === 0 ? Colors.WHITE : Colors.GRAY_100;
      aTableRows.push([
          { text: item.label, options: { fill: fill, color: Colors.TEXT_DARK, fontSize: 9 } },
          { text: item.val, options: { fill: fill, color: Colors.TEXT_DARK, fontSize: 9, align: "right", bold: true } }
      ]);
  });

  // Annual Total
  aTableRows.push([
      { text: "TOTAL ANUAL BRUTO:", options: { fill: "CFFAFE", color: Colors.BCS_OCEAN, fontSize: 11, bold: true } },
      { text: "$195,120.93", options: { fill: "CFFAFE", color: Colors.BCS_OCEAN, fontSize: 12, align: "right", bold: true } }
  ]);

  slide.addTable(aTableRows, {
      x: 5.6, y: 0.8, w: 4.0,
      colW: [2.5, 1.5],
      border: { pt: 0, color: "FFFFFF" },
  });

  // Call to Action Box (UPDATED TEXT)
  const boxY = 3.6; 
  slide.addShape(pptx.ShapeType.roundRect, { x: 5.6, y: boxY, w: 4.0, h: 1.5, fill: Colors.IMSS_GOLD, r: 0.1 });
  slide.addText("BENEFICIO ESPECIAL", { 
      x: 5.8, y: boxY + 0.2, w: 3.6, h: 0.3, fontSize: 14, color: Colors.WHITE, bold: true, align:"left" 
  });
  slide.addText("BCS es de los pocos estados que otorga 50% de sobresueldo por Zona Aislada. Un incentivo superior.", { 
      x: 5.8, y: boxY + 0.6, w: 3.6, h: 0.8, fontSize: 11, color: Colors.WHITE, valign: "top", align:"left" 
  });


  // --- 3. BENEFITS SLIDE ---
  slide = pptx.addSlide();
  slide.background = { color: Colors.WHITE };

  slide.addText("Más que un trabajo", { x: 0.5, y: 0.3, w: 9, fontSize: 28, color: Colors.IMSS_GREEN, bold: true, align:"center" });
  slide.addText("Descubre por qué Baja California Sur es el lugar ideal.", { x: 0.5, y: 0.8, w: 9, fontSize: 14, color: Colors.GRAY_800, align:"center" });

  // Grid Layout (Matching Clean Design)
  const boxW = 2.8;
  const boxH = 1.2;
  const gap = 0.2;
  
  // Row 1
  slide.addShape(pptx.ShapeType.rect, { x: 0.5, y: 1.5, w: boxW, h: boxH, fill: Colors.WHITE, line: {color: Colors.GRAY_100} });
  slide.addText("Seguridad Total", { x: 0.6, y: 1.6, w: boxW-0.2, fontSize: 12, bold: true, color: "2563EB" });
  slide.addText("Uno de los estados más seguros.", { x: 0.6, y: 1.9, w: boxW-0.2, fontSize: 10, color: Colors.TEXT_DARK });

  slide.addShape(pptx.ShapeType.rect, { x: 0.5 + boxW + gap, y: 1.5, w: boxW, h: boxH, fill: Colors.WHITE, line: {color: Colors.GRAY_100} });
  slide.addText("Calidad de Vida", { x: 0.6 + boxW + gap, y: 1.6, w: boxW-0.2, fontSize: 12, bold: true, color: "EA580C" });
  slide.addText("Aire puro y naturaleza.", { x: 0.6 + boxW + gap, y: 1.9, w: boxW-0.2, fontSize: 10, color: Colors.TEXT_DARK });

  slide.addShape(pptx.ShapeType.rect, { x: 0.5 + 2*(boxW + gap), y: 1.5, w: boxW, h: boxH, fill: Colors.WHITE, line: {color: Colors.GRAY_100} });
  slide.addText("Desarrollo", { x: 0.6 + 2*(boxW + gap), y: 1.6, w: boxW-0.2, fontSize: 12, bold: true, color: "16A34A" });
  slide.addText("Crecimiento continuo.", { x: 0.6 + 2*(boxW + gap), y: 1.9, w: boxW-0.2, fontSize: 10, color: Colors.TEXT_DARK });

  // Row 2
  const row2Y = 1.5 + boxH + gap;
  slide.addShape(pptx.ShapeType.rect, { x: 0.5, y: row2Y, w: boxW, h: boxH, fill: Colors.WHITE, line: {color: Colors.GRAY_100} });
  slide.addText("Desafío Prof.", { x: 0.6, y: row2Y + 0.1, w: boxW-0.2, fontSize: 12, bold: true, color: "9333EA" });
  slide.addText("Casos clínicos diversos.", { x: 0.6, y: row2Y + 0.4, w: boxW-0.2, fontSize: 10, color: Colors.TEXT_DARK });

  slide.addShape(pptx.ShapeType.rect, { x: 0.5 + boxW + gap, y: row2Y, w: boxW, h: boxH, fill: Colors.WHITE, line: {color: Colors.GRAY_100} });
  slide.addText("Ambiente Familiar", { x: 0.6 + boxW + gap, y: row2Y + 0.1, w: boxW-0.2, fontSize: 12, bold: true, color: "DB2777" });
  slide.addText("Comunidades acogedoras.", { x: 0.6 + boxW + gap, y: row2Y + 0.4, w: boxW-0.2, fontSize: 10, color: Colors.TEXT_DARK });

  slide.addShape(pptx.ShapeType.rect, { x: 0.5 + 2*(boxW + gap), y: row2Y, w: boxW, h: boxH, fill: Colors.WHITE, line: {color: Colors.GRAY_100} });
  slide.addText("Turismo", { x: 0.6 + 2*(boxW + gap), y: row2Y + 0.1, w: boxW-0.2, fontSize: 12, bold: true, color: "0D9488" });
  slide.addText("Playas de clase mundial.", { x: 0.6 + 2*(boxW + gap), y: row2Y + 0.4, w: boxW-0.2, fontSize: 10, color: Colors.TEXT_DARK });


  // --- 4. LOCATIONS SLIDE (TEXT ONLY - Updated) ---
  slide = pptx.addSlide();
  slide.background = { color: Colors.GRAY_100 };
  slide.addText("Nuestras Sedes", { x: 0.5, y: 0.3, w: 9, fontSize: 24, color: Colors.IMSS_GREEN, bold: true, align: "center", fontFace: "Arial" });

  const locW = 2.8;
  const locH = 2.0; 
  const xGap = 0.2;
  const yGap = 0.3;
  const xStart = (10 - (3 * locW + 2 * xGap)) / 2;
  const yStart = 1.0;

  for (let i = 0; i < LOCATIONS.length; i++) {
      const loc = LOCATIONS[i];
      const col = i % 3;
      const row = Math.floor(i / 3);
      const x = xStart + (col * (locW + xGap));
      const y = yStart + (row * (locH + yGap));

      // White Card Box
      slide.addShape(pptx.ShapeType.rect, { x: x, y: y, w: locW, h: locH, fill: Colors.WHITE, line: {color: Colors.GRAY_100} });

      // Name
      slide.addText(loc.name, { x: x + 0.2, y: y + 0.2, w: locW - 0.4, fontSize: 16, color: Colors.IMSS_GREEN, bold: true });
      
      // Desc
      slide.addText(loc.description, { x: x + 0.2, y: y + 0.6, w: locW - 0.4, h: 0.8, fontSize: 10, color: Colors.GRAY_800 });

      // Link Button Style
      slide.addShape(pptx.ShapeType.roundRect, { x: x + 0.2, y: y + locH - 0.5, w: locW - 0.4, h: 0.3, fill: Colors.GRAY_900, r: 0.1 });
      const validUrl = loc.tourismUrl || "https://www.google.com";
      slide.addText("Ver Galería de Fotos", { 
          x: x + 0.2, y: y + locH - 0.5, w: locW - 0.4, h: 0.3, 
          fontSize: 9, color: Colors.WHITE, align: "center", valign: "middle",
          hyperlink: { url: validUrl }
      });
  }


  // --- 5. VACANCIES SLIDES ---
  const uniqueLocations = Array.from(new Set(VACANCIES.map(v => v.location)));

  uniqueLocations.forEach(location => {
      slide = pptx.addSlide();
      slide.background = { color: Colors.WHITE };
      
      // Header Bar
      slide.addShape(pptx.ShapeType.rect, {x:0, y:0, w:10, h:1.0, fill: Colors.GRAY_900});

      slide.addText(location.toUpperCase(), { x: 0.5, y: 0.1, w: 6, h: 0.8, fontSize: 22, color: Colors.WHITE, bold: true, valign:"middle" });
      
      const locVacancies = VACANCIES.filter(v => v.location === location);
      slide.addText(`${locVacancies.length} PLAZAS`, { x: 7, y: 0.3, w: 2.5, h: 0.4, fontSize: 12, color: Colors.GRAY_900, bold: true, align: "center", valign: "middle", fill: Colors.WHITE });

      slide.addText("SITUACIÓN: SIN CANDIDATO", { x: 0.5, y: 1.2, fontSize: 10, color: Colors.RED, bold: true });

      // Group by Medical Unit
      const grouped: { [key: string]: Vacancy[] } = {};
      locVacancies.forEach(v => {
         const u = v.medicalUnit || "Unidad General";
         if(!grouped[u]) grouped[u] = [];
         grouped[u].push(v);
      });

      let currentY = 1.6;

      Object.entries(grouped).forEach(([unitName, unitVacancies]) => {
          if (currentY > 4.5) {
             slide = pptx.addSlide();
             slide.addShape(pptx.ShapeType.rect, {x:0, y:0, w:10, h:0.6, fill: Colors.GRAY_900});
             slide.addText(`${location} (Cont.)`, { x: 0.5, y: 0.1, fontSize: 14, color: Colors.WHITE, bold: true });
             currentY = 0.8;
          }

          // Unit Header
          slide.addText(unitName, { x: 0.5, y: currentY, w: 9, h: 0.3, fontSize: 11, color: Colors.IMSS_GREEN, bold: true });
          currentY += 0.3;

          const tableRows: any[] = [];
          tableRows.push([
              { text: "NO.", options: { fill: Colors.GRAY_100, color: Colors.GRAY_800, bold: true, fontSize: 8 } },
              { text: "ESPECIALIDAD", options: { fill: Colors.GRAY_100, color: Colors.GRAY_800, bold: true, fontSize: 8 } },
              { text: "TURNO", options: { fill: Colors.GRAY_100, color: Colors.GRAY_800, bold: true, fontSize: 8 } },
              { text: "TIPO CONTRATO", options: { fill: Colors.GRAY_100, color: Colors.GRAY_800, bold: true, fontSize: 8 } }
          ]);

          unitVacancies.forEach((v) => {
              let statusText = v.contractType;
              let statusColor = "15803d"; // Green

              if (v.contractType === "No Definitiva") {
                statusColor = "b45309"; // Amber
                if (v.contractDetail) statusText += ` (${v.contractDetail})`;
              }

              tableRows.push([
                  { text: `#${v.id}`, options: { fontSize: 9, color: Colors.GRAY_800 } },
                  { text: v.specialty, options: { color: Colors.IMSS_GREEN, bold: true, fontSize: 10 } },
                  { text: v.shift, options: { fontSize: 9, color: Colors.GRAY_800 } },
                  { text: statusText, options: { color: statusColor, fontSize: 8, bold: true } }
              ]);
          });

          const tableHeight = (unitVacancies.length + 1) * 0.35; 

          slide.addTable(tableRows, {
              x: 0.5, y: currentY, w: 9.0,
              colW: [0.8, 3.5, 2.0, 2.7],
              border: { pt: 0.5, color: "EEEEEE" },
              margin: 0.05
          });

          currentY += tableHeight + 0.4; 
      });
  });


  // --- 6. CLOSING SLIDE (Removed Titles) ---
  slide = pptx.addSlide();
  slide.background = { color: Colors.GRAY_900 };

  slide.addText("ÚNETE AL EQUIPO", {
      x: 0.5, y: 1.0, w: 9, fontSize: 36, color: Colors.WHITE, bold: true, align: "center", fontFace: "Arial Black"
  });

  slide.addText("Estabilidad laboral, crecimiento y un entorno único para tu familia.", {
      x: 1, y: 2.0, w: 8, fontSize: 16, color: Colors.TEXT_LIGHT, align: "center"
  });

  // Contact Info
  slide.addShape(pptx.ShapeType.line, { x: 3, y: 3.0, w: 4, h: 0, line: { color: Colors.IMSS_GREEN, width: 2 } });
  
  // Contact 1
  slide.addText("Marco Antonio Sandoval", { x: 0.5, y: 3.5, w: 4.5, fontSize: 14, color: Colors.WHITE, bold: true, align: "center" });
  slide.addText("615 11 1 05 44", { x: 0.5, y: 3.9, w: 4.5, fontSize: 11, color: Colors.BCS_SAND, align: "center" });
  slide.addText("marco.sandovalj@imss.gob.mx", { x: 0.5, y: 4.2, w: 4.5, fontSize: 11, color: Colors.WHITE, align: "center" });

  // Contact 2
  slide.addText("Genoveva Cota Sandez", { x: 5.0, y: 3.5, w: 4.5, fontSize: 14, color: Colors.WHITE, bold: true, align: "center" });
  slide.addText("612 14 1 65 44", { x: 5.0, y: 3.9, w: 4.5, fontSize: 11, color: Colors.BCS_SAND, align: "center" });
  slide.addText("genoveva.cota@imss.gob.mx", { x: 5.0, y: 4.2, w: 4.5, fontSize: 11, color: Colors.WHITE, align: "center" });

  pptx.writeFile({ fileName: "Convocatoria_Medicos_IMSS_BCS.pptx" });
};