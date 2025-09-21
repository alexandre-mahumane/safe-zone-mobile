import type React from 'react'
import { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native'
import { MotiView } from 'moti'
import { LinearGradient } from 'expo-linear-gradient'
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated'

const { width } = Dimensions.get('window')

interface OnboardingData {
  id: number
  title: string
  subtitle: string
  description: string
  image?: string
  isPhotoScreen?: boolean
}

const onboardingData: OnboardingData[] = [
  {
    id: 1,
    title: 'Aqui Estão Algumas Dicas Essenciais',
    subtitle: 'Para Aproveitar Ao Máximo',
    description:
      'Personalize Quem Pode Ver Sua Localização Para Garantir Sua Privacidade.',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dicas%20de%20Seguran%C3%A7a%2001-7AcnNfBooeeQeTWyVaAu6iAVBOPmNI.png',
  },
  {
    id: 2,
    title: 'Botão De Emergência Rápida',
    subtitle: '',
    description:
      'Configure O Botão De Emergência Para Ligar Rapidamente Para Contatos Específicos Ou À Polícia.',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dicas%20de%20Seguran%C3%A7a%2002-niY9u1HECQuOXUnuHb5sI6h1JH094F.png',
  },
  {
    id: 3,
    title: 'Navegação Consciente',
    subtitle: '',
    description:
      'Antes De Sair, Confira As Áreas De Risco E Escolha Rotas Seguras.',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dicas%20de%20Seguran%C3%A7a%2003-yhjOUUJCcqKwx39PN6dCuS6MVvSDXb.png',
  },
  {
    id: 4,
    title: 'Adicione Suas Fotos',
    subtitle: 'Personalize Seu Perfil',
    description:
      'Adicione fotos para que seus contatos possam te identificar facilmente.',
    isPhotoScreen: true,
  },
]

const OnboardingScreen: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const dot0Style = useAnimatedStyle(() => ({
    width: withSpring(currentIndex === 0 ? 24 : 8),
    backgroundColor: currentIndex === 0 ? '#2E5BFF' : '#E0E0E0',
  }))

  const dot1Style = useAnimatedStyle(() => ({
    width: withSpring(currentIndex === 1 ? 24 : 8),
    backgroundColor: currentIndex === 1 ? '#2E5BFF' : '#E0E0E0',
  }))

  const dot2Style = useAnimatedStyle(() => ({
    width: withSpring(currentIndex === 2 ? 24 : 8),
    backgroundColor: currentIndex === 2 ? '#2E5BFF' : '#E0E0E0',
  }))

  const dot3Style = useAnimatedStyle(() => ({
    width: withSpring(currentIndex === 3 ? 24 : 8),
    backgroundColor: currentIndex === 3 ? '#2E5BFF' : '#E0E0E0',
  }))

  const animatedStyles = [dot0Style, dot1Style, dot2Style, dot3Style]

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const renderPhotoPlaceholders = () => {
    return (
      <View style={styles.photoContainer}>
        {[1, 2, 3, 4].map((item, index) => (
          <MotiView
            key={item}
            from={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              delay: index * 200,
              damping: 15,
              stiffness: 100,
            }}
            style={styles.photoPlaceholder}
          >
            <Text style={styles.photoPlaceholderText}>+</Text>
          </MotiView>
        ))}
      </View>
    )
  }

  const renderDots = () => {
    return (
      <View style={styles.dotsContainer}>
        {onboardingData.map((_, index) => (
          <Animated.View
            key={index}
            style={[styles.dot, animatedStyles[index]]}
          />
        ))}
      </View>
    )
  }

  const currentData = onboardingData[currentIndex]

  return (
    <View style={styles.container}>
      {/* Background Decorative Elements */}
      <MotiView
        from={{ scale: 0, rotate: '0deg' }}
        animate={{ scale: 1, rotate: '360deg' }}
        transition={{
          type: 'timing',
          duration: 20000,
          loop: true,
        }}
        style={[styles.decorativeCircle, styles.topLeftCircle]}
      />

      <MotiView
        from={{ scale: 0, rotate: '0deg' }}
        animate={{ scale: 1, rotate: '-360deg' }}
        transition={{
          type: 'timing',
          duration: 25000,
          loop: true,
        }}
        style={[styles.decorativeCircle, styles.bottomRightCircle]}
      />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={handleBack}
          style={styles.backButton}
          disabled={currentIndex === 0}
        >
          <MotiView
            animate={{
              opacity: currentIndex === 0 ? 0.3 : 1,
            }}
          >
            <Text style={styles.backButtonText}>← Voltar</Text>
          </MotiView>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Title */}
        <MotiView
          key={`title-${currentIndex}`}
          from={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            type: 'spring',
            damping: 15,
            stiffness: 100,
          }}
          style={styles.titleContainer}
        >
          <Text style={styles.title}>{currentData.title}</Text>
          {currentData.subtitle && (
            <Text style={styles.subtitle}>{currentData.subtitle}</Text>
          )}
        </MotiView>

        {/* Image or Photo Placeholders */}
        <MotiView
          key={`image-${currentIndex}`}
          from={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            damping: 15,
            stiffness: 100,
            delay: 200,
          }}
          style={styles.imageContainer}
        >
          {currentData.isPhotoScreen ? (
            renderPhotoPlaceholders()
          ) : (
            <Image
              source={{ uri: currentData.image }}
              style={styles.image}
              resizeMode="contain"
            />
          )}
        </MotiView>

        {/* Description */}
        <MotiView
          key={`description-${currentIndex}`}
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            type: 'spring',
            damping: 15,
            stiffness: 100,
            delay: 400,
          }}
          style={styles.descriptionContainer}
        >
          <Text style={styles.description}>{currentData.description}</Text>
        </MotiView>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        {renderDots()}

        <MotiView
          animate={{
            scale: currentIndex === onboardingData.length - 1 ? 1.05 : 1,
          }}
          transition={{
            type: 'spring',
            damping: 15,
          }}
        >
          <TouchableOpacity
            style={[
              styles.nextButton,
              currentIndex === onboardingData.length - 1 && styles.finishButton,
            ]}
            onPress={handleNext}
            disabled={currentIndex === onboardingData.length - 1}
          >
            <LinearGradient
              colors={['#2E5BFF', '#1E40AF']}
              style={styles.buttonGradient}
            >
              <Text style={styles.nextButtonText}>
                {currentIndex === onboardingData.length - 1
                  ? 'Finalizar'
                  : 'Próximo'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </MotiView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  decorativeCircle: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#2E5BFF',
    opacity: 0.1,
  },
  topLeftCircle: {
    top: -60,
    left: -60,
  },
  bottomRightCircle: {
    bottom: -60,
    right: -60,
    backgroundColor: '#FF6B6B',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
  },
  backButtonText: {
    fontSize: 16,
    color: '#666666',
    fontWeight: '500',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    lineHeight: 32,
    marginTop: 4,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 40,
    height: 300,
    justifyContent: 'center',
  },
  image: {
    width: width * 0.8,
    height: 280,
  },
  photoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  photoPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#2E5BFF',
    borderStyle: 'dashed',
    backgroundColor: '#F8FAFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoPlaceholderText: {
    fontSize: 24,
    color: '#2E5BFF',
    fontWeight: 'bold',
  },
  descriptionContainer: {
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  bottomSection: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    gap: 8,
  },
  dot: {
    height: 8,
    borderRadius: 4,
  },
  nextButton: {
    width: width - 40,
    height: 56,
    borderRadius: 28,
    overflow: 'hidden',
  },
  finishButton: {
    opacity: 0.7,
  },
  buttonGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
})

export default OnboardingScreen
