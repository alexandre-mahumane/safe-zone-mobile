import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import { BottomNavigation } from '@/components/menu'
import { Header } from '@/components/header'
import { CardsGrid } from './cards/grid'

export default function Home() {
  const router = useRouter()
  return (
    <SafeAreaView className="flex-1 bg-white ">
      <Header />
      <View className="flex-1 ">
        <CardsGrid />
      </View>
      <BottomNavigation />
    </SafeAreaView>
  )
}
