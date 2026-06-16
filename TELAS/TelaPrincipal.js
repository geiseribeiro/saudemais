import { useState } from 'react';
import {
  Alert,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function TelaPrincipal({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [emailRecuperacao, setEmailRecuperacao] = useState('');

  function recuperarSenha() {
    if (!emailRecuperacao) {
      Alert.alert('Erro', 'Digite seu e-mail');
      return;
    }

    Alert.alert(
      'Recuperacao enviada',
      `Se existir uma conta com ${emailRecuperacao}, enviaremos instrucoes de recuperacao.`
    );

    setEmailRecuperacao('');
    setModalVisible(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.logo}>Saude+</Text>
          <Text style={styles.subtitle}>
            Informacao que cuida da nossa comunidade.
          </Text>

          <View style={styles.locationRow}>
            <Ionicons name="location" size={22} color="#38BDF8" />
            <Text style={styles.locationText}>Carutapera - MA</Text>
          </View>
        </View>

        <View style={styles.welcomeCard}>
          <View style={styles.welcomeIcon}>
            <Ionicons name="people-outline" size={42} color="#2563EB" />
          </View>

          <View style={styles.welcomeContent}>
            <Text style={styles.welcomeTitle}>Bem-vindo ao Saude+!</Text>
            <Text style={styles.welcomeText}>
              Seu guia de informacoes sobre as UBS de Carutapera.
            </Text>
          </View>

          <Ionicons name="calendar-outline" size={50} color="#60A5FA" />
        </View>

        <TouchableOpacity
          style={styles.menuCard}
          onPress={() => navigation.navigate('LocalizarUBS')}
        >
          <View style={[styles.iconBox, { backgroundColor: '#0EA5E9' }]}>
            <Ionicons name="location" size={55} color="#FFFFFF" />
          </View>

          <View style={styles.menuContent}>
            <Text style={styles.menuTitle}>Localizar UBS</Text>
            <Text style={styles.menuDescription}>
              Encontre as UBS de Carutapera.
            </Text>
          </View>

          <Ionicons name="chevron-forward" size={30} color="#0EA5E9" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuCard}
          onPress={() => navigation.navigate('AgendarConsulta')}
        >
          <View style={[styles.iconBox, { backgroundColor: '#10B981' }]}>
            <Ionicons name="calendar" size={55} color="#FFFFFF" />
          </View>

          <View style={styles.menuContent}>
            <Text style={styles.menuTitle}>Agendar Consulta</Text>
            <Text style={styles.menuDescription}>
              Solicite um horario de atendimento.
            </Text>
          </View>

          <Ionicons name="chevron-forward" size={30} color="#10B981" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuCard}
          onPress={() => navigation.navigate('Configuracoes')}
        >
          <View style={[styles.iconBox, { backgroundColor: '#8B5CF6' }]}>
            <Ionicons name="settings" size={55} color="#FFFFFF" />
          </View>

          <View style={styles.menuContent}>
            <Text style={styles.menuTitle}>Configuracoes</Text>
            <Text style={styles.menuDescription}>
              Personalize o aplicativo.
            </Text>
          </View>

          <Ionicons name="chevron-forward" size={30} color="#8B5CF6" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.recoveryCard}
          onPress={() => setModalVisible(true)}
        >
          <Ionicons name="key" size={30} color="#F97316" />
          <Text style={styles.recoveryText}>Recuperar senha</Text>
        </TouchableOpacity>

        <View style={styles.infoCard}>
          <View style={styles.infoIcon}>
            <Ionicons name="shield-checkmark" size={35} color="#2563EB" />
          </View>

          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>
              Informacao confiavel, saude mais proxima de voce.
            </Text>
            <Text style={styles.infoText}>
              Acompanhe as UBS da nossa cidade.
            </Text>
          </View>

          <Ionicons name="medical" size={45} color="#2563EB" />
        </View>
      </ScrollView>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modal}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Recuperar senha</Text>

            <TextInput
              style={styles.input}
              placeholder="Digite seu e-mail"
              value={emailRecuperacao}
              onChangeText={setEmailRecuperacao}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TouchableOpacity style={styles.button} onPress={recuperarSenha}>
              <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },

  header: {
    backgroundColor: '#0F5EF7',
    paddingTop: 50,
    paddingHorizontal: 30,
    paddingBottom: 80,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },

  logo: { color: '#FFF', fontSize: 58, fontWeight: 'bold' },

  subtitle: { color: '#FFF', fontSize: 24, marginTop: 20 },

  locationRow: { flexDirection: 'row', marginTop: 20, alignItems: 'center' },

  locationText: { color: '#FFF', marginLeft: 8 },

  welcomeCard: {
    backgroundColor: '#FFF',
    margin: 20,
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  welcomeIcon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#E0F2FE',
    justifyContent: 'center',
    alignItems: 'center',
  },

  welcomeContent: { flex: 1, marginHorizontal: 15 },

  welcomeTitle: { fontSize: 18, fontWeight: 'bold' },

  welcomeText: { color: '#475569' },

  menuCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    margin: 20,
    padding: 18,
    borderRadius: 20,
    alignItems: 'center',
  },

  iconBox: {
    width: 60,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuContent: { flex: 1, marginLeft: 15 },

  menuTitle: { fontSize: 18, fontWeight: 'bold' },

  menuDescription: { color: '#64748B' },

  recoveryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    padding: 18,
    borderRadius: 20,
    backgroundColor: '#FFF7ED',
  },

  recoveryText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F97316',
  },

  infoCard: {
    margin: 20,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#F1F5F9',
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E0F2FE',
    justifyContent: 'center',
    alignItems: 'center',
  },

  infoContent: { flex: 1, marginHorizontal: 10 },

  infoTitle: { fontWeight: 'bold' },

  infoText: { color: '#475569' },

  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalBox: {
    width: '85%',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 20,
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#F97316',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: { color: '#FFF', fontWeight: 'bold' },

  closeText: { marginTop: 10, color: '#2563EB' },
});
