import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function AgendarConsulta() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [ubs, setUbs] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');

  function agendar() {
    if (!nome || !ubs || !data || !hora) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    Alert.alert(
      'Consulta agendada',
      `Paciente: ${nome}\nUBS: ${ubs}\nData: ${data}\nHora: ${hora}`
    );

    setNome('');
    setUbs('');
    setData('');
    setHora('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardContainer}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={28} color="#FFF" />
            </TouchableOpacity>

            <Text style={styles.title}>Agendar Consulta</Text>
          </View>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Seu nome"
              placeholderTextColor="#94A3B8"
              value={nome}
              onChangeText={setNome}
              autoCapitalize="words"
            />

            <TextInput
              style={styles.input}
              placeholder="UBS desejada"
              placeholderTextColor="#94A3B8"
              value={ubs}
              onChangeText={setUbs}
            />

            <TextInput
              style={styles.input}
              placeholder="Data (ex: 20/06/2026)"
              placeholderTextColor="#94A3B8"
              value={data}
              onChangeText={setData}
              keyboardType="numeric"
            />

            <TextInput
              style={styles.input}
              placeholder="Horario (ex: 14:30)"
              placeholderTextColor="#94A3B8"
              value={hora}
              onChangeText={setHora}
              keyboardType="numeric"
            />

            <TouchableOpacity style={styles.button} onPress={agendar}>
              <Text style={styles.buttonText}>Confirmar Agendamento</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  keyboardContainer: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
  },

  header: {
    backgroundColor: '#10B981',
    padding: 25,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  title: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 15,
  },

  form: {
    padding: 20,
  },

  input: {
    backgroundColor: '#FFF',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  button: {
    backgroundColor: '#10B981',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
