import { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LocationItem } from '@/components/locationItem'
import { FloatingActionButton } from '@/components/floating-action-button'
import { CreateArea } from '@/components/modal/area-form'
import { BottomNavigation } from '@/components/menu'
import { SecondaryHeader } from '@/components/secondary-header'

interface SafeLocation {
  name: string
  safetyLevel: number
}

export default function SafeZone() {
  const [modalVisible, setModalVisible] = useState(false)
  const [safeLocations, setSafeLocations] = useState<SafeLocation[]>([
    { name: 'Bairro Malhampsene', safetyLevel: 70 },
    { name: 'Bairro Liberdade', safetyLevel: 50 },
    { name: 'Bairro C700', safetyLevel: 60 },
    { name: 'Bairro Fomento', safetyLevel: 70 },
  ])
  const handleBackPress = () => {
    console.log('Back pressed')
    // Implementar navegação de volta
  }

  const handleMenuPress = () => {
    console.log('Menu pressed')
    // Implementar abertura do menu
  }

  const handleLocationPress = (locationName: string) => {
    console.log(`Location pressed: ${locationName}`)
    // Implementar navegação para detalhes da localização
  }

  const handleAddPress = () => {
    setModalVisible(true)
  }

  const handleSaveLocation = (data: any) => {
    console.log('Saving location data:', data)
    // Aqui você pode adicionar a lógica para salvar os dados
    // Por exemplo, adicionar à lista de localizações
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1">
        <SecondaryHeader
          title="Zona Segura"
          onBackPress={handleBackPress}
          onMenuPress={handleMenuPress}
        />

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="pt-6 pb-4">
            <Text className="text-gray-900 font-bold text-xl px-4 mb-4">
              Localização
            </Text>

            {safeLocations.map((location, index) => (
              <LocationItem
                key={index}
                name={location.name}
                safetyLevel={location.safetyLevel}
                onPress={() => handleLocationPress(location.name)}
              />
            ))}
          </View>
        </ScrollView>

        <FloatingActionButton onPress={handleAddPress} />

        <CreateArea
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSave={handleSaveLocation}
        />

        <BottomNavigation />
      </View>
    </SafeAreaView>
  )
}
