import { useState } from 'react';
import {Alert,KeyboardAvoidingView,Platform,SafeAreaView,ScrollView,StyleSheet,Text,TextInput,TouchableOpacity,View,} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function AgendarConsulta() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [ubs, setUbs] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [tipo, setTipo] = useState('Clinico geral');

  const tiposConsulta = ['Clinico geral', 'Enfermagem', 'Odontologia'];

  function agendar() {
    if (!nome || !ubs || !data || !hora) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    Alert.alert(
      'Consulta agendada',
      `Paciente: ${nome}\nConsulta: ${tipo}\nUBS: ${ubs}\nData: ${data}\nHora: ${hora}`
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

          <View style={styles.summaryCard}>
            <View style={styles.summaryIcon}>
              <Ionicons name="medkit" size={36} color="#10B981" />
            </View>

            <View style={styles.summaryContent}>
              <Text style={styles.summaryTitle}>Solicite seu atendimento</Text>
              <Text style={styles.summaryText}>
                Preencha os dados abaixo para registrar o pedido de consulta na
                UBS escolhida.
              </Text>
            </View>
          </View>

          <View style={styles.form}>
            <Text style={styles.label}>Tipo de consulta</Text>

            <View style={styles.chips}>
              {tiposConsulta.map((item) => {
                const selected = tipo === item;

                return (
                  <TouchableOpacity
                    key={item}
                    style={[styles.chip, selected && styles.chipSelected]}
                    onPress={() => setTipo(item)}
                  >
                    <Text
                      style={[
                        styles.chipText,
                        selected && styles.chipTextSelected,
                      ]}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <Text style={styles.label}>Paciente</Text>
            <TextInput
              style={styles.input}
              placeholder="Seu nome"
              placeholderTextColor="#94A3B8"
              value={nome}
              onChangeText={setNome}
              autoCapitalize="words"
            />

            <Text style={styles.label}>UBS</Text>
            <TextInput
              style={styles.input}
              placeholder="UBS desejada"
              placeholderTextColor="#94A3B8"
              value={ubs}
              onChangeText={setUbs}
            />

            <Text style={styles.label}>Data</Text>
            <TextInput
              style={styles.input}
              placeholder="Data (ex: 20/06/2026)"
              placeholderTextColor="#94A3B8"
              value={data}
              onChangeText={setData}
              keyboardType="numeric"
            />

            <Text style={styles.label}>Horario</Text>
            <TextInput
              style={styles.input}
              placeholder="Horario (ex: 14:30)"
              placeholderTextColor="#94A3B8"
              value={hora}
              onChangeText={setHora}
              keyboardType="numeric"
            />

            <TouchableOpacity style={styles.button} onPress={agendar}>
              <Ionicons name="checkmark-circle" size={22} color="#FFF" />
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

  summaryCard: {
    backgroundColor: '#FFF',
    margin: 20,
    padding: 18,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },

  summaryIcon: {
    width: 62,
    height: 62,
    borderRadius: 18,
    backgroundColor: '#DCFCE7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  summaryContent: {
    flex: 1,
    marginLeft: 14,
  },

  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F172A',
  },

  summaryText: {
    marginTop: 6,
    color: '#64748B',
  },

  label: {
    color: '#334155',
    fontWeight: 'bold',
    marginBottom: 8,
  },

  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 18,
  },

  chip: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#BBF7D0',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
  },

  chipSelected: {
    backgroundColor: '#10B981',
    borderColor: '#10B981',
  },

  chipText: {
    color: '#166534',
    fontWeight: 'bold',
  },

  chipTextSelected: {
    color: '#FFF',
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
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
});
