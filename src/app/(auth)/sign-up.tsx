import {
  View,
  Text,
  ScrollView,
  Pressable,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { router } from 'expo-router'
import { Entypo, Ionicons } from '@expo/vector-icons'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { SignUpFormData, signUpSchema } from '@/utils/schemas/sign-up-schema'
import BackgroundLogoSvgBlue from '@/assets/logo-blue.svg'
import React from 'react'

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = async (_data: SignUpFormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      Alert.alert('Sucesso!', 'Conta criada com sucesso!', [
        {
          text: 'OK',
          onPress: () => router.push('/(auth)/sign-in'),
        },
      ])
    } catch {
      Alert.alert('Erro', 'Não foi possível criar a conta. Tente novamente.')
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView behavior="padding" enabled>
        <ScrollView>
          <View className="flex-1 px-6 pt-12 pb-8 space-y-8">
            <View className=" mb-8">
              <Pressable
                onPress={() => router.back()}
                className="mr-4 p-2 flex-row items-center"
              >
                <Entypo name="chevron-left" size={24} color="black" />
                <Text className="text-lg font-sans text-gray-700">Voltar</Text>
              </Pressable>
            </View>

            <View className="items-center mb-8">
              <View className="flex-row items-center">
                <BackgroundLogoSvgBlue width={249} height={48} />
              </View>
            </View>

            <Text className="text-xl font-sans font-bold text-gray-700 mb-4">
              Crie sua conta para utilizar o app
            </Text>

            <View className="space-y-4 flex-col gap-4">
              <View>
                <Controller
                  control={control}
                  name="fullName"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      placeholder="Nome e sobrenome"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      className={`${
                        errors.fullName ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                  )}
                />
                {errors.fullName && (
                  <Text className="text-red-500 text-sm mt-1">
                    {errors.fullName.message}
                  </Text>
                )}
              </View>

              <View>
                <Controller
                  control={control}
                  name="email"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      placeholder="Email"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      className={`${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                  )}
                />
                {errors.email && (
                  <Text className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </Text>
                )}
              </View>

              <View>
                <Controller
                  control={control}
                  name="phone"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      placeholder="84 527 9970"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      keyboardType="phone-pad"
                      className={`${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                  )}
                />
                {errors.phone && (
                  <Text className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </Text>
                )}
              </View>

              <View>
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      placeholder="Senha"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      secureTextEntry
                      className={`${
                        errors.password ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                  )}
                />
                {errors.password && (
                  <Text className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </Text>
                )}
              </View>

              <View>
                <Controller
                  control={control}
                  name="confirmPassword"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      placeholder="Confirme Sua Senha"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      secureTextEntry
                      className={`${
                        errors.confirmPassword
                          ? 'border-red-500'
                          : 'border-gray-300'
                      }`}
                    />
                  )}
                />
                {errors.confirmPassword && (
                  <Text className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword.message}
                  </Text>
                )}
              </View>
            </View>

            <View className="mt-8">
              <Button
                onPress={handleSubmit(onSubmit)}
                disabled={isSubmitting}
                className="bg-app-primary rounded-lg h-12"
              >
                <Text className="text-white font-semibold text-base">
                  {isSubmitting ? 'Criando conta...' : 'Criar conta'}
                </Text>
              </Button>
            </View>

            <View className="mt-6 items-center">
              <Pressable onPress={() => router.push('/(auth)/sign-in')}>
                <Text className="text-gray-600 text-base">
                  Já tem uma conta?{' '}
                  <Text className="text-app-primary font-semibold">Entrar</Text>
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default SignUp
