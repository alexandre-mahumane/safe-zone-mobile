import { View, Text, TouchableOpacity } from 'react-native'
import { MapPin } from 'lucide-react-native'

interface LocationItemProps {
  name: string
  level: number
  onPress?: () => void
  variant: 'safe' | 'danger'
}

export function LocationItem({
  name,
  level,
  onPress,
  variant,
}: LocationItemProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center bg-white p-2 mx-4 mb-3 rounded-lg shadow-sm border border-gray-100"
      activeOpacity={0.7}
    >
      <View className=" p-3 rounded-full mr-3">
        <MapPin size={28} color="#1F346C" strokeWidth={3} />
      </View>

      <View className="flex-1">
        <Text className=" font-semibold text-base mb-1">{name}</Text>
        <Text className={` font-light text-sm text-app-primary `}>
          Nível De {variant === 'safe' ? 'Segurança' : 'Perigo'}{' '}
          <Text
            className={`${
              variant === 'safe' ? 'text-app-primary' : 'text-red-600'
            }`}
          >
            {level}%
          </Text>
        </Text>
      </View>
    </TouchableOpacity>
  )
}
