import { View, Text } from 'react-native'
import { Button } from '@/components/ui/button'
import BackgroundLogoSvg from '@/assets/logo.svg'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { useRouter } from 'expo-router'

export default function SignIn() {
  const router = useRouter()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  })
  const onSubmit = (data) => console.log(data)

  return (
    <SafeAreaView className="flex-1 bg-white p-6">
      <View className="justify-start mt-20 items-center">
        <BackgroundLogoSvg width={249} height={48} />
      </View>
      <View className="flex-grow justify-center items-center">
        <View className="flex-col gap-8 w-full">
          <Button
            className="bg-white h-14"
            onPress={() => router.push('/sign-in')}
          >
            <Text className="text-secondary-foreground font-sans text-sm dark:text-secondary-foreground">
              Faça Login
            </Text>
          </Button>
          <Button
            className="bg-white h-14"
            onPress={() => router.push('/sign-up')}
          >
            <Text className="text-secondary-foreground font-sans text-sm dark:text-secondary-foreground">
              Criar Conta
            </Text>
          </Button>
        </View>
      </View>
      <View>
        <Text className="text-base font-sans text-center py-8 text-white">
          A sua segurança está aqui!
        </Text>
      </View>
    </SafeAreaView>
  )
}
