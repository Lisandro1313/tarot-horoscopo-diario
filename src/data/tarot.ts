export interface CartaTarot {
  id: number;
  nombre: string;
  emoji: string;
  palabraClave: string;
  significadoPositivo: string;
  significadoInvertido: string;
  consejo: string;
}

export const ARCANOS_MAYORES: CartaTarot[] = [
  {
    id: 0, nombre: 'El Loco', emoji: '🃏', palabraClave: 'Nuevos comienzos',
    significadoPositivo: 'Un nuevo capítulo comienza en tu vida. La aventura y la libertad te llaman. Es momento de dar el salto con fe.',
    significadoInvertido: 'Hay imprudencia en tus acciones. Detente y piensa antes de actuar.',
    consejo: 'Confía en el universo y da el primer paso sin miedo.',
  },
  {
    id: 1, nombre: 'El Mago', emoji: '🔮', palabraClave: 'Manifestación',
    significadoPositivo: 'Tienes todo lo que necesitas para lograr tus metas. El poder de manifestar está en tus manos.',
    significadoInvertido: 'Talentos desperdiciados o manipulación. Usa tu poder con sabiduría.',
    consejo: 'Enfoca tu voluntad en un solo objetivo hoy.',
  },
  {
    id: 2, nombre: 'La Sacerdotisa', emoji: '🌙', palabraClave: 'Intuición',
    significadoPositivo: 'Tu intuición está en su punto más alto. Los misterios se revelan ante quien escucha su voz interior.',
    significadoInvertido: 'Ignoras tu intuición. Confía más en ti mismo.',
    consejo: 'El silencio y la meditación revelan respuestas importantes.',
  },
  {
    id: 3, nombre: 'La Emperatriz', emoji: '👑', palabraClave: 'Abundancia',
    significadoPositivo: 'La abundancia, la fertilidad y la creatividad florecen en tu vida. Es tiempo de crecer.',
    significadoInvertido: 'Dependencia o creatividad bloqueada. Reconecta con la naturaleza.',
    consejo: 'Nutre tus proyectos y relaciones con amor y paciencia.',
  },
  {
    id: 4, nombre: 'El Emperador', emoji: '⚔️', palabraClave: 'Autoridad',
    significadoPositivo: 'La estructura y la disciplina te llevan al éxito. Toma el control de tu vida con confianza.',
    significadoInvertido: 'Exceso de control o falta de flexibilidad. Aprende a soltar.',
    consejo: 'Establece límites claros y lidera con firmeza y justicia.',
  },
  {
    id: 5, nombre: 'El Hierofante', emoji: '⛪', palabraClave: 'Tradición',
    significadoPositivo: 'La sabiduría tradicional y espiritual te guía. Busca consejo en quien tiene experiencia.',
    significadoInvertido: 'Dogmatismo o conformismo. Cuestiona lo establecido con respeto.',
    consejo: 'La fe y los valores sólidos son tu ancla en tiempos de cambio.',
  },
  {
    id: 6, nombre: 'Los Enamorados', emoji: '💕', palabraClave: 'Elección',
    significadoPositivo: 'Una decisión importante sobre el amor o los valores se presenta. El corazón conoce la respuesta.',
    significadoInvertido: 'Conflicto interno o elección difícil. Escucha tu corazón.',
    consejo: 'Elige desde el amor y los valores, no desde el miedo.',
  },
  {
    id: 7, nombre: 'El Carro', emoji: '🏆', palabraClave: 'Victoria',
    significadoPositivo: 'La victoria es tuya si mantienes el control y la determinación. Avanza con confianza.',
    significadoInvertido: 'Falta de dirección o control. Enfoca tu energía.',
    consejo: 'La disciplina y la voluntad te llevan exactamente donde quieres ir.',
  },
  {
    id: 8, nombre: 'La Fuerza', emoji: '🦁', palabraClave: 'Coraje',
    significadoPositivo: 'Tu fortaleza interior supera cualquier obstáculo. El dominio suave es más poderoso que la fuerza bruta.',
    significadoInvertido: 'Dudas de tu propia fuerza. Confía en ti.',
    consejo: 'Enfrenta tus miedos con amor y compasión hacia ti mismo.',
  },
  {
    id: 9, nombre: 'El Ermitaño', emoji: '🕯️', palabraClave: 'Reflexión',
    significadoPositivo: 'Un período de reflexión y sabiduría interior. La soledad elegida trae grandes revelaciones.',
    significadoInvertido: 'Aislamiento excesivo. Busca conexión con otros.',
    consejo: 'Dedica tiempo a la introspección, las respuestas están dentro de ti.',
  },
  {
    id: 10, nombre: 'La Rueda de la Fortuna', emoji: '🎡', palabraClave: 'Destino',
    significadoPositivo: 'Un giro positivo en tu destino. Los ciclos cambian a tu favor. La buena fortuna se acerca.',
    significadoInvertido: 'Resistencia al cambio. Los ciclos siguen aunque no lo quieras.',
    consejo: 'Acepta los cambios del destino con gracia y confianza.',
  },
  {
    id: 11, nombre: 'La Justicia', emoji: '⚖️', palabraClave: 'Equilibrio',
    significadoPositivo: 'La verdad y la justicia prevalecen. Recibirás lo que mereces. El karma actúa a tu favor.',
    significadoInvertido: 'Injusticia o desequilibrio. Busca la verdad con honestidad.',
    consejo: 'Actúa con integridad y el universo te recompensará.',
  },
  {
    id: 12, nombre: 'El Colgado', emoji: '🙃', palabraClave: 'Pausa',
    significadoPositivo: 'Una pausa necesaria trae una nueva perspectiva. Lo que sacrificas hoy, regresa transformado.',
    significadoInvertido: 'Martirio innecesario. No todo requiere sacrificio.',
    consejo: 'Suelta el control y permite que la vida fluya a su propio ritmo.',
  },
  {
    id: 13, nombre: 'La Muerte', emoji: '🦋', palabraClave: 'Transformación',
    significadoPositivo: 'No temas, esta carta anuncia transformación y renacimiento. Los finales son nuevos comienzos disfrazados.',
    significadoInvertido: 'Resistencia al cambio inevitable. Suelta lo que ya terminó.',
    consejo: 'Abraza la transformación con valentía. De las cenizas nace lo nuevo.',
  },
  {
    id: 14, nombre: 'La Templanza', emoji: '🌊', palabraClave: 'Armonía',
    significadoPositivo: 'El equilibrio perfecto entre opuestos crea magia. La paciencia y la moderación son tus aliadas.',
    significadoInvertido: 'Exceso o desequilibrio. Busca la moderación en todo.',
    consejo: 'Mezcla con sabiduría tus energías para crear algo hermoso.',
  },
  {
    id: 15, nombre: 'El Diablo', emoji: '🔗', palabraClave: 'Liberación',
    significadoPositivo: 'Reconoce qué te tiene encadenado. La conciencia de la trampa es el primer paso para liberarte.',
    significadoInvertido: 'Las cadenas que te limitan son más fáciles de romper de lo que crees.',
    consejo: 'Identifica tus miedos y adicciones para liberarte de ellos.',
  },
  {
    id: 16, nombre: 'La Torre', emoji: '⚡', palabraClave: 'Revelación',
    significadoPositivo: 'Una verdad reveladora sacude tu mundo. Las estructuras falsas caen para que lo verdadero permanezca.',
    significadoInvertido: 'Evitas el cambio necesario. La torre caerá de todas formas.',
    consejo: 'Los cambios súbitos traen liberación. Confía en el proceso.',
  },
  {
    id: 17, nombre: 'La Estrella', emoji: '⭐', palabraClave: 'Esperanza',
    significadoPositivo: 'Después de la tormenta, la estrella guía. La esperanza y la renovación llenan tu camino de luz.',
    significadoInvertido: 'Desesperanza temporal. La luz siempre regresa.',
    consejo: 'Mantén la fe en el futuro. Las estrellas siempre guían el camino.',
  },
  {
    id: 18, nombre: 'La Luna', emoji: '🌕', palabraClave: 'Misterio',
    significadoPositivo: 'El subconsciente habla. Presta atención a tus sueños e intuiciones profundas.',
    significadoInvertido: 'Confusión e ilusiones. Busca claridad antes de actuar.',
    consejo: 'No todo es lo que parece. Profundiza antes de juzgar.',
  },
  {
    id: 19, nombre: 'El Sol', emoji: '☀️', palabraClave: 'Éxito',
    significadoPositivo: '¡La carta más positiva del tarot! El éxito, la alegría y la vitalidad brillan en tu vida.',
    significadoInvertido: 'El éxito llega, solo necesita un poco más de tiempo.',
    consejo: 'Celebra tu luz interior y compártela con el mundo sin miedo.',
  },
  {
    id: 20, nombre: 'El Juicio', emoji: '📯', palabraClave: 'Renacimiento',
    significadoPositivo: 'Un despertar espiritual y un llamado a tu propósito más elevado. Es momento de responder.',
    significadoInvertido: 'Ignorar el llamado de tu alma. Reflexiona sobre tu propósito.',
    consejo: 'Escucha el llamado de tu alma y responde con valentía.',
  },
  {
    id: 21, nombre: 'El Mundo', emoji: '🌍', palabraClave: 'Completitud',
    significadoPositivo: 'Un ciclo se completa con éxito total. La realización y la plenitud son tuyas. ¡Celebra!',
    significadoInvertido: 'El ciclo casi termina. Completa lo que empezaste.',
    consejo: 'Reconoce todo lo que has logrado. Eres más de lo que crees.',
  },
];

export function getTiradaDiaria(): { carta: CartaTarot; invertida: boolean } {
  const hoy = new Date();
  const seed = hoy.getFullYear() * 700 + hoy.getMonth() * 50 + hoy.getDate();
  const carta = ARCANOS_MAYORES[seed % ARCANOS_MAYORES.length];
  const invertida = seed % 3 === 0;
  return { carta, invertida };
}

export function getTiradaAleatoria(): { carta: CartaTarot; invertida: boolean } {
  const carta = ARCANOS_MAYORES[Math.floor(Math.random() * ARCANOS_MAYORES.length)];
  const invertida = Math.random() > 0.7;
  return { carta, invertida };
}

export function getTiradaTresCartas(): Array<{ carta: CartaTarot; invertida: boolean; posicion: string }> {
  const posiciones = ['Pasado', 'Presente', 'Futuro'];
  const indices: number[] = [];
  while (indices.length < 3) {
    const idx = Math.floor(Math.random() * ARCANOS_MAYORES.length);
    if (!indices.includes(idx)) indices.push(idx);
  }
  return indices.map((idx, i) => ({
    carta: ARCANOS_MAYORES[idx],
    invertida: Math.random() > 0.7,
    posicion: posiciones[i],
  }));
}
