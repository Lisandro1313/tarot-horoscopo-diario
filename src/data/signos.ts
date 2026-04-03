export interface Signo {
  id: string;
  nombre: string;
  emoji: string;
  fechas: string;
  elemento: string;
  colorPrimario: string;
  predicciones: {
    amor: string[];
    trabajo: string[];
    salud: string[];
    dinero: string[];
  };
}

export const SIGNOS: Signo[] = [
  {
    id: 'aries', nombre: 'Aries', emoji: '♈', fechas: '21 Mar - 19 Abr',
    elemento: 'Fuego', colorPrimario: '#E74C3C',
    predicciones: {
      amor: [
        'El universo conspira para acercar a las personas correctas. Abre tu corazón.',
        'Una conversación honesta fortalecerá tu relación hoy.',
        'El amor llega cuando menos lo esperas. Mantente abierto.',
        'Tu energía magnética atrae personas especiales hoy.',
        'Es un buen día para expresar lo que sientes sin miedo.',
      ],
      trabajo: [
        'Tu determinación te lleva al éxito. Los obstáculos son temporales.',
        'Un proyecto nuevo trae grandes oportunidades. Confía en tu instinto.',
        'La perseverancia es tu mayor virtud hoy. Sigue adelante.',
        'Tus ideas son valiosas. Compártelas con confianza.',
        'Un colega puede convertirse en aliado importante.',
      ],
      salud: [
        'Tu cuerpo te pide movimiento. Un paseo al aire libre te revitalizará.',
        'Descansa lo suficiente. La recuperación es parte del éxito.',
        'Escucha las señales de tu cuerpo y actúa con cuidado.',
        'El ejercicio moderado te traerá bienestar hoy.',
        'Hidrátate bien y cuida tu alimentación.',
      ],
      dinero: [
        'Evita gastos impulsivos. La prudencia es tu mejor inversión.',
        'Una oportunidad financiera puede presentarse hoy.',
        'Revisa tus gastos y encontrarás formas de ahorrar.',
        'Es buen momento para planificar tus finanzas a largo plazo.',
        'La constancia en el ahorro dará frutos pronto.',
      ],
    },
  },
  {
    id: 'tauro', nombre: 'Tauro', emoji: '♉', fechas: '20 Abr - 20 May',
    elemento: 'Tierra', colorPrimario: '#27AE60',
    predicciones: {
      amor: [
        'La estabilidad que buscas en el amor está más cerca de lo que crees.',
        'Un gesto pequeño puede significar mucho para tu pareja hoy.',
        'La paciencia en el amor siempre da frutos hermosos.',
        'Dedica tiempo de calidad a quienes más quieres.',
        'La lealtad es tu mayor regalo en las relaciones.',
      ],
      trabajo: [
        'Tu constancia y dedicación serán reconocidas pronto.',
        'Es momento de consolidar lo que has construido con esfuerzo.',
        'Un paso firme y seguro vale más que diez apresurados.',
        'Tu capacidad práctica resuelve hoy un problema difícil.',
        'La organización es tu superpoder laboral.',
      ],
      salud: [
        'Conecta con la naturaleza para recargar energías.',
        'Una dieta equilibrada marcará la diferencia en tu bienestar.',
        'El descanso profundo es lo que tu cuerpo necesita hoy.',
        'Practica actividades que disfrutes para mantenerte activo.',
        'La relajación consciente reduce el estrés acumulado.',
      ],
      dinero: [
        'Tu instinto financiero es sólido. Confía en él.',
        'Las inversiones pacientes dan los mejores resultados.',
        'Hoy es buen día para revisar y planificar tus ahorros.',
        'Evita decisiones financieras apresuradas.',
        'La estabilidad económica se construye día a día.',
      ],
    },
  },
  {
    id: 'geminis', nombre: 'Géminis', emoji: '♊', fechas: '21 May - 20 Jun',
    elemento: 'Aire', colorPrimario: '#F39C12',
    predicciones: {
      amor: [
        'Tu encanto natural conquista corazones sin esfuerzo hoy.',
        'La comunicación abierta sana cualquier malentendido.',
        'Un encuentro inesperado puede cambiar tu perspectiva amorosa.',
        'Expresa tus sentimientos con las palabras correctas.',
        'La variedad y el juego mantienen viva la llama del amor.',
      ],
      trabajo: [
        'Tu versatilidad es tu mayor fortaleza laboral hoy.',
        'Múltiples proyectos a la vez es donde brillas más.',
        'Una idea brillante llega en el momento justo.',
        'La comunicación fluida abre puertas importantes.',
        'Tu adaptabilidad resuelve situaciones complejas con gracia.',
      ],
      salud: [
        'Tu mente activa necesita también momentos de silencio.',
        'Ejercicios de respiración calmarán tu energía dispersa.',
        'Mantén una rutina de sueño regular para tu bienestar.',
        'Actividades mentales estimulantes son tu medicina.',
        'El equilibrio entre cuerpo y mente es clave hoy.',
      ],
      dinero: [
        'Tu ingenio puede generar ingresos inesperados.',
        'Diversificar tus fuentes de ingreso es tu camino.',
        'Lee bien los contratos antes de firmar.',
        'Una conversación puede revelar oportunidades financieras.',
        'La flexibilidad económica te da tranquilidad.',
      ],
    },
  },
  {
    id: 'cancer', nombre: 'Cáncer', emoji: '♋', fechas: '21 Jun - 22 Jul',
    elemento: 'Agua', colorPrimario: '#3498DB',
    predicciones: {
      amor: [
        'Tu capacidad de amar profundamente es un don único.',
        'El hogar y la familia son tu mayor fuente de amor hoy.',
        'Confía en tu intuición romántica, rara vez falla.',
        'Un momento de ternura fortalece los lazos importantes.',
        'El amor verdadero florece en la confianza mutua.',
      ],
      trabajo: [
        'Tu intuición laboral te guía hacia las decisiones correctas.',
        'Cuidar a tu equipo hoy multiplicará los resultados.',
        'Un ambiente armonioso aumenta tu productividad.',
        'Tu memoria y atención al detalle son invaluables.',
        'La empatía es tu herramienta de liderazgo más poderosa.',
      ],
      salud: [
        'Cuida tu salud emocional tanto como la física.',
        'El agua y la hidratación son especialmente importantes hoy.',
        'Un baño relajante puede restaurar tu energía.',
        'Las emociones guardadas afectan tu cuerpo. Exprésalas.',
        'Rodéate de personas que te nutran emocionalmente.',
      ],
      dinero: [
        'La seguridad financiera te da paz emocional. Ahorra.',
        'Protege tus recursos con sabiduría y prudencia.',
        'Las inversiones en el hogar son siempre buenas.',
        'Tu instinto te alerta sobre riesgos financieros. Escúchalo.',
        'Planificar para el futuro te da tranquilidad hoy.',
      ],
    },
  },
  {
    id: 'leo', nombre: 'Leo', emoji: '♌', fechas: '23 Jul - 22 Ago',
    elemento: 'Fuego', colorPrimario: '#E67E22',
    predicciones: {
      amor: [
        'Tu carisma irresistible ilumina cualquier relación hoy.',
        'El amor que das generosamente regresa multiplicado.',
        'Muestra tu corazón noble y conquista sin esfuerzo.',
        'Tu lealtad en el amor es tu mayor virtud.',
        'Un gesto grandioso puede sorprender a quien amas.',
      ],
      trabajo: [
        'Eres el líder natural que el equipo necesita hoy.',
        'Tu creatividad y visión inspiran a quienes te rodean.',
        'El reconocimiento que mereces está llegando.',
        'Asume proyectos desafiantes, es donde brillas.',
        'Tu confianza contagia positividad al equipo.',
      ],
      salud: [
        'Tu vitalidad es tu mayor riqueza. Cuídala.',
        'Actividades físicas intensas te llenan de energía.',
        'El sol y el aire libre recargan tu espíritu leonino.',
        'Tu corazón necesita amor y actividad física.',
        'Celebra cada pequeño logro de salud.',
      ],
      dinero: [
        'Tu generosidad es bella pero recuerda ahorrar también.',
        'Proyectos creativos pueden generar ingresos importantes.',
        'Tu confianza atrae oportunidades económicas.',
        'Invierte en ti mismo, es la mejor inversión.',
        'Un emprendimiento tuyo puede dar grandes frutos.',
      ],
    },
  },
  {
    id: 'virgo', nombre: 'Virgo', emoji: '♍', fechas: '23 Ago - 22 Sep',
    elemento: 'Tierra', colorPrimario: '#8E44AD',
    predicciones: {
      amor: [
        'Tu dedicación silenciosa habla más fuerte que mil palabras.',
        'El amor crece en los pequeños detalles que tú notas.',
        'Permítete recibir el amor que tan bien sabes dar.',
        'La perfección no existe, pero el amor sí.',
        'Tu cuidado y atención hacen sentir especial a tu pareja.',
      ],
      trabajo: [
        'Tu meticulosidad resuelve hoy lo que otros no pueden.',
        'Un análisis profundo revela la solución perfecta.',
        'Tu organización es el pilar del éxito del equipo.',
        'Los detalles que otros ignoran son tu especialidad.',
        'La calidad de tu trabajo habla por sí sola.',
      ],
      salud: [
        'La rutina de salud que mantienes da sus frutos.',
        'Presta atención a los pequeños síntomas y actúa.',
        'La alimentación consciente es tu medicina preventiva.',
        'El orden en tu vida reduce el estrés considerablemente.',
        'Tu cuerpo responde bien a la constancia y los hábitos.',
      ],
      dinero: [
        'Tu capacidad analítica identifica las mejores oportunidades.',
        'El presupuesto detallado que llevas te protege.',
        'Pequeños ahorros consistentes construyen grandes fortunas.',
        'Revisa bien los gastos, encontrarás dónde optimizar.',
        'La prudencia financiera es tu mayor fortaleza.',
      ],
    },
  },
  {
    id: 'libra', nombre: 'Libra', emoji: '♎', fechas: '23 Sep - 22 Oct',
    elemento: 'Aire', colorPrimario: '#16A085',
    predicciones: {
      amor: [
        'El equilibrio en el amor te trae la armonía que buscas.',
        'Tu encanto diplomático resuelve cualquier conflicto de pareja.',
        'Las relaciones justas y equilibradas te nutren el alma.',
        'Hoy es perfecto para hacer las paces y avanzar.',
        'Tu belleza interior atrae el amor genuino.',
      ],
      trabajo: [
        'Tu capacidad de mediar transforma conflictos en acuerdos.',
        'Las decisiones en equipo fluyen mejor con tu guía.',
        'Tu sentido estético agrega valor a cualquier proyecto.',
        'La diplomacia es hoy tu herramienta más poderosa.',
        'Un equilibrio entre trabajo y descanso maximiza tu rendimiento.',
      ],
      salud: [
        'El equilibrio en todos los aspectos de la vida es tu medicina.',
        'Actividades artísticas y creativas reducen tu estrés.',
        'La belleza y el orden en tu entorno mejoran tu salud.',
        'Cuida tus riñones con buena hidratación hoy.',
        'La paz interior se refleja en tu bienestar físico.',
      ],
      dinero: [
        'La justicia y el equilibrio guían tus decisiones financieras.',
        'Asociaciones equitativas pueden generar buenos ingresos.',
        'Compara opciones antes de decidir grandes compras.',
        'Tu sentido de equidad te protege de malos negocios.',
        'Invierte en experiencias que nutran tu bienestar.',
      ],
    },
  },
  {
    id: 'escorpio', nombre: 'Escorpio', emoji: '♏', fechas: '23 Oct - 21 Nov',
    elemento: 'Agua', colorPrimario: '#922B21',
    predicciones: {
      amor: [
        'Tu intensidad y pasión crean conexiones profundas e inolvidables.',
        'La verdad en el amor, aunque difícil, libera y sana.',
        'Tu lealtad absoluta merece ser correspondida.',
        'Una transformación en tu vida amorosa se avecina.',
        'El amor profundo que buscas existe y te encuentra.',
      ],
      trabajo: [
        'Tu poder de investigación descubre oportunidades ocultas.',
        'La perseverancia ante los obstáculos es tu superpoder.',
        'Una transformación laboral trae renovación positiva.',
        'Tu intuición detecta lo que otros no ven.',
        'Los desafíos intensos revelan tu verdadera capacidad.',
      ],
      salud: [
        'La transformación y regeneración son tus dones naturales.',
        'Libera emociones reprimidas para sanar en profundidad.',
        'Ejercicios intensos canalizan tu energía poderosa.',
        'La meditación profunda te conecta con tu fortaleza interior.',
        'Tu resiliencia supera cualquier desafío de salud.',
      ],
      dinero: [
        'Tu instinto financiero detecta oportunidades que otros pierden.',
        'Las inversiones a largo plazo son tu camino al éxito.',
        'La información es poder en tus decisiones económicas.',
        'Un secreto financiero puede revelarse en tu favor.',
        'Tu determinación construye la seguridad económica que mereces.',
      ],
    },
  },
  {
    id: 'sagitario', nombre: 'Sagitario', emoji: '♐', fechas: '22 Nov - 21 Dic',
    elemento: 'Fuego', colorPrimario: '#7D6608',
    predicciones: {
      amor: [
        'La aventura compartida fortalece los lazos del amor.',
        'Tu optimismo contagioso enamora a quien te rodea.',
        'El amor libre y honesto es el que mejor te sienta.',
        'Nuevas experiencias con tu pareja renuevan la llama.',
        'Tu filosofía de vida atrae almas afines.',
      ],
      trabajo: [
        'Tu visión amplia ve oportunidades donde otros ven límites.',
        'La expansión y el crecimiento son tu destino hoy.',
        'Un viaje o proyecto nuevo abre horizontes profesionales.',
        'Tu entusiasmo inspira y motiva a todo el equipo.',
        'La libertad creativa produce tus mejores resultados.',
      ],
      salud: [
        'El movimiento y la libertad son esenciales para tu salud.',
        'Actividades al aire libre recargan tu espíritu aventurero.',
        'El optimismo tiene efectos reales en tu bienestar físico.',
        'Cuida tus caderas y muslos con ejercicio apropiado.',
        'Explorar nuevas disciplinas de salud te beneficia.',
      ],
      dinero: [
        'La abundancia llega cuando actúas con fe y optimismo.',
        'Oportunidades financieras en el extranjero o viajes.',
        'Tu generosidad regresa multiplicada en abundancia.',
        'Arriesga con sabiduría en proyectos que te apasionan.',
        'La suerte favorece a los valientes hoy.',
      ],
    },
  },
  {
    id: 'capricornio', nombre: 'Capricornio', emoji: '♑', fechas: '22 Dic - 19 Ene',
    elemento: 'Tierra', colorPrimario: '#566573',
    predicciones: {
      amor: [
        'Tu amor serio y comprometido construye relaciones eternas.',
        'La paciencia en el amor produce frutos maravillosos.',
        'Tu lealtad y responsabilidad hacen de ti el mejor compañero.',
        'Muestra también tu lado tierno y vulnerable.',
        'El amor sólido que construyes merece celebrarse.',
      ],
      trabajo: [
        'Tu ambición disciplinada te lleva inexorablemente al éxito.',
        'La cima que buscas está más cerca de lo que parece.',
        'Tu capacidad de trabajo supera a la de cualquiera.',
        'La planificación cuidadosa garantiza el logro de tus metas.',
        'El respeto que inspiras abre puertas importantes hoy.',
      ],
      salud: [
        'La disciplina en tu rutina de salud da resultados visibles.',
        'Cuida tus huesos y articulaciones con ejercicio constante.',
        'El descanso programado es parte de tu estrategia de éxito.',
        'La perseverancia en los hábitos saludables transforma tu cuerpo.',
        'El equilibrio entre trabajo y descanso es clave.',
      ],
      dinero: [
        'Tu disciplina financiera construye una fortuna sólida.',
        'Las inversiones conservadoras pero constantes funcionan.',
        'Tu capacidad de trabajo genera ingresos crecientes.',
        'Planifica a largo plazo, es donde mejor te desempeñas.',
        'La seguridad económica que buscas está al alcance.',
      ],
    },
  },
  {
    id: 'acuario', nombre: 'Acuario', emoji: '♒', fechas: '20 Ene - 18 Feb',
    elemento: 'Aire', colorPrimario: '#2980B9',
    predicciones: {
      amor: [
        'Tu originalidad y libertad atraen almas únicas y especiales.',
        'Una amistad profunda puede convertirse en amor verdadero.',
        'El amor que respeta la individualidad es el que te nutre.',
        'Tu visión futurista incluye un amor revolucionario.',
        'La conexión mental profunda es tu portal al amor.',
      ],
      trabajo: [
        'Tu pensamiento innovador resuelve problemas de manera única.',
        'El futuro que imaginas hoy puede ser realidad mañana.',
        'Las ideas revolucionarias son tu contribución al mundo.',
        'La tecnología y la innovación son tus aliadas.',
        'Tu visión colectiva mejora a todo el equipo.',
      ],
      salud: [
        'Las terapias alternativas y novedosas pueden beneficiarte.',
        'La circulación y el sistema nervioso merecen tu atención.',
        'Actividades en grupo o comunidad nutren tu bienestar.',
        'Tu mente necesita estímulos intelectuales constantes.',
        'El desapego mental de las preocupaciones sana el cuerpo.',
      ],
      dinero: [
        'Proyectos tecnológicos e innovadores generan tus mayores ganancias.',
        'Invierte en el futuro, es donde están las mejores oportunidades.',
        'Tu visión única identifica tendencias antes que nadie.',
        'La economía colaborativa y las redes son tu terreno.',
        'Un proyecto humanitario puede también ser rentable.',
      ],
    },
  },
  {
    id: 'piscis', nombre: 'Piscis', emoji: '♓', fechas: '19 Feb - 20 Mar',
    elemento: 'Agua', colorPrimario: '#1ABC9C',
    predicciones: {
      amor: [
        'Tu amor incondicional es el más puro y genuino del zodiaco.',
        'La conexión espiritual con tu pareja se profundiza hoy.',
        'El romance que sueñas puede manifestarse en lo cotidiano.',
        'Tu empatía hace que el amor fluya naturalmente hacia ti.',
        'Un sueño revelador puede guiarte en el amor.',
      ],
      trabajo: [
        'Tu creatividad e intuición producen resultados extraordinarios.',
        'Las artes, la música y la sanación son tus campos naturales.',
        'Tu empatía te hace invaluable en cualquier equipo.',
        'La inspiración que buscas llega en el momento perfecto.',
        'Confía en tu visión artística y creativa.',
      ],
      salud: [
        'El agua y la hidratación son especialmente beneficiosas hoy.',
        'La meditación y la espiritualidad sanan tu cuerpo y mente.',
        'Cuida tus pies con atención y cariño.',
        'El sueño profundo es tu mayor medicina regeneradora.',
        'Las emociones fluidas mantienen tu salud en equilibrio.',
      ],
      dinero: [
        'Tu intuición financiera es poderosa cuando la escuchas.',
        'Las artes y la creatividad pueden generar ingresos especiales.',
        'Cuidado con los engaños financieros, verifica todo.',
        'La generosidad que tienes regresa en abundancia.',
        'Confía en que el universo provee lo que necesitas.',
      ],
    },
  },
];

export type CategoriaHoro = 'amor' | 'trabajo' | 'salud' | 'dinero';

export const CATEGORIAS_HORO: { id: CategoriaHoro; label: string; emoji: string }[] = [
  { id: 'amor', label: 'Amor', emoji: '❤️' },
  { id: 'trabajo', label: 'Trabajo', emoji: '💼' },
  { id: 'salud', label: 'Salud', emoji: '💪' },
  { id: 'dinero', label: 'Dinero', emoji: '💰' },
];

export function getPrediccionDelDia(signoId: string, categoria: CategoriaHoro): string {
  const signo = SIGNOS.find(s => s.id === signoId);
  if (!signo) return '';
  const hoy = new Date();
  const seed = hoy.getFullYear() * 500 + hoy.getMonth() * 40 + hoy.getDate();
  const lista = signo.predicciones[categoria];
  return lista[seed % lista.length];
}
