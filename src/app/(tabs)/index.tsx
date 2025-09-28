import { Text, View, TouchableOpacity, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuth } from '@/contexts/auth-store'

export default function HomeScreen() {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    Alert.alert('Logout', 'Tem certeza que deseja sair?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Sair',
        style: 'destructive',
        onPress: logout,
      },
    ])
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          flex: 1,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
            color: '#374151',
          }}
        >
          Bem-vindo!
        </Text>

        {user && (
          <View style={{ marginBottom: 30, alignItems: 'center' }}>
            <Text style={{ fontSize: 16, color: '#6B7280', marginBottom: 5 }}>
              Nome: {user.name}
            </Text>
            <Text style={{ fontSize: 16, color: '#6B7280', marginBottom: 5 }}>
              Email: {user.email}
            </Text>
            <Text style={{ fontSize: 16, color: '#6B7280', marginBottom: 5 }}>
              Email Verificado: {user.emailVerified ? 'Sim' : 'Não'}
            </Text>
          </View>
        )}

        <TouchableOpacity
          onPress={handleLogout}
          style={{
            backgroundColor: '#EF4444',
            paddingHorizontal: 30,
            paddingVertical: 12,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
