import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  ScrollView, TextInput,
} from 'react-native';

interface NumInfo {
  numero: number;
  nombre: string;
  emoji: string;
  descripcion: string;
  fortalezas: string[];
  desafios: string[];
  color: string;
}

const NUMEROS: Record<number, NumInfo> = {
  1: {
    numero: 1, nombre: 'El Líder', emoji: '👑', color: '#FFD700',
    descripcion: 'Eres un pionero nato. Tu energía es de liderazgo, independencia y creación. Tienes la capacidad de iniciar proyectos y abrirte camino donde otros no lo ven.',
    fortalezas: ['Liderazgo', 'Iniciativa', 'Determinación', 'Creatividad'],
    desafios: ['Ego', 'Soledad', 'Autoritarismo'],
  },
  2: {
    numero: 2, nombre: 'El Diplomático', emoji: '🤝', color: '#4FC3F7',
    descripcion: 'Tu energía es de cooperación y armonía. Eres un mediador excepcional con una intuición muy desarrollada. Encontrás el equilibrio donde otros ven conflicto.',
    fortalezas: ['Sensibilidad', 'Diplomacia', 'Intuición', 'Cooperación'],
    desafios: ['Indecisión', 'Dependencia emocional', 'Pasividad'],
  },
  3: {
    numero: 3, nombre: 'El Creativo', emoji: '🎨', color: '#FF9800',
    descripcion: 'Eres un ser creativo y expresivo. Tu talento para la comunicación y el arte es extraordinario. La alegría y el optimismo son tu motor.',
    fortalezas: ['Creatividad', 'Comunicación', 'Optimismo', 'Entusiasmo'],
    desafios: ['Dispersión', 'Superficialidad', 'Crítica'],
  },
  4: {
    numero: 4, nombre: 'El Constructor', emoji: '🏗️', color: '#8D6E63',
    descripcion: 'Eres sólido y confiable como una roca. Tu energía es de trabajo, disciplina y construcción de bases duraderas. La constancia es tu mayor virtud.',
    fortalezas: ['Disciplina', 'Trabajo duro', 'Confiabilidad', 'Organización'],
    desafios: ['Rigidez', 'Terquedad', 'Monotonía'],
  },
  5: {
    numero: 5, nombre: 'El Aventurero', emoji: '🌍', color: '#4CAF50',
    descripcion: 'Eres un amante de la libertad y el cambio. Tu energía es dinámica y adaptable. La aventura y la variedad son esenciales para tu bienestar.',
    fortalezas: ['Libertad', 'Adaptabilidad', 'Curiosidad', 'Dinamismo'],
    desafios: ['Inestabilidad', 'Irresponsabilidad', 'Excesos'],
  },
  6: {
    numero: 6, nombre: 'El Nutritor', emoji: '❤️', color: '#E91E63',
    descripcion: 'Eres el cuidador del zodiaco numerológico. Tu energía se orienta al hogar, la familia y el servicio. El amor y la responsabilidad definen tu camino.',
    fortalezas: ['Amor', 'Responsabilidad', 'Armonía', 'Servicio'],
    desafios: ['Sobreprotección', 'Mártir', 'Perfeccionismo'],
  },
  7: {
    numero: 7, nombre: 'El Sabio', emoji: '🔭', color: '#9C27B0',
    descripcion: 'Eres un buscador de la verdad y el conocimiento profundo. Tu energía es analítica y espiritual. La introspección es tu camino hacia la sabiduría.',
    fortalezas: ['Análisis', 'Espiritualidad', 'Perfección', 'Sabiduría'],
    desafios: ['Aislamiento', 'Frialdad', 'Desconfianza'],
  },
  8: {
    numero: 8, nombre: 'El Ejecutivo', emoji: '💼', color: '#607D8B',
    descripcion: 'Eres un ser de poder y ambición. Tu energía es ejecutiva y orientada al éxito material. El equilibrio entre el mundo material y espiritual es tu lección.',
    fortalezas: ['Ambición', 'Ejecutividad', 'Resiliencia', 'Visión'],
    desafios: ['Materialismo', 'Control', 'Workaholismo'],
  },
  9: {
    numero: 9, nombre: 'El Humanista', emoji: '🌟', color: '#FF5722',
    descripcion: 'Eres el más evolucionado de los números. Tu energía es de compasión universal y servicio a la humanidad. El desapego y la generosidad son tus mayores dones.',
    fortalezas: ['Compasión', 'Universalidad', 'Generosidad', 'Sabiduría'],
    desafios: ['Impracticidad', 'Sacrificio excesivo', 'Ingenuidad'],
  },
  11: {
    numero: 11, nombre: 'El Visionario', emoji: '⚡', color: '#E1BEE7',
    descripcion: 'Número maestro. Eres un canal de energía espiritual elevada. Tu intuición es sobrenatural y tu misión es inspirar a otros con tu luz.',
    fortalezas: ['Intuición maestra', 'Inspiración', 'Sensibilidad elevada'],
    desafios: ['Alta tensión nerviosa', 'Idealismo extremo'],
  },
  22: {
    numero: 22, nombre: 'El Constructor Maestro', emoji: '🏛️', color: '#B0BEC5',
    descripcion: 'Número maestro máximo. Tienes la capacidad de convertir grandes sueños en realidad tangible. Tu potencial para impactar el mundo es ilimitado.',
    fortalezas: ['Visión maestra', 'Poder creativo', 'Practicidad elevada'],
    desafios: ['Presión de expectativas', 'Agotamiento'],
  },
  33: {
    numero: 33, nombre: 'El Maestro Espiritual', emoji: '✨', color: '#FFF9C4',
    descripcion: 'El número maestro de la enseñanza universal. Eres un maestro compasivo con una misión espiritual elevada al servicio de todos.',
    fortalezas: ['Amor incondicional', 'Enseñanza', 'Curación'],
    desafios: ['Carga emocional', 'Perfeccionismo espiritual'],
  },
};

function reducirNumero(n: number): number {
  if (n === 11 || n === 22 || n === 33) return n;
  if (n < 10) return n;
  return reducirNumero(String(n).split('').reduce((a, b) => a + parseInt(b), 0));
}

function calcularNumeroPorNombre(nombre: string): number {
  const tabla: Record<string, number> = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
    j: 1, k: 2, l: 3, m: 4, n: 5, o: 6, p: 7, q: 8, r: 9,
    s: 1, t: 2, u: 3, v: 4, w: 5, x: 6, y: 7, z: 8,
  };
  const suma = nombre.toLowerCase().replace(/[^a-z]/g, '')
    .split('').reduce((acc, c) => acc + (tabla[c] ?? 0), 0);
  return reducirNumero(suma);
}

export default function NumerologiaScreen() {
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [anio, setAnio] = useState('');
  const [nombre, setNombre] = useState('');
  const [resultado, setResultado] = useState<{
    sendero: number; expresion: number; anioPersonal: number;
  } | null>(null);

  const calcular = () => {
    const d = parseInt(dia), m = parseInt(mes), a = parseInt(anio);
    if (!d || !m || !a || isNaN(d) || isNaN(m) || isNaN(a)) return;
    if (d < 1 || d > 31 || m < 1 || m > 12) return;

    // Número de Sendero de Vida
    const sumaDia = reducirNumero(d);
    const sumaMes = reducirNumero(m);
    const sumaAnio = reducirNumero(String(a).split('').reduce((acc, c) => acc + parseInt(c), 0));
    const sendero = reducirNumero(sumaDia + sumaMes + sumaAnio);

    // Número de Expresión (por nombre)
    const expresion = nombre.trim() ? calcularNumeroPorNombre(nombre) : 0;

    // Año Personal
    const hoy = new Date();
    const sumaFecha = reducirNumero(d + m + reducirNumero(hoy.getFullYear()));
    const anioPersonal = reducirNumero(sumaFecha);

    setResultado({ sendero, expresion, anioPersonal });
  };

  const limpiar = () => {
    setDia(''); setMes(''); setAnio(''); setNombre('');
    setResultado(null);
  };

  const renderNumero = (num: number, titulo: string) => {
    const info = NUMEROS[num];
    if (!info) return null;
    return (
      <View style={[styles.numeroCard, { borderLeftColor: info.color }]} key={titulo}>
        <View style={styles.numeroHeader}>
          <Text style={styles.numeroEmoji}>{info.emoji}</Text>
          <View style={styles.numeroTitleBox}>
            <Text style={styles.numeroCabecera}>{titulo}</Text>
            <Text style={[styles.numeroBig, { color: info.color }]}>{num}</Text>
          </View>
          <Text style={[styles.numeroNombre, { color: info.color }]}>{info.nombre}</Text>
        </View>
        <Text style={styles.numeroDesc}>{info.descripcion}</Text>
        <View style={styles.fortalezasRow}>
          {info.fortalezas.map(f => (
            <View key={f} style={[styles.tagChip, { backgroundColor: info.color + '22' }]}>
              <Text style={[styles.tagText, { color: info.color }]}>✦ {f}</Text>
            </View>
          ))}
        </View>
        <View style={styles.desafiosRow}>
          {info.desafios.map(d => (
            <View key={d} style={styles.desafioChip}>
              <Text style={styles.desafioText}>⚠ {d}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.titulo}>🔢 Numerología</Text>
      <Text style={styles.subtitulo}>Descubrí los números que rigen tu vida</Text>

      <View style={styles.form}>
        <Text style={styles.formLabel}>Fecha de nacimiento</Text>
        <View style={styles.fechaRow}>
          <TextInput
            style={styles.input} value={dia} onChangeText={setDia}
            placeholder="Día" placeholderTextColor="#555"
            keyboardType="numeric" maxLength={2}
          />
          <TextInput
            style={styles.input} value={mes} onChangeText={setMes}
            placeholder="Mes" placeholderTextColor="#555"
            keyboardType="numeric" maxLength={2}
          />
          <TextInput
            style={[styles.input, { flex: 1.5 }]} value={anio} onChangeText={setAnio}
            placeholder="Año" placeholderTextColor="#555"
            keyboardType="numeric" maxLength={4}
          />
        </View>

        <Text style={styles.formLabel}>Nombre completo (opcional)</Text>
        <TextInput
          style={[styles.input, styles.inputNombre]}
          value={nombre} onChangeText={setNombre}
          placeholder="Tu nombre para calcular el número de expresión"
          placeholderTextColor="#555"
          autoCorrect={false}
        />

        <View style={styles.btnsRow}>
          <TouchableOpacity style={styles.btnCalc} onPress={calcular}>
            <Text style={styles.btnCalcText}>✨ Calcular</Text>
          </TouchableOpacity>
          {resultado && (
            <TouchableOpacity style={styles.btnLimpiar} onPress={limpiar}>
              <Text style={styles.btnLimpiarText}>✕</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {resultado && (
        <View style={styles.resultados}>
          {renderNumero(resultado.sendero, 'Sendero de Vida')}
          {resultado.expresion > 0 && renderNumero(resultado.expresion, 'Número de Expresión')}
          {renderNumero(resultado.anioPersonal, 'Año Personal ' + new Date().getFullYear())}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0d0d1a' },
  content: { padding: 16, paddingBottom: 40 },
  titulo: { fontSize: 22, fontWeight: '800', color: '#FFD700', marginBottom: 4 },
  subtitulo: { fontSize: 14, color: '#666', marginBottom: 20 },

  form: { backgroundColor: '#1a1a2e', borderRadius: 18, padding: 18, marginBottom: 20 },
  formLabel: { color: '#888', fontSize: 12, letterSpacing: 1, marginBottom: 8, textTransform: 'uppercase' },
  fechaRow: { flexDirection: 'row', gap: 8, marginBottom: 12 },
  input: {
    flex: 1, backgroundColor: '#0d0d1a', borderRadius: 10, padding: 12,
    color: '#fff', fontSize: 15, borderWidth: 1, borderColor: '#333',
  },
  inputNombre: { flex: 0, marginBottom: 16 },
  btnsRow: { flexDirection: 'row', gap: 10 },
  btnCalc: {
    flex: 1, backgroundColor: '#533483', borderRadius: 12,
    paddingVertical: 14, alignItems: 'center',
  },
  btnCalcText: { color: '#fff', fontWeight: '700', fontSize: 16 },
  btnLimpiar: {
    backgroundColor: '#1a1a2e', borderRadius: 12, paddingHorizontal: 18,
    paddingVertical: 14, alignItems: 'center', borderWidth: 1, borderColor: '#333',
  },
  btnLimpiarText: { color: '#888', fontSize: 16 },

  resultados: { gap: 14 },
  numeroCard: {
    backgroundColor: '#1a1a2e', borderRadius: 18, padding: 18, borderLeftWidth: 4,
  },
  numeroHeader: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 12 },
  numeroEmoji: { fontSize: 36 },
  numeroTitleBox: { flex: 0, alignItems: 'center', gap: 0 },
  numeroCabecera: { color: '#888', fontSize: 10, letterSpacing: 1, textTransform: 'uppercase' },
  numeroBig: { fontSize: 40, fontWeight: '900' },
  numeroNombre: { flex: 1, fontSize: 17, fontWeight: '700', textAlign: 'right' },
  numeroDesc: { color: '#ccc', fontSize: 14, lineHeight: 22, marginBottom: 12 },
  fortalezasRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginBottom: 8 },
  tagChip: { paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20 },
  tagText: { fontSize: 12, fontWeight: '600' },
  desafiosRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  desafioChip: { backgroundColor: '#ffffff0d', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20 },
  desafioText: { color: '#888', fontSize: 11 },
});
