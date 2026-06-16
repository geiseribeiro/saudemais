import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {Alert,Linking,Modal,SafeAreaView,ScrollView,StyleSheet,Switch,Text,TextInput,TouchableOpacity,View,} from 'react-native';

export default function Configuracoes() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [section, setSection] = useState('');

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [logado, setLogado] = useState(false);

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [nascimento, setNascimento] = useState('');

  const [camera, setCamera] = useState(false);
  const [localizacao, setLocalizacao] = useState(false);

  const [modoEscuro, setModoEscuro] = useState(false);
  const [idioma, setIdioma] = useState('PT');

  const contaFake = {
    email: 'teste@app.com',
    senha: '123456',
  };

  function openModal(sec) {
    setSection(sec);
    setModalVisible(true);
  }

  function fazerLogin() {
    if (email === contaFake.email && senha === contaFake.senha) {
      setLogado(true);
      setModalVisible(false);
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
    } else {
      Alert.alert('Erro', 'E-mail ou senha incorretos!');
    }
  }

  function renderTitle() {
    switch (section) {
      case 'dados':
        return 'Dados Pessoais';
      case 'privacidade':
        return 'Privacidade e Segurança';
      case 'aparência':
        return 'Aparência';
      case 'ajuda':
        return 'Ajuda e Suporte';
      case 'login':
        return 'Login / Entrar';
      default:
        return '';
    }
  }

  function renderContent() {
    switch (section) {
      case 'login':
        return (
          <>
            {logado ? (
              <Text style={styles.successText}>Você ja esta logado</Text>
            ) : (
              <>
                <Text style={styles.label}>E-mail</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />

                <Text style={styles.label}>Senha</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite sua senha"
                  secureTextEntry
                  value={senha}
                  onChangeText={setSenha}
                />

                <TouchableOpacity style={styles.loginButton} onPress={fazerLogin}>
                  <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <Text style={styles.helperText}>Use: teste@app.com / 123456</Text>
              </>
            )}
          </>
        );

      case 'dados':
        return (
          <>
            <TextInput
              style={styles.input}
              placeholder="Nome completo"
              value={nome}
              onChangeText={setNome}
            />

            <TextInput
              style={styles.input}
              placeholder="CPF"
              keyboardType="numeric"
              value={cpf}
              onChangeText={setCpf}
            />

            <TextInput
              style={styles.input}
              placeholder="Data de nascimento"
              value={nascimento}
              onChangeText={setNascimento}
            />
          </>
        );

      case 'privacidade':
        return (
          <>
            <View style={styles.switchRow}>
              <Text style={styles.label}>Permitir câmera</Text>
              <Switch value={camera} onValueChange={setCamera} />
            </View>

            <View style={styles.switchRow}>
              <Text style={styles.label}>Permitir localizacão</Text>
              <Switch value={localizacao} onValueChange={setLocalizacao} />
            </View>
          </>
        );

      case 'aparência':
        return (
          <>
            <View style={styles.switchRow}>
              <Text style={styles.label}>Modo escuro</Text>
              <Switch value={modoEscuro} onValueChange={setModoEscuro} />
            </View>

            <Text style={styles.label}>Idioma</Text>

            <TouchableOpacity style={styles.option} onPress={() => setIdioma('PT')}>
              <Text style={idioma === 'PT' ? styles.selectedOption : null}>
                Português
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={() => setIdioma('EN')}>
              <Text style={idioma === 'EN' ? styles.selectedOption : null}>
                Inglês
              </Text>
            </TouchableOpacity>
          </>
        );

      case 'ajuda':
        return (
          <>
            <Text style={styles.label}>Fale conosco:</Text>
            <Text style={styles.email}>saude.maiss2026@gmail.com</Text>

            <TouchableOpacity
              style={styles.sendButton}
              onPress={() =>
                Linking.openURL(
                  'mailto:saude.maiss2026@gmail.com?subject=Ajuda&body=Ola, preciso de ajuda no app Saude+'
                )
              }
            >
              <Text style={styles.buttonText}>Enviar mensagem</Text>
            </TouchableOpacity>
          </>
        );

      default:
        return null;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={28} color="#7C3AED" />
          </TouchableOpacity>

          <Text style={styles.title}>Configuracoes</Text>
          <Text style={styles.subtitle}>
            Gerencie suas preferencias e personalize sua experiência no app.
          </Text>
        </View>

        <TouchableOpacity style={styles.card} onPress={() => openModal('login')}>
          <View style={[styles.iconBox, { backgroundColor: '#0EA5E9' }]}>
            <Ionicons name="log-in" size={38} color="#FFF" />
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Entrar / Login</Text>
            <Text style={styles.cardSubtitle}>Acesse sua conta existente</Text>
          </View>

          <Ionicons name="chevron-forward" size={30} color="#0EA5E9" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => openModal('dados')}>
          <View style={[styles.iconBox, { backgroundColor: '#7C3AED' }]}>
            <Ionicons name="person" size={38} color="#FFF" />
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Dados Pessoais</Text>
          </View>

          <Ionicons name="chevron-forward" size={30} color="#7C3AED" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => openModal('privacidade')}
        >
          <View style={[styles.iconBox, { backgroundColor: '#2563EB' }]}>
            <Ionicons name="shield-checkmark" size={38} color="#FFF" />
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Privacidade e Segurança</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => openModal('aparencia')}
        >
          <View style={[styles.iconBox, { backgroundColor: '#F97316' }]}>
            <Ionicons name="color-palette" size={38} color="#FFF" />
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Aparência</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => openModal('ajuda')}>
          <View style={[styles.iconBox, { backgroundColor: '#22C55E' }]}>
            <Ionicons name="help-circle" size={38} color="#FFF" />
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Ajuda e Suporte</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modal}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>{renderTitle()}</Text>
            {renderContent()}

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  header: {
    padding: 20,
    backgroundColor: '#FFF',
    margin: 20,
    borderRadius: 20,
    elevation: 3,
  },

  backButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F3E8FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0F172A',
  },

  subtitle: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 8,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    marginTop: 15,
    padding: 15,
    borderRadius: 15,
    elevation: 2,
  },

  iconBox: {
    width: 60,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardContent: {
    flex: 1,
    marginLeft: 15,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0F172A',
  },

  cardSubtitle: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 3,
  },

  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalBox: {
    width: '90%',
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  closeButton: {
    marginTop: 20,
    backgroundColor: '#EF4444',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },

  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#374151',
  },

  loginButton: {
    backgroundColor: '#2563EB',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    alignItems: 'center',
  },

  option: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    marginTop: 10,
  },

  selectedOption: {
    color: '#2563EB',
    fontWeight: 'bold',
  },

  email: {
    fontSize: 14,
    color: '#2563EB',
    marginVertical: 10,
  },

  sendButton: {
    backgroundColor: '#22C55E',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  successText: {
    color: 'green',
    fontWeight: 'bold',
  },

  helperText: {
    marginTop: 10,
    color: '#64748B',
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
