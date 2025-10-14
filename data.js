/**
 * Archivo: data.js
 * Contiene la base de datos de preguntas y respuestas para el Test de Tuberculosis.
 */

const allQuestions = [
    // Sección I: Generalidades
    {
        pregunta: "¿Cuál es el objetivo general del documento técnico sobre tuberculosis?",
        respuestaCorrecta: "Reducir la morbimortalidad causada por la tuberculosis.",
        opciones: [
            "Eliminar completamente la enfermedad en un año.",
            "Solo capacitar al personal de salud.",
            "Reducir la morbimortalidad causada por la tuberculosis.",
            "Aumentar el número de casos diagnosticados."
        ]
    },
    {
        pregunta: "¿Qué busca el abordaje integral y multidisciplinario en el tratamiento de TB?",
        respuestaCorrecta: "Atender a las personas con tuberculosis en el Sistema Nacional Integrado de Salud.",
        opciones: [
            "Aumentar los costos del tratamiento.",
            "Atender a las personas con tuberculosis en el Sistema Nacional Integrado de Salud.",
            "Limitar la atención solo a médicos especialistas.",
            "Promover la automedicación."
        ]
    },
    {
        pregunta: "¿Qué se impulsa como parte de los objetivos específicos?",
        respuestaCorrecta: "Promoción, prevención, detección temprana y participación comunitaria.",
        opciones: [
            "Solo el tratamiento farmacológico.",
            "Promoción, prevención, detección temprana y participación comunitaria.",
            "Investigación de nuevos fármacos exclusivamente.",
            "Aislar a todos los pacientes."
        ]
    },
    {
        pregunta: "¿Quiénes están sujetos a la aplicación de los lineamientos técnicos?",
        respuestaCorrecta: "El personal del Sistema Nacional Integrado de Salud.",
        opciones: [
            "Solo los pacientes.",
            "Cualquier ciudadano.",
            "El personal del Sistema Nacional Integrado de Salud.",
            "Únicamente el personal administrativo."
        ]
    },
    {
        pregunta: "¿Qué microorganismo causa la tuberculosis en la mayoría de los casos?",
        respuestaCorrecta: "Mycobacterium tuberculosis.",
        opciones: [
            "Escherichia coli.",
            "Virus de la Inmunodeficiencia Humana (VIH).",
            "Streptococcus pneumoniae.",
            "Mycobacterium tuberculosis."
        ]
    },
    {
        pregunta: "¿Cuál es la vía más común de ingreso del bacilo al organismo?",
        respuestaCorrecta: "Vías respiratorias.",
        opciones: [
            "Piel y mucosas.",
            "Sistema digestivo.",
            "Vías respiratorias.",
            "Contacto sexual."
        ]
    },
    {
        pregunta: "¿Qué tipo de medida busca reducir la concentración de partículas infecciosas?",
        respuestaCorrecta: "Medidas de control ambiental.",
        opciones: [
            "Control administrativo.",
            "Protección respiratoria.",
            "Medidas de control ambiental.",
            "Control gerencial."
        ]
    },
    {
        pregunta: "¿Qué medida protege al personal de salud en áreas de alta concentración de gotitas infecciosas?",
        respuestaCorrecta: "Protección respiratoria.",
        opciones: [
            "Control administrativo.",
            "Medidas de control ambiental.",
            "Uso de guantes.",
            "Protección respiratoria."
        ]
    },
    {
        pregunta: "¿Qué sistema puede diseminar el bacilo desde los pulmones a otros órganos?",
        respuestaCorrecta: "Sistema linfático y flujo sanguíneo.",
        opciones: [
            "Sistema nervioso central.",
            "Sistema musculoesquelético.",
            "Sistema linfático y flujo sanguíneo.",
            "Sistema digestivo."
        ]
    },
    {
        pregunta: "¿Qué tipo de control busca reducir la exposición del trabajador de salud?",
        respuestaCorrecta: "Control administrativo y gerencial.",
        opciones: [
            "Control químico.",
            "Control ambiental.",
            "Control administrativo y gerencial.",
            "Control biológico."
        ]
    },

    // Sección II: Comorbilidades y Poblaciones Vulnerables
    {
        pregunta: "¿Qué enfermedad aumenta el riesgo de desarrollar tuberculosis?",
        respuestaCorrecta: "Diabetes mellitus.",
        opciones: [
            "Hipertensión arterial.",
            "Gripe común.",
            "Diabetes mellitus.",
            "Asma."
        ]
    },
    {
        pregunta: "¿Cuántas veces más riesgo tiene una persona con diabetes de desarrollar TB?",
        respuestaCorrecta: "Hasta tres veces más.",
        opciones: [
            "Hasta tres veces más.",
            "Cinco veces más.",
            "Diez veces más.",
            "El riesgo es el mismo."
        ]
    },
    {
        pregunta: "¿Qué tipo de tuberculosis puede desarrollarse en personas con diabetes?",
        respuestaCorrecta: "TB resistente a fármacos.",
        opciones: [
            "TB no pulmonar.",
            "TB resistente a fármacos.",
            "TB latente.",
            "TB infantil."
        ]
    },
    {
        pregunta: "¿Qué grupo etario se considera prioritario en la estrategia Fin de la TB?",
        respuestaCorrecta: "Niños, niñas y adolescentes.",
        opciones: [
            "Adultos mayores de 65 años.",
            "Mujeres embarazadas.",
            "Hombres adultos jóvenes.",
            "Niños, niñas y adolescentes."
        ]
    },
    {
        pregunta: "¿Qué tipo de transmisión puede ocurrir durante el embarazo?",
        respuestaCorrecta: "Transmisión vertical.",
        opciones: [
            "Transmisión horizontal.",
            "Transmisión lateral.",
            "Transmisión vertical.",
            "Transmisión aérea."
        ]
    },
    {
        pregunta: "¿Qué tipo de contacto puede transmitir TB a un niño?",
        respuestaCorrecta: "Contacto cercano con secreciones infectadas.",
        opciones: [
            "Contacto visual.",
            "Contacto cercano con secreciones infectadas.",
            "Contacto a través de objetos inanimados.",
            "Contacto telefónico."
        ]
    },
    {
        pregunta: "¿Qué tipo de TB puede desarrollarse en menores de 5 años con inmunosupresión?",
        respuestaCorrecta: "TB extrapulmonar diseminada grave.",
        opciones: [
            "TB pulmonar leve.",
            "TB extrapulmonar diseminada grave.",
            "TB latente.",
            "TB resistente leve."
        ]
    },
    {
        pregunta: "¿Qué porcentaje de lactantes y preescolares puede desarrollar TB extrapulmonar grave?",
        respuestaCorrecta: "10 a 20%.",
        opciones: [
            "Menos del 1%.",
            "10 a 20%.",
            "50 a 60%.",
            "Casi el 100%."
        ]
    },
    {
        pregunta: "¿Qué tipo de TB puede causar muerte en niños pequeños?",
        respuestaCorrecta: "TB meníngea y miliar.",
        opciones: [
            "TB ganglionar.",
            "TB ósea.",
            "TB meníngea y miliar.",
            "TB renal."
        ]
    },
    {
        pregunta: "¿Qué tipo de trasplante puede transmitir TB?",
        respuestaCorrecta: "Trasplante de pulmón o riñón.",
        opciones: [
            "Trasplante de córnea.",
            "Trasplante de cabello.",
            "Trasplante de piel.",
            "Trasplante de pulmón o riñón."
        ]
    },
    {
        pregunta: "¿Qué factores aumentan el riesgo de TB en niños?",
        respuestaCorrecta: "Desnutrición, VIH, inmunosupresión.",
        opciones: [
            "Exceso de peso y ejercicio.",
            "Desnutrición, VIH, inmunosupresión.",
            "Uso de ropa abrigada.",
            "Vivir en clima cálido."
        ]
    },
    {
        pregunta: "¿Qué se debe hacer con niños en contacto con adultos con TB?",
        respuestaCorrecta: "Referirlos a la UCSF para evaluación.",
        opciones: [
            "Darles antibióticos sin evaluación.",
            "Referirlos a la UCSF para evaluación.",
            "Esperar a que presenten síntomas.",
            "Aislar solo a los adultos."
        ]
    },
    {
        pregunta: "¿Qué vacuna previene formas graves de TB en niños?",
        respuestaCorrecta: "BCG.",
        opciones: [
            "Vacuna contra la Influenza.",
            "Vacuna Tétanos.",
            "BCG.",
            "Vacuna contra el Sarampión."
        ]
    },
    {
        pregunta: "¿Qué medida ayuda a prevenir la TB en el hogar?",
        respuestaCorrecta: "Mejorar la ventilación.",
        opciones: [
            "Aumentar la calefacción.",
            "Cerrar todas las ventanas.",
            "Mejorar la ventilación.",
            "Usar ambientadores."
        ]
    },
    {
        pregunta: "¿Qué práctica debe promoverse para evitar contagio al toser?",
        respuestaCorrecta: "Etiqueta de la tos.",
        opciones: [
            "Toser sin cubrirse.",
            "Etiqueta de la tos.",
            "Gritar al toser.",
            "Compartir pañuelos usados."
        ]
    },

    // Sección III: Promoción y Educación en Salud
    {
        pregunta: "¿Qué busca la promoción de la salud en TB?",
        respuestaCorrecta: "Crear condiciones saludables y empoderar a la población.",
        opciones: [
            "Solamente la distribución de medicamentos.",
            "Crear condiciones saludables y empoderar a la población.",
            "Aumentar el número de hospitales.",
            "Prohibir la socialización de personas."
        ]
    },
    {
        pregunta: "¿Qué herramienta se usa para superar resistencias y prejuicios?",
        respuestaCorrecta: "Comunicación y movilización social.",
        opciones: [
            "Imposición de multas.",
            "Silencio y aislamiento.",
            "Comunicación y movilización social.",
            "Negación de la enfermedad."
        ]
    },
    {
        pregunta: "¿Qué significa IEC en el contexto de TB?",
        respuestaCorrecta: "Información, educación y comunicación para la salud.",
        opciones: [
            "Incentivos económicos y comerciales.",
            "Información, educación y comunicación para la salud.",
            "Infección, enfermedad y contagio.",
            "Inmersión en el entorno clínico."
        ]
    },
    {
        pregunta: "¿Qué debe informar el plan de comunicación sobre TB?",
        respuestaCorrecta: "Detección precoz y tratamiento eficaz.",
        opciones: [
            "Solo estadísticas históricas.",
            "Detección precoz y tratamiento eficaz.",
            "Nombres de pacientes.",
            "Noticias políticas sin relación."
        ]
    },
    {
        pregunta: "¿Qué tipo de organizaciones deben participar en la promoción de TB?",
        respuestaCorrecta: "ONG, sociedad civil y organizaciones comunitarias.",
        opciones: [
            "Solo el ministerio de salud.",
            "Empresas de tecnología.",
            "ONG, sociedad civil y organizaciones comunitarias.",
            "Clubes deportivos solamente."
        ]
    },
    {
        pregunta: "¿Qué debe incluir el plan educativo anual participativo?",
        respuestaCorrecta: "Actividades dirigidas al personal de salud, usuarios y comunidad.",
        opciones: [
            "Solo actividades de entretenimiento.",
            "Actividades dirigidas al personal de salud, usuarios y comunidad.",
            "Solamente reuniones administrativas.",
            "Exclusivamente charlas académicas."
        ]
    },
    {
        pregunta: "¿Qué debe conocer el usuario sobre TB?",
        respuestaCorrecta: "Signos, síntomas y necesidad de diagnóstico temprano.",
        opciones: [
            "Solo el nombre de su médico.",
            "Signos, síntomas y necesidad de diagnóstico temprano.",
            "Detalles de la contabilidad hospitalaria.",
            "La historia de la medicina."
        ]
    },
    {
        pregunta: "¿Qué debe conocer la comunidad sobre TB?",
        respuestaCorrecta: "Importancia de su participación activa.",
        opciones: [
            "Las últimas noticias internacionales.",
            "Importancia de su participación activa.",
            "Recetas de cocina saludables.",
            "Técnicas de construcción."
        ]
    },
    {
        pregunta: "¿Qué medio debe coordinarse para difundir información sobre TB?",
        respuestaCorrecta: "Medios de comunicación comunitarios.",
        opciones: [
            "Medios de comunicación especializados en finanzas.",
            "Medios de comunicación comunitarios.",
            "Redes sociales privadas.",
            "Solo publicaciones científicas."
        ]
    },
    {
        pregunta: "¿Qué tipo de voluntarios deben capacitarse para apoyar en TB?",
        respuestaCorrecta: "Voluntarios comunitarios.",
        opciones: [
            "Voluntarios de limpieza.",
            "Voluntarios de seguridad.",
            "Voluntarios comunitarios.",
            "Voluntarios de jardinería."
        ]
    },
    {
        pregunta: "¿Qué tipo de apoyo debe recibir el trabajador con TB?",
        respuestaCorrecta: "Apoyo del patrono para cumplir tratamiento.",
        opciones: [
            "Despido inmediato.",
            "Aislamiento permanente.",
            "Apoyo del patrono para cumplir tratamiento.",
            "Reducción salarial."
        ]
    },
    {
        pregunta: "¿Qué debe evitarse en el entorno laboral respecto a TB?",
        respuestaCorrecta: "Estigma y discriminación.",
        opciones: [
            "Usar ropa de trabajo.",
            "Estigma y discriminación.",
            "Hablar de temas personales.",
            "El uso de computadoras."
        ]
    },
    {
        pregunta: "¿Qué institución debe coordinar con centros educativos para informar sobre TB?",
        respuestaCorrecta: "El personal de salud.",
        opciones: [
            "Empresas de construcción.",
            "El personal de salud.",
            "Oficinas de turismo.",
            "Museos de arte."
        ]
    },
    {
        pregunta: "¿Qué tipo de alianza debe impulsarse para promover actividades de TB?",
        respuestaCorrecta: "Alianza Público-Público y Público-Privado (APP).",
        opciones: [
            "Alianza Militar-Deportiva.",
            "Alianza Cívico-Religiosa.",
            "Alianza Público-Público y Público-Privado (APP).",
            "Alianza Tecnológica-Editorial."
        ]
    },
    {
        pregunta: "¿Qué debe incluir la educación en centros penitenciarios?",
        respuestaCorrecta: "Capacitación sobre operativización del programa de TB.",
        opciones: [
            "Clases de idiomas extranjeros.",
            "Capacitación sobre operativización del programa de TB.",
            "Cursos de manejo de vehículos.",
            "Taller de cerámica."
        ]
    },

    // Sección IV: Consejería y Atención al Paciente
    {
        pregunta: "¿Cuántas consejerías mínimas debe recibir un paciente con TB?",
        respuestaCorrecta: "Cinco (tres de TB y dos de VIH).",
        opciones: [
            "Una consejería.",
            "Dos consejerías.",
            "Cinco (tres de TB y dos de VIH).",
            "Diez consejerías."
        ]
    },
    {
        pregunta: "¿Qué se busca con la consejería al inicio del tratamiento?",
        respuestaCorrecta: "Disipar temores y fomentar el autocuidado.",
        opciones: [
            "Asustar al paciente.",
            "Disipar temores y fomentar el autocuidado.",
            "Convencerlo de dejar el tratamiento.",
            "Solo darle medicamentos."
        ]
    },
    {
        pregunta: "¿Qué debe incluir la consejería sobre métodos diagnósticos?",
        respuestaCorrecta: "Evaluar el grado de comprensión del paciente.",
        opciones: [
            "Criticar al paciente.",
            "Evaluar el grado de comprensión del paciente.",
            "Obligar a hacer el diagnóstico.",
            "Solo dar un folleto."
        ]
    },
    {
        pregunta: "¿Qué orientación se da a mujeres en edad fértil con TB?",
        respuestaCorrecta: "Uso de métodos anticonceptivos de barrera.",
        opciones: [
            "Prohibir todo método.",
            "Uso de métodos anticonceptivos de barrera.",
            "Recomendar anticonceptivos orales exclusivamente.",
            "Fomentar el embarazo."
        ]
    },
    {
        pregunta: "¿Qué medicamento disminuye la absorción de anticonceptivos orales?",
        respuestaCorrecta: "Rifampicina.",
        opciones: [
            "Isoniazida.",
            "Pirazinamida.",
            "Rifampicina.",
            "Etambutol."
        ]
    },
    {
        pregunta: "¿Qué se debe hacer si el paciente presenta reacciones adversas?",
        respuestaCorrecta: "Acudir al establecimiento de salud.",
        opciones: [
            "Automanejarlas en casa.",
            "Suspender el tratamiento sin consultar.",
            "Acudir al establecimiento de salud.",
            "Tomar más dosis."
        ]
    },
    {
        pregunta: "¿Qué se debe impulsar en el hogar del paciente con TB?",
        respuestaCorrecta: "Etiqueta de la tos y control de infecciones.",
        opciones: [
            "Aislar completamente al paciente.",
            "Etiqueta de la tos y control de infecciones.",
            "Dejar de limpiar la casa.",
            "Usar solo remedios caseros."
        ]
    },
    {
        pregunta: "¿Qué se debe reforzar en la segunda fase del tratamiento?",
        respuestaCorrecta: "Educación en salud y seguimiento bacteriológico.",
        opciones: [
            "Suspensión de la medicación.",
            "Educación en salud y seguimiento bacteriológico.",
            "Cambio de médico.",
            "Viajes largos."
        ]
    },
    {
        pregunta: "¿Qué se debe verificar en la segunda fase?",
        respuestaCorrecta: "Realización de la prueba del VIH.",
        opciones: [
            "El estado civil del paciente.",
            "La realización de la prueba del VIH.",
            "El color de sus ojos.",
            "Su historial laboral."
        ]
    },
    {
        pregunta: "¿Qué se informa al paciente al finalizar el tratamiento?",
        respuestaCorrecta: "Que la TB no inmuniza y puede reaparecer.",
        opciones: [
            "Que ya es inmune de por vida.",
            "Que la TB no inmuniza y puede reaparecer.",
            "Que debe dejar de comer.",
            "Que debe mudarse."
        ]
    },
    {
        pregunta: "¿Qué se debe hacer si el resultado de la prueba de VIH es reactivo?",
        respuestaCorrecta: "Referir a clínica de atención integral.",
        opciones: [
            "Ignorar el resultado.",
            "Referir a clínica de atención integral.",
            "Solo tratar la TB.",
            "Darle el alta sin seguimiento."
        ]
    },
    {
        pregunta: "¿Qué se recomienda si el resultado de VIH es negativo?",
        respuestaCorrecta: "Uso de prácticas seguras.",
        opciones: [
            "Ignorar las recomendaciones.",
            "Uso de prácticas seguras.",
            "Dejar de usar métodos de barrera.",
            "No volver a hacerse la prueba."
        ]
    },
    {
        pregunta: "¿Cuándo debe realizarse la visita domiciliar tras el diagnóstico?",
        respuestaCorrecta: "Dentro de las primeras 24 a 48 horas.",
        opciones: [
            "Después de seis meses.",
            "Nunca.",
            "Dentro de las primeras 24 a 48 horas.",
            "El primer día del mes siguiente."
        ]
    },
    {
        pregunta: "¿Quiénes conforman el equipo multidisciplinario para la visita domiciliar?",
        respuestaCorrecta: "Médico, enfermera, educador en salud y promotor.",
        opciones: [
            "Solo un médico.",
            "Médico, enfermera, educador en salud y promotor.",
            "Solo el paciente.",
            "Un policía y un abogado."
        ]
    },
    {
        pregunta: "¿Qué se debe evitar en la familia del paciente con TB?",
        respuestaCorrecta: "Estigmas y discriminación.",
        opciones: [
            "Comunicación abierta.",
            "Estigmas y discriminación.",
            "Prácticas saludables.",
            "Información clara."
        ]
    },
    {
        pregunta: "¿Qué se debe promover en el grupo familiar?",
        respuestaCorrecta: "Auto cuidado y prácticas saludables.",
        opciones: [
            "Aislamiento total.",
            "Descuido de la salud.",
            "Auto cuidado y prácticas saludables.",
            "Ignorar al paciente."
        ]
    },
    {
        pregunta: "¿Qué se debe verificar en el hogar del paciente?",
        respuestaCorrecta: "Control de infecciones con énfasis en TB.",
        opciones: [
            "El tamaño de la televisión.",
            "Control de infecciones con énfasis en TB.",
            "El tipo de muebles.",
            "El color de las paredes."
        ]
    },
    {
        pregunta: "¿Qué se debe hacer con los contactos del paciente?",
        respuestaCorrecta: "Identificar, examinar y referir.",
        opciones: [
            "No hacer nada.",
            "Identificar, examinar y referir.",
            "Solo informarles del diagnóstico.",
            "Recomendar que se aíslen solos."
        ]
    },
    {
        pregunta: "¿Qué aspecto emocional debe abordarse en la consejería?",
        respuestaCorrecta: "Ansiedad y temores relacionados a la enfermedad.",
        opciones: [
            "Solo temas triviales.",
            "Ansiedad y temores relacionados a la enfermedad.",
            "Planes de vacaciones.",
            "Opiniones políticas."
        ]
    },
    {
        pregunta: "¿Qué debe incluir la educación sobre el tratamiento?",
        respuestaCorrecta: "Importancia del tratamiento supervisado.",
        opciones: [
            "Dejar la medicación cuando se sientan bien.",
            "Importancia del tratamiento supervisado.",
            "Compartir medicamentos.",
            "Dosis y horarios incorrectos."
        ]
    },

    // Sección V: Prevención y Control de Infecciones
    {
        pregunta: "¿Cuál es el objetivo de la prevención en TB?",
        respuestaCorrecta: "Evitar la infección y su progresión a enfermedad.",
        opciones: [
            "Aumentar la resistencia a fármacos.",
            "Fomentar el hacinamiento.",
            "Evitar la infección y su progresión a enfermedad.",
            "Crear nuevas cepas."
        ]
    },
    {
        pregunta: "¿Qué método se usa para prevenir la infección latente de TB?",
        respuestaCorrecta: "Tratamiento para ILTB.",
        opciones: [
            "Vacunación con BCG en adultos.",
            "Tratamiento para ILTB.",
            "Exposición controlada al bacilo.",
            "Dieta alta en grasas."
        ]
    },
    {
        pregunta: "¿Qué vacuna se utiliza para prevenir TB miliar y meníngea?",
        respuestaCorrecta: "BCG.",
        opciones: [
            "Vacuna contra la Rubéola.",
            "Vacuna contra la Varicela.",
            "Vacuna DPT.",
            "BCG."
        ]
    },
    {
        pregunta: "¿Qué debe hacerse con niños en contacto con adultos con TB?",
        respuestaCorrecta: "Evaluación médica y estudios de laboratorio.",
        opciones: [
            "Darles caramelos.",
            "Ignorar su estado de salud.",
            "Evaluación médica y estudios de laboratorio.",
            "Solo darles vitaminas."
        ]
    },
    {
        pregunta: "¿Qué medida ayuda a prevenir el hacinamiento?",
        respuestaCorrecta: "Mejorar la ventilación.",
        opciones: [
            "Construir más paredes.",
            "Mejorar la ventilación.",
            "Usar desinfectantes de piso.",
            "Instalar alfombras gruesas."
        ]
    },
    {
        pregunta: "¿Qué tipo de alimentación debe promoverse?",
        respuestaCorrecta: "Alimentación balanceada.",
        opciones: [
            "Alimentación solo de harinas.",
            "Ayuno prolongado.",
            "Alimentación balanceada.",
            "Dietas extremas."
        ]
    },
    {
        pregunta: "¿Qué nivel incluye actividades nacionales de control de infecciones?",
        respuestaCorrecta: "Nivel nacional.",
        opciones: [
            "Nivel individual.",
            "Nivel de barrio.",
            "Nivel domiciliario.",
            "Nivel nacional."
        ]
    },
    {
        pregunta: "¿Qué nivel incluye actividades en establecimientos de salud?",
        respuestaCorrecta: "Nivel institucional.",
        opciones: [
            "Nivel personal.",
            "Nivel de transporte.",
            "Nivel institucional.",
            "Nivel de gobierno."
        ]
    },
    {
        pregunta: "¿Qué nivel incluye actividades en sitios de congregación?",
        respuestaCorrecta: "Nivel comunitario.",
        opciones: [
            "Nivel celular.",
            "Nivel atómico.",
            "Nivel comunitario.",
            "Nivel familiar."
        ]
    },
    {
        pregunta: "¿Qué nivel incluye actividades en hogares de pacientes con TB?",
        respuestaCorrecta: "Nivel domiciliario.",
        opciones: [
            "Nivel interplanetario.",
            "Nivel de océano.",
            "Nivel de ciudad.",
            "Nivel domiciliario."
        ]
    },
    {
        pregunta: "¿Qué tipo de control debe aplicarse en centros laborales?",
        respuestaCorrecta: "Educación sobre TB y detección de sintomáticos.",
        opciones: [
            "Control de horario estricto.",
            "Educación sobre TB y detección de sintomáticos.",
            "Solo revisión de vestimenta.",
            "Prohibición de hablar."
        ]
    },
    {
        pregunta: "¿Qué debe evitarse en el entorno laboral?",
        respuestaCorrecta: "Estigma y discriminación.",
        opciones: [
            "Descansos.",
            "Estigma y discriminación.",
            "El uso de escaleras.",
            "La luz natural."
        ]
    },
    {
        pregunta: "¿Qué debe incluir la coordinación con centros educativos?",
        respuestaCorrecta: "Información sobre prevención y diagnóstico.",
        opciones: [
            "Organización de fiestas.",
            "Información sobre prevención y diagnóstico.",
            "Venta de productos.",
            "Campañas políticas."
        ]
    },
    {
        pregunta: "¿Qué tipo de alianza se recomienda para prevención?",
        respuestaCorrecta: "Alianza Público-Público y Público-Privado.",
        opciones: [
            "Alianza de solo una persona.",
            "Alianza Pública-Privada-Exclusiva.",
            "Alianza Público-Público y Público-Privado.",
            "Alianza Secreta-Clandestina."
        ]
    },
    {
        pregunta: "¿Qué debe incluir la capacitación en centros penitenciarios?",
        respuestaCorrecta: "Operativización del programa de TB.",
        opciones: [
            "Cursos de cocina gourmet.",
            "Operativización del programa de TB.",
            "Entrenamiento deportivo.",
            "Talleres de música."
        ]
    },
    {
        pregunta: "¿Qué tipo de contacto debe evitarse en el hogar?",
        respuestaCorrecta: "Contacto con secreciones infectadas.",
        opciones: [
            "Contacto visual.",
            "Contacto con secreciones infectadas.",
            "Contacto al sentarse.",
            "Contacto de manos limpias."
        ]
    },
    {
        pregunta: "¿Qué debe hacerse si hay sospecha de TB en un niño?",
        respuestaCorrecta: "Referir al segundo o tercer nivel de atención.",
        opciones: [
            "Darle caramelos.",
            "Referir al segundo o tercer nivel de atención.",
            "Esperar hasta la adolescencia.",
            "Automanejarse."
        ]
    },
    {
        pregunta: "¿Qué debe incluir la consejería sobre hábitos alimenticios?",
        respuestaCorrecta: "Orientación según estado nutricional.",
        opciones: [
            "Comer solo dulces.",
            "Orientación según estado nutricional.",
            "Ayuno total.",
            "Beber solo agua."
        ]
    },
    {
        pregunta: "¿Qué debe incluir la consejería sobre aspectos psicosociales?",
        respuestaCorrecta: "Impacto emocional y social de la enfermedad.",
        opciones: [
            "Recuerdos de viajes.",
            "Impacto emocional y social de la enfermedad.",
            "Chismes de la comunidad.",
            "Bromas pesadas."
        ]
    },
    {
        pregunta: "¿Qué debe incluir la consejería sobre vida familiar?",
        respuestaCorrecta: "Información sobre convivencia y entorno laboral.",
        opciones: [
            "Consejos de jardinería.",
            "Información sobre convivencia y entorno laboral.",
            "Discusiones sobre política.",
            "Lectura de poesía."
        ]
    },

    // Sección VI: Detección y Búsqueda de Casos
    {
        pregunta: "¿Qué persona debe ser identificada como sintomático respiratorio (SR)?",
        respuestaCorrecta: "Toda persona con tos persistente por 15 días o más.",
        opciones: [
            "Toda persona que come.",
            "Toda persona con tos persistente por 15 días o más.",
            "Toda persona que duerme.",
            "Toda persona que sonríe."
        ]
    },
    {
        pregunta: "¿Qué síntomas sugieren tuberculosis?",
        respuestaCorrecta: "Tos persistente, fiebre, sudoración nocturna, pérdida de peso.",
        opciones: [
            "Dolor de cabeza leve y hambre.",
            "Tos persistente, fiebre, sudoración nocturna, pérdida de peso.",
            "Crecimiento de uñas y cabello rápido.",
            "Exceso de energía y sueño."
        ]
    },
    {
        pregunta: "¿Qué pacientes deben ser evaluados por TB aunque ingresen por otras causas?",
        respuestaCorrecta: "Pacientes hospitalizados con síntomas respiratorios persistentes.",
        opciones: [
            "Pacientes que van por chequeo anual.",
            "Pacientes hospitalizados con síntomas respiratorios persistentes.",
            "Pacientes en la sala de espera.",
            "Personal de visita."
        ]
    },
    {
        pregunta: "¿Qué enfermedades crónicas pueden ocultar TB?",
        respuestaCorrecta: "EPOC, asma, neumonía.",
        opciones: [
            "Pies planos y visión doble.",
            "EPOC, asma, neumonía.",
            "Dermatitis leve y gripe.",
            "Acné y dolor de rodilla."
        ]
    },
    {
        pregunta: "¿Qué estudio de imagen puede sugerir TB pulmonar?",
        respuestaCorrecta: "Radiografía de tórax.",
        opciones: [
            "Ecografía abdominal.",
            "Radiografía de tórax.",
            "Resonancia magnética de cerebro.",
            "Densitometría ósea."
        ]
    },
    {
        pregunta: "¿Qué contactos deben ser evaluados como SR?",
        respuestaCorrecta: "Contactos de pacientes con TB.",
        opciones: [
            "Contactos de animales de granja.",
            "Contactos de pacientes con TB.",
            "Contactos de personas con gripe.",
            "Contactos de personas sanas."
        ]
    },
    {
        pregunta: "¿Quién puede detectar SR en visitas domiciliarias?",
        respuestaCorrecta: "Personal de salud y voluntarios comunitarios.",
        opciones: [
            "Solo el director del hospital.",
            "Personal de salud y voluntarios comunitarios.",
            "Cualquier vecino.",
            "Solo el paciente."
        ]
    },
    {
        pregunta: "¿Qué grupos son considerados de riesgo para TB?",
        respuestaCorrecta: "Personas privadas de libertad, migrantes, diabéticos, VIH positivos.",
        opciones: [
            "Personas que comen sano y hacen ejercicio.",
            "Personas privadas de libertad, migrantes, diabéticos, VIH positivos.",
            "Adultos que viven solos en zonas rurales.",
            "Personas con trabajo de oficina."
        ]
    },
    {
        pregunta: "¿Qué debe hacerse con pacientes diabéticos sintomáticos respiratorios?",
        respuestaCorrecta: "Descartar tuberculosis.",
        opciones: [
            "Ignorar los síntomas.",
            "Descartar tuberculosis.",
            "Solo controlar la glucemia.",
            "Darles antibióticos sin diagnóstico."
        ]
    },
    {
        pregunta: "¿Qué debe hacerse con pacientes con TB respecto a diabetes?",
        respuestaCorrecta: "Investigar si tienen diabetes mellitus.",
        opciones: [
            "Solo preguntar por su trabajo.",
            "Investigar si tienen diabetes mellitus.",
            "Darles alta de inmediato.",
            "Restringirles el agua."
        ]
    },
    {
        pregunta: "¿Qué documento debe llenarse al registrar un SR?",
        respuestaCorrecta: "Libro de registro de sintomáticos respiratorios (PCT-2).",
        opciones: [
            "Diario personal del médico.",
            "Libro de registro de sintomáticos respiratorios (PCT-2).",
            "Libro de quejas.",
            "Recetario de cocina."
        ]
    },
    {
        pregunta: "¿Qué documento se usa para solicitar examen bacteriológico?",
        respuestaCorrecta: "Solicitud PCT-3.",
        opciones: [
            "Una tarjeta de presentación.",
            "Un recibo de pago.",
            "Solicitud PCT-3.",
            "Una hoja en blanco."
        ]
    },
    {
        pregunta: "¿Cuántas muestras de esputo se deben recolectar para baciloscopía?",
        respuestaCorrecta: "Dos muestras.",
        opciones: [
            "Solo una muestra.",
            "Dos muestras.",
            "Diez muestras.",
            "Ninguna muestra."
        ]
    },
    {
        pregunta: "¿Dónde debe recolectarse la muestra de esputo?",
        respuestaCorrecta: "En un área ventilada.",
        opciones: [
            "En un baño cerrado.",
            "En un área ventilada.",
            "En la cama del paciente.",
            "En la oficina del director."
        ]
    },
    {
        pregunta: "¿Qué debe hacer el paciente antes de recolectar la muestra?",
        respuestaCorrecta: "Enjuagarse la boca y sonarse la nariz.",
        opciones: [
            "Comer un gran almuerzo.",
            "Enjuagarse la boca y sonarse la nariz.",
            "Fumar un cigarrillo.",
            "Correr una maratón."
        ]
    },
    {
        pregunta: "¿Qué debe hacer el personal de salud al apoyar la toma de muestra?",
        respuestaCorrecta: "Usar respirador N-95.",
        opciones: [
            "Usar solo guantes de látex.",
            "Usar respirador N-95.",
            "Toser sin cubrirse.",
            "Cantar una canción."
        ]
    },
    {
        pregunta: "¿Cuándo se recolecta la segunda muestra de esputo?",
        respuestaCorrecta: "En casa, al despertar por la mañana.",
        opciones: [
            "Inmediatamente después de la primera.",
            "En casa, al despertar por la mañana.",
            "A la medianoche.",
            "Cuando se olvide."
        ]
    },
    {
        pregunta: "¿Qué debe hacerse si el paciente no puede expectorar?",
        respuestaCorrecta: "Indicar nebulización con solución salina.",
        opciones: [
            "Ignorar el problema.",
            "Indicar nebulización con solución salina.",
            "Gritarle al paciente.",
            "Darle pastillas para el dolor."
        ]
    },
    {
        pregunta: "¿Qué debe hacerse si el paciente tiene dificultad cognitiva o motora?",
        respuestaCorrecta: "Referir al hospital de segundo o tercer nivel.",
        opciones: [
            "Dejarlo sin diagnóstico.",
            "Referir al hospital de segundo o tercer nivel.",
            "Pedirle que corra.",
            "Darle solo vitaminas."
        ]
    },
    {
        pregunta: "¿Qué temperatura debe mantenerse para conservar las muestras?",
        respuestaCorrecta: "Entre 2 y 8 grados centígrados.",
        opciones: [
            "Temperatura ambiente.",
            "Entre 2 y 8 grados centígrados.",
            "Bajo cero.",
            "A 40 grados centígrados."
        ]
    },

    // Sección VII: Clasificación y Diagnóstico
    {
        pregunta: "¿Cómo se clasifica la tuberculosis miliar para fines de registro?",
        respuestaCorrecta: "Como tuberculosis pulmonar.",
        opciones: [
            "Como tuberculosis ósea.",
            "Como tuberculosis miliar atípica.",
            "Como tuberculosis pulmonar.",
            "Como tuberculosis extrapulmonar."
        ]
    },
    {
        pregunta: "¿Qué tipo de TB compromete el parénquima pulmonar?",
        respuestaCorrecta: "TB pulmonar bacteriológicamente confirmada.",
        opciones: [
            "TB extrapulmonar.",
            "TB pulmonar bacteriológicamente confirmada.",
            "TB latente.",
            "TB meníngea."
        ]
    },
    {
        pregunta: "¿Qué tipo de TB se diagnostica sin confirmación bacteriológica?",
        respuestaCorrecta: "TB clínicamente diagnosticada.",
        opciones: [
            "TB confirmada por cultivo.",
            "TB clínicamente diagnosticada.",
            "TB por PCR.",
            "TB latente."
        ]
    },
    {
        pregunta: "¿Qué tipo de TB afecta órganos fuera de los pulmones?",
        respuestaCorrecta: "TB extrapulmonar.",
        opciones: [
            "TB pulmonar.",
            "TB latente.",
            "TB extrapulmonar.",
            "TB resistente."
        ]
    },
    {
        pregunta: "¿Qué órgano puede estar afectado en TB extrapulmonar?",
        respuestaCorrecta: "Ganglios linfáticos, pleura, meninges, piel, entre otros.",
        opciones: [
            "Solo el corazón.",
            "Ganglios linfáticos, pleura, meninges, piel, entre otros.",
            "Solo el páncreas.",
            "Solo los ojos."
        ]
    },
    {
        pregunta: "¿Qué método diagnóstico utiliza la técnica de Zielh Neelsen?",
        respuestaCorrecta: "Baciloscopía.",
        opciones: [
            "Tomografía.",
            "Baciloscopía.",
            "Biopsia.",
            "Prueba de PPD."
        ]
    },
    {
        pregunta: "¿Qué tipo de muestra se usa para baciloscopía?",
        respuestaCorrecta: "Esputo.",
        opciones: [
            "Sangre total.",
            "Orina de la noche.",
            "Esputo.",
            "Muestra de cabello."
        ]
    },
    {
        pregunta: "¿Qué otro tipo de muestra puede usarse para baciloscopía?",
        respuestaCorrecta: "Líquidos corporales como orina o LCR.",
        opciones: [
            "Heces fecales.",
            "Lágrimas.",
            "Líquidos corporales como orina o LCR.",
            "Sudor."
        ]
    },
    {
        pregunta: "¿Qué método diagnóstico detecta resistencia a rifampicina?",
        respuestaCorrecta: "Prueba rápida molecular (MTB/RIF).",
        opciones: [
            "Radiografía simple.",
            "Prueba rápida molecular (MTB/RIF).",
            "Cultivo en medio líquido.",
            "Test de PPD."
        ]
    },
    {
        pregunta: "¿Qué método se usa para diagnóstico histológico?",
        respuestaCorrecta: "Biopsia.",
        opciones: [
            "Frotis de sangre.",
            "Análisis de orina.",
            "Biopsia.",
            "Electrocardiograma."
        ]
    },
    {
        pregunta: "¿Qué prueba se usa para detectar infección latente?",
        respuestaCorrecta: "Prueba de tuberculina (PPD).",
        opciones: [
            "Prueba de embarazo.",
            "Prueba de tuberculina (PPD).",
            "Cultivo de heces.",
            "Examen de la vista."
        ]
    },
    {
        pregunta: "¿Qué prueba mide adenosin deaminasa (ADA)?",
        respuestaCorrecta: "Prueba bioquímica para TB pleural.",
        opciones: [
            "Prueba de función tiroidea.",
            "Prueba bioquímica para TB pleural.",
            "Prueba de glucemia.",
            "Prueba de coagulación."
        ]
    },
    {
        pregunta: "¿Qué imagen se usa para evaluar TB pulmonar?",
        respuestaCorrecta: "Radiografía de tórax.",
        opciones: [
            "Ecografía de rodilla.",
            "Radiografía de tórax.",
            "Resonancia de columna.",
            "Mamografía."
        ]
    },
    {
        pregunta: "¿Qué estudio se usa para TB extrapulmonar compleja?",
        respuestaCorrecta: "Tomografía axial computarizada o resonancia magnética.",
        opciones: [
            "Revisión dental.",
            "Tomografía axial computarizada o resonancia magnética.",
            "Frotis de garganta.",
            "Análisis de vitaminas."
        ]
    },
    {
        pregunta: "¿Qué debe hacerse con las muestras si no hay laboratorio?",
        respuestaCorrecta: "Enviarlas al laboratorio de referencia.",
        opciones: [
            "Desecharlas inmediatamente.",
            "Enviarlas al laboratorio de referencia.",
            "Guardarlas en casa.",
            "Llevarlas a la farmacia."
        ]
    },
    {
        pregunta: "¿Cuántas veces por semana deben enviarse las muestras?",
        respuestaCorrecta: "Al menos dos veces por semana.",
        opciones: [
            "Una vez al mes.",
            "Al menos dos veces por semana.",
            "Cada seis meses.",
            "Solo si se viaja."
        ]
    },
    {
        pregunta: "¿Qué debe anotarse en el frasco de muestra?",
        respuestaCorrecta: "Nombre completo y número de muestra.",
        opciones: [
            "Una calcomanía.",
            "Nombre completo y número de muestra.",
            "Dibujos infantiles.",
            "Una receta médica."
        ]
    },
    {
        pregunta: "¿Qué documento se usa para registrar casos referidos?",
        respuestaCorrecta: "Libro de referencia de pacientes con TB (PCT-1).",
        opciones: [
            "Guía telefónica.",
            "Libro de referencia de pacientes con TB (PCT-1).",
            "Lista de compras.",
            "Hoja de vacaciones."
        ]
    },
    {
        pregunta: "¿Qué documento se usa para seguimiento de tratamiento?",
        respuestaCorrecta: "Hoja de referencia y retorno (PCT-8B).",
        opciones: [
            "Un mapa turístico.",
            "Hoja de referencia y retorno (PCT-8B).",
            "Un cómic.",
            "Una factura de luz."
        ]
    },
    {
        pregunta: "¿Qué documento se usa para ingreso al programa de TB?",
        respuestaCorrecta: "Registro general de casos de TB (PCT-5).",
        opciones: [
            "Un pasaporte.",
            "Registro general de casos de TB (PCT-5).",
            "Un menú de restaurante.",
            "Un libro de cuentos."
        ]
    }
];