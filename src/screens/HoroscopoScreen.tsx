import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  ScrollView, Share, Animated,
} from 'react-native';
import { SIGNOS, CATEGORIAS_HORO, CategoriaHoro, getPrediccionDelDia } from '../data/signos';

export default function HoroscopoScreen() {
  const [signoSeleccionado, setSignoSeleccionado] = useState<string | null>(null);
  const [categoriaActiva, setCategoriaActiva] = useState<CategoriaHoro>('amor');
  const [fadeAnim] = useState(new Animated.Value(1));

  const signo = SIGNOS.find(s => s.id === signoSeleccionado);
  const prediccion = signoSeleccionado ? getPrediccionDelDia(signoSeleccionado, categoriaActiva) : null;

  const cambiarCategoria = (cat: CategoriaHoro) => {
    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 0, duration: 150, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
    ]).start();
    setTimeout(() => setCategoriaActiva(cat), 150);
  };

  const compartir = async () => {
    if (!signo || !prediccion) return;
    const cat = CATEGORIAS_HORO.find(c => c.id === categoriaActiva);
    await Share.share({
      message: `${signo.emoji} ${signo.nombre} — ${cat?.label} de hoy\n\n"${prediccion}"\n\nDescargá Tarot y Horóscopo Diario ✨`,
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.titulo}>Tu Horóscopo Diario</Text>
      <Text style={styles.subtitulo}>¿Cuál es tu signo?</Text>

      {/* Grid de signos */}
      <View style={styles.signosGrid}>
        {SIGNOS.map(s => (
          <TouchableOpacity
            key={s.id}
            style={[
              styles.signoBtn,
              signoSeleccionado === s.id && { backgroundColor: s.colorPrimario + '44', borderColor: s.colorPrimario },
            ]}
            onPress={() => setSignoSeleccionado(s.id)}
          >
            <Text style={styles.signoEmoji}>{s.emoji}</Text>
            <Text style={[styles.signoNombre, signoSeleccionado === s.id && { color: s.colorPrimario }]}>
              {s.nombre}
            </Text>
            <Text style={styles.signoFechas}>{s.fechas}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Predicción */}
      {signo && prediccion && (
        <View style={styles.prediccionContainer}>
          <View style={[styles.signoHeader, { borderColor: signo.colorPrimario }]}>
            <Text style={styles.signoHeaderEmoji}>{signo.emoji}</Text>
            <View>
              <Text style={[styles.signoHeaderNombre, { color: signo.colorPrimario }]}>{signo.nombre}</Text>
              <Text style={styles.signoHeaderElemento}>{signo.elemento} · {signo.fechas}</Text>
            </View>
          </View>

          {/* Tabs categorías */}
          <View style={styles.categoriasRow}>
            {CATEGORIAS_HORO.map(cat => (
              <TouchableOpacity
                key={cat.id}
                style={[styles.catTab, categoriaActiva === cat.id && { backgroundColor: signo.colorPrimario }]}
                onPress={() => cambiarCategoria(cat.id)}
              >
                <Text style={styles.catTabEmoji}>{cat.emoji}</Text>
                <Text style={[styles.catTabText, categoriaActiva === cat.id && styles.catTabTextActivo]}>
                  {cat.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Texto predicción */}
          <Animated.View style={[styles.prediccionCard, { opacity: fadeAnim }]}>
            <Text style={styles.prediccionTexto}>✨ {prediccion}</Text>
          </Animated.View>

          <TouchableOpacity style={[styles.btnCompartir, { backgroundColor: signo.colorPrimario }]} onPress={compartir}>
            <Text style={styles.btnCompartirText}>📤  Compartir mi horóscopo</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0d0d1a' },
  content: { paddingBottom: 40 },
  titulo: {
    fontSize: 24, fontWeight: 'bold', color: '#FFD700',
    textAlign: 'center', paddingTop: 20, paddingHorizontal: 20,
  },
  subtitulo: {
    fontSize: 15, color: '#888', textAlign: 'center', marginTop: 6, marginBottom: 20,
  },
  signosGrid: {
    flexDirection: 'row', flexWrap: 'wrap',
    paddingHorizontal: 16, gap: 10, justifyContent: 'center',
  },
  signoBtn: {
    width: '22%', alignItems: 'center',
    backgroundColor: '#1a1a2e', borderRadius: 12,
    paddingVertical: 10, paddingHorizontal: 4,
    borderWidth: 1, borderColor: '#2a2a4a',
  },
  signoEmoji: { fontSize: 22 },
  signoNombre: { fontSize: 11, color: '#ccc', fontWeight: '600', marginTop: 4 },
  signoFechas: { fontSize: 8, color: '#666', textAlign: 'center', marginTop: 2 },
  prediccionContainer: { marginHorizontal: 16, marginTop: 24 },
  signoHeader: {
    flexDirection: 'row', alignItems: 'center', gap: 14,
    backgroundColor: '#1a1a2e', borderRadius: 14,
    padding: 16, borderLeftWidth: 4, marginBottom: 14,
  },
  signoHeaderEmoji: { fontSize: 36 },
  signoHeaderNombre: { fontSize: 22, fontWeight: 'bold' },
  signoHeaderElemento: { fontSize: 13, color: '#888', marginTop: 2 },
  categoriasRow: {
    flexDirection: 'row', gap: 8, marginBottom: 14,
  },
  catTab: {
    flex: 1, alignItems: 'center', paddingVertical: 10,
    backgroundColor: '#1a1a2e', borderRadius: 12,
  },
  catTabEmoji: { fontSize: 18 },
  catTabText: { fontSize: 11, color: '#888', marginTop: 3, fontWeight: '500' },
  catTabTextActivo: { color: '#fff', fontWeight: '700' },
  prediccionCard: {
    backgroundColor: '#1a1a2e', borderRadius: 16,
    padding: 22, marginBottom: 16,
  },
  prediccionTexto: {
    fontSize: 17, color: '#e8e8f0', lineHeight: 26,
    textAlign: 'center', fontStyle: 'italic',
  },
  btnCompartir: {
    paddingVertical: 15, borderRadius: 14, alignItems: 'center',
  },
  btnCompartirText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
