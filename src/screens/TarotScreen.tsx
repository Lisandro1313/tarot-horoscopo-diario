import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  ScrollView, Share, Animated,
} from 'react-native';
import { getTiradaDiaria, getTiradaAleatoria, getTiradaTresCartas, CartaTarot } from '../data/tarot';

type Modo = 'una' | 'tres';

interface CartaConPosicion {
  carta: CartaTarot;
  invertida: boolean;
  posicion?: string;
}

export default function TarotScreen() {
  const [modo, setModo] = useState<Modo>('una');
  const [tirada, setTirada] = useState<CartaConPosicion>(getTiradaDiaria());
  const [tiradaTres, setTiradaTres] = useState<CartaConPosicion[]>([]);
  const [revelada, setRevelada] = useState(false);
  const [cartaExpandida, setCartaExpandida] = useState<number | null>(null);
  const [fadeAnim] = useState(new Animated.Value(1));

  const nuevaTirada = () => {
    setRevelada(false);
    setCartaExpandida(null);
    Animated.timing(fadeAnim, { toValue: 0, duration: 200, useNativeDriver: true }).start(() => {
      if (modo === 'una') {
        setTirada(getTiradaAleatoria());
      } else {
        setTiradaTres(getTiradaTresCartas());
      }
      Animated.timing(fadeAnim, { toValue: 1, duration: 400, useNativeDriver: true }).start();
    });
  };

  const iniciarTres = () => {
    setTiradaTres(getTiradaTresCartas());
    setRevelada(false);
    setCartaExpandida(null);
  };

  const compartir = async () => {
    if (modo === 'una') {
      const { carta, invertida } = tirada;
      await Share.share({
        message: `${carta.emoji} Mi carta del tarot: ${carta.nombre}${invertida ? ' (invertida)' : ''}\n\n"${invertida ? carta.significadoInvertido : carta.significadoPositivo}"\n\nConsejo: ${carta.consejo}\n\nDescargá Tarot y Horóscopo Diario ✨`,
      });
    } else {
      const texto = tiradaTres.map(t =>
        `${t.posicion}: ${t.carta.emoji} ${t.carta.nombre}${t.invertida ? ' (invertida)' : ''}`
      ).join('\n');
      await Share.share({ message: `🔮 Mi tirada de 3 cartas:\n\n${texto}\n\nDescargá Tarot y Horóscopo Diario ✨` });
    }
  };

  const { carta, invertida } = tirada;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.titulo}>🔮 Tirada de Tarot</Text>

      {/* Selector de modo */}
      <View style={styles.modoRow}>
        <TouchableOpacity
          style={[styles.modoBtn, modo === 'una' && styles.modoBtnActivo]}
          onPress={() => { setModo('una'); setRevelada(false); }}
        >
          <Text style={[styles.modoBtnText, modo === 'una' && styles.modoBtnTextActivo]}>🃏 Una carta</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.modoBtn, modo === 'tres' && styles.modoBtnActivo]}
          onPress={() => { setModo('tres'); iniciarTres(); }}
        >
          <Text style={[styles.modoBtnText, modo === 'tres' && styles.modoBtnTextActivo]}>🔮 Tres cartas</Text>
        </TouchableOpacity>
      </View>

      {/* MODO: UNA CARTA */}
      {modo === 'una' && (
        <Animated.View style={[styles.modoContainer, { opacity: fadeAnim }]}>
          <Text style={styles.subtitulo}>Los arcanos mayores revelan tu camino</Text>

          <View style={styles.cartaContainer}>
            <View style={[styles.carta, invertida && styles.cartaInvertida]}>
              <Text style={styles.cartaEmoji}>{carta.emoji}</Text>
              <Text style={styles.cartaNumero}>Arcano {carta.id === 0 ? '0' : carta.id}</Text>
              <Text style={styles.cartaNombre}>{carta.nombre}</Text>
              {invertida && <Text style={styles.cartaInvertidaLabel}>Invertida</Text>}
              <Text style={styles.cartaPalabraClave}>{carta.palabraClave}</Text>
            </View>
          </View>

          {!revelada ? (
            <TouchableOpacity style={styles.btnRevelar} onPress={() => setRevelada(true)}>
              <Text style={styles.btnRevelarText}>🔮  Revelar el significado</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.significadoContainer}>
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
            </View>
          )}
        </Animated.View>
      )}

      {/* MODO: TRES CARTAS */}
      {modo === 'tres' && tiradaTres.length === 3 && (
        <Animated.View style={[styles.modoContainer, { opacity: fadeAnim }]}>
          <Text style={styles.subtitulo}>Pasado · Presente · Futuro</Text>

          <View style={styles.tresMiniCartas}>
            {tiradaTres.map((t, i) => (
              <TouchableOpacity
                key={i}
                style={[
                  styles.miniCarta,
                  t.invertida && styles.miniCartaInvertida,
                  cartaExpandida === i && styles.miniCartaExpandida,
                ]}
                onPress={() => setCartaExpandida(cartaExpandida === i ? null : i)}
              >
                <Text style={styles.miniCartaPosicion}>{t.posicion}</Text>
                <Text style={styles.miniCartaEmoji}>{t.carta.emoji}</Text>
                <Text style={styles.miniCartaNombre}>{t.carta.nombre}</Text>
                {t.invertida && <Text style={styles.invertidaMini}>↓</Text>}
              </TouchableOpacity>
            ))}
          </View>

          {cartaExpandida !== null && (
            <View style={styles.detalleExpandido}>
              <View style={styles.significadoCard}>
                <Text style={styles.significadoLabel}>
                  {tiradaTres[cartaExpandida].posicion} — {tiradaTres[cartaExpandida].invertida ? '⬇️ Invertida' : '⬆️ Positiva'}
                </Text>
                <Text style={styles.significadoTexto}>
                  {tiradaTres[cartaExpandida].invertida
                    ? tiradaTres[cartaExpandida].carta.significadoInvertido
                    : tiradaTres[cartaExpandida].carta.significadoPositivo}
                </Text>
              </View>
              <View style={styles.consejoCard}>
                <Text style={styles.consejoLabel}>💡 Consejo</Text>
                <Text style={styles.consejoTexto}>{tiradaTres[cartaExpandida].carta.consejo}</Text>
              </View>
            </View>
          )}

          <View style={styles.botonesRow}>
            <TouchableOpacity style={styles.btnNueva} onPress={nuevaTirada}>
              <Text style={styles.btnNuevaText}>🔮  Nueva tirada</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCompartir} onPress={compartir}>
              <Text style={styles.btnCompartirText}>📤  Compartir</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}

      <View style={styles.infoContainer}>
        <Text style={styles.infoTexto}>Los 22 Arcanos Mayores del Tarot Rider-Waite</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0d0d1a' },
  content: { paddingBottom: 40, alignItems: 'center' },
  titulo: { fontSize: 22, fontWeight: 'bold', color: '#FFD700', textAlign: 'center', paddingTop: 20, marginBottom: 16 },
  subtitulo: { fontSize: 14, color: '#888', textAlign: 'center', marginBottom: 24 },

  modoRow: { flexDirection: 'row', gap: 10, marginBottom: 20, paddingHorizontal: 16, width: '100%' },
  modoBtn: {
    flex: 1, backgroundColor: '#1a1a2e', borderRadius: 14,
    paddingVertical: 12, alignItems: 'center',
    borderWidth: 2, borderColor: '#333',
  },
  modoBtnActivo: { borderColor: '#FFD700', backgroundColor: '#FFD70011' },
  modoBtnText: { color: '#888', fontSize: 14, fontWeight: '700' },
  modoBtnTextActivo: { color: '#FFD700' },

  modoContainer: { width: '100%', alignItems: 'center' },

  cartaContainer: { alignItems: 'center', marginBottom: 24 },
  carta: {
    width: 200, alignItems: 'center',
    backgroundColor: '#1a1a2e', borderRadius: 20,
    paddingVertical: 30, paddingHorizontal: 20,
    borderWidth: 2, borderColor: '#FFD700',
    shadowColor: '#FFD700', shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4, shadowRadius: 10, elevation: 10,
  },
  cartaInvertida: { transform: [{ rotate: '180deg' }] },
  cartaEmoji: { fontSize: 60, marginBottom: 12 },
  cartaNumero: { fontSize: 12, color: '#FFD700', fontWeight: '600', letterSpacing: 1 },
  cartaNombre: { fontSize: 20, color: '#fff', fontWeight: 'bold', textAlign: 'center', marginTop: 6 },
  cartaInvertidaLabel: {
    fontSize: 11, color: '#E74C3C', marginTop: 4,
    backgroundColor: '#E74C3C22', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 10,
  },
  cartaPalabraClave: { fontSize: 14, color: '#FFD70088', marginTop: 8, fontStyle: 'italic' },

  tresMiniCartas: { flexDirection: 'row', gap: 8, paddingHorizontal: 16, marginBottom: 16 },
  miniCarta: {
    flex: 1, backgroundColor: '#1a1a2e', borderRadius: 14, padding: 12,
    alignItems: 'center', borderWidth: 2, borderColor: '#333',
  },
  miniCartaInvertida: { opacity: 0.8 },
  miniCartaExpandida: { borderColor: '#FFD700', backgroundColor: '#FFD70011' },
  miniCartaPosicion: { color: '#888', fontSize: 10, fontWeight: '700', letterSpacing: 1, marginBottom: 6, textTransform: 'uppercase' },
  miniCartaEmoji: { fontSize: 32, marginBottom: 6 },
  miniCartaNombre: { color: '#fff', fontSize: 11, fontWeight: '600', textAlign: 'center' },
  invertidaMini: { color: '#E74C3C', fontSize: 14, fontWeight: '900', marginTop: 4 },

  detalleExpandido: { width: '100%', paddingHorizontal: 16, marginBottom: 16 },
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
  botonesRow: { flexDirection: 'row', gap: 12, marginBottom: 24, paddingHorizontal: 16, width: '100%' },
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
});
