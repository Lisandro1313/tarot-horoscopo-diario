import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  ScrollView, Share, Animated,
} from 'react-native';
import { getTiradaDiaria, getTiradaAleatoria, CartaTarot } from '../data/tarot';

export default function TarotScreen() {
  const tiradaDiaria = getTiradaDiaria();
  const [cartaActual, setCartaActual] = useState<{ carta: CartaTarot; invertida: boolean }>(tiradaDiaria);
  const [revelada, setRevelada] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(1));

  const nuevaTirada = () => {
    setRevelada(false);
    Animated.timing(fadeAnim, { toValue: 0, duration: 200, useNativeDriver: true }).start(() => {
      setCartaActual(getTiradaAleatoria());
      Animated.timing(fadeAnim, { toValue: 1, duration: 400, useNativeDriver: true }).start();
    });
  };

  const revelar = () => setRevelada(true);

  const compartir = async () => {
    const { carta, invertida } = cartaActual;
    await Share.share({
      message: `${carta.emoji} Mi carta del tarot: ${carta.nombre}${invertida ? ' (invertida)' : ''}\n\n"${invertida ? carta.significadoInvertido : carta.significadoPositivo}"\n\nConsejo: ${carta.consejo}\n\nDescargá Tarot y Horóscopo Diario ✨`,
    });
  };

  const { carta, invertida } = cartaActual;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.titulo}>Tirada de Tarot</Text>
      <Text style={styles.subtitulo}>Los arcanos mayores revelan tu camino</Text>

      {/* Carta */}
      <Animated.View style={[styles.cartaContainer, { opacity: fadeAnim }]}>
        <View style={[styles.carta, invertida && styles.cartaInvertida]}>
          <Text style={styles.cartaEmoji}>{carta.emoji}</Text>
          <Text style={styles.cartaNumero}>Arcano {carta.id === 0 ? '0' : carta.id}</Text>
          <Text style={styles.cartaNombre}>{carta.nombre}</Text>
          {invertida && <Text style={styles.cartaInvertidaLabel}>Invertida</Text>}
          <Text style={styles.cartaPalabraClave}>{carta.palabraClave}</Text>
        </View>
      </Animated.View>

      {/* Revelar */}
      {!revelada ? (
        <TouchableOpacity style={styles.btnRevelar} onPress={revelar}>
          <Text style={styles.btnRevelarText}>🔮  Revelar el significado</Text>
        </TouchableOpacity>
      ) : (
        <Animated.View style={[styles.significadoContainer, { opacity: fadeAnim }]}>
          <View style={styles.significadoCard}>
            <Text style={styles.significadoLabel}>
              {invertida ? '⬇️ Mensaje invertido' : '⬆️ Mensaje positivo'}
            </Text>
            <Text style={styles.significadoTexto}>
              {invertida ? carta.significadoInvertido : carta.significadoPositivo}
            </Text>
          </View>

          <View style={styles.consejoCard}>
            <Text style={styles.consejoLabel}>💡 Consejo del día</Text>
            <Text style={styles.consejoTexto}>{carta.consejo}</Text>
          </View>

          <View style={styles.botonesRow}>
            <TouchableOpacity style={styles.btnNueva} onPress={nuevaTirada}>
              <Text style={styles.btnNuevaText}>🃏  Nueva tirada</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCompartir} onPress={compartir}>
              <Text style={styles.btnCompartirText}>📤  Compartir</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}

      {/* Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoTexto}>
          Los 22 Arcanos Mayores del Tarot Rider-Waite
        </Text>
        <Text style={styles.infoSubTexto}>
          La carta del día se renueva cada medianoche
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0d0d1a' },
  content: { paddingBottom: 40, alignItems: 'center' },
  titulo: {
    fontSize: 24, fontWeight: 'bold', color: '#FFD700',
    textAlign: 'center', paddingTop: 20,
  },
  subtitulo: {
    fontSize: 14, color: '#888', textAlign: 'center', marginTop: 6, marginBottom: 30,
  },
  cartaContainer: { alignItems: 'center', marginBottom: 24 },
  carta: {
    width: 200, alignItems: 'center',
    backgroundColor: '#1a1a2e', borderRadius: 20,
    paddingVertical: 30, paddingHorizontal: 20,
    borderWidth: 2, borderColor: '#FFD700',
    elevation: 10,
    shadowColor: '#FFD700', shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4, shadowRadius: 10,
  },
  cartaInvertida: { transform: [{ rotate: '180deg' }] },
  cartaEmoji: { fontSize: 60, marginBottom: 12 },
  cartaNumero: { fontSize: 12, color: '#FFD700', fontWeight: '600', letterSpacing: 1 },
  cartaNombre: {
    fontSize: 20, color: '#fff', fontWeight: 'bold',
    textAlign: 'center', marginTop: 6,
  },
  cartaInvertidaLabel: {
    fontSize: 11, color: '#E74C3C', marginTop: 4,
    backgroundColor: '#E74C3C22', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 10,
  },
  cartaPalabraClave: {
    fontSize: 14, color: '#FFD70088', marginTop: 8, fontStyle: 'italic',
  },
  btnRevelar: {
    backgroundColor: '#533483', paddingVertical: 16, paddingHorizontal: 40,
    borderRadius: 14, marginBottom: 24,
  },
  btnRevelarText: { color: '#fff', fontSize: 17, fontWeight: '700' },
  significadoContainer: { width: '100%', paddingHorizontal: 16 },
  significadoCard: {
    backgroundColor: '#1a1a2e', borderRadius: 16, padding: 20, marginBottom: 12,
    borderLeftWidth: 3, borderLeftColor: '#FFD700',
  },
  significadoLabel: { fontSize: 13, color: '#FFD700', fontWeight: '700', marginBottom: 10 },
  significadoTexto: { fontSize: 16, color: '#e8e8f0', lineHeight: 24, fontStyle: 'italic' },
  consejoCard: {
    backgroundColor: '#1a1a2e', borderRadius: 16, padding: 20, marginBottom: 16,
    borderLeftWidth: 3, borderLeftColor: '#533483',
  },
  consejoLabel: { fontSize: 13, color: '#a78bfa', fontWeight: '700', marginBottom: 10 },
  consejoTexto: { fontSize: 15, color: '#e8e8f0', lineHeight: 22 },
  botonesRow: { flexDirection: 'row', gap: 12, marginBottom: 24 },
  btnNueva: {
    flex: 1, backgroundColor: '#1a1a2e', paddingVertical: 14,
    borderRadius: 14, alignItems: 'center', borderWidth: 1, borderColor: '#FFD700',
  },
  btnNuevaText: { color: '#FFD700', fontSize: 15, fontWeight: '600' },
  btnCompartir: {
    flex: 1, backgroundColor: '#533483', paddingVertical: 14,
    borderRadius: 14, alignItems: 'center',
  },
  btnCompartirText: { color: '#fff', fontSize: 15, fontWeight: '600' },
  infoContainer: { alignItems: 'center', paddingHorizontal: 20 },
  infoTexto: { color: '#555', fontSize: 13, textAlign: 'center' },
  infoSubTexto: { color: '#444', fontSize: 12, marginTop: 4, textAlign: 'center' },
});
