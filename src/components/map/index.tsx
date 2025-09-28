// import { useEffect, useState } from 'react'
// import { View, Text, Platform } from 'react-native'
// import { AppleMaps, GoogleMaps } from 'expo-maps'
// import * as Location from 'expo-location'

// export default function MapComponent() {
//   const [location, setLocation] = useState<any>(null)
//   const [selected, setSelected] = useState<any>(null)

//   useEffect(() => {
//     ;(async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync()
//       if (status !== 'granted') {
//         alert('Permissão negada!')
//         return
//       }

//       let loc = await Location.getCurrentPositionAsync({})
//       setLocation(loc.coords)
//     })()
//   }, [])

//   const handlePress = async (event: any) => {
//     const { latitude, longitude } = event.coordinate // expo-maps retorna assim
//     let place = await Location.reverseGeocodeAsync({ latitude, longitude })

//     setSelected({
//       latitude,
//       longitude,
//       name: place[0]?.name || 'Local desconhecido',
//     })
//   }

//   if (!location) {
//     return (
//       <View className="flex-1 items-center justify-center">
//         <Text>Carregando mapa...</Text>
//       </View>
//     )
//   }

//   const markers = [
//     {
//       coordinate: {
//         latitude: location.latitude,
//         longitude: location.longitude,
//       },
//       title: 'Minha localização',
//     },
//     ...(selected
//       ? [
//           {
//             coordinate: {
//               latitude: selected.latitude,
//               longitude: selected.longitude,
//             },
//             title: selected.name,
//           },
//         ]
//       : []),
//   ]

//   return (
//     <View className="flex-1">
//       {Platform.OS === 'ios' ? (
//         <AppleMaps.View
//           style={{ flex: 1 }}
//           initialRegion={{
//             latitude: location.latitude,
//             longitude: location.longitude,
//             latitudeDelta: 0.01,
//             longitudeDelta: 0.01,
//           }}
//           markers={markers}
//           onMapClick={handlePress}
//         />
//       ) : (
//         <GoogleMaps.View
//           style={{ flex: 1 }}
//           initialRegion={{
//             latitude: location.latitude,
//             longitude: location.longitude,
//             latitudeDelta: 0.01,
//             longitudeDelta: 0.01,
//           }}
//           markers={markers}
//           onMapClick={handlePress}
//         />
//       )}

//       {selected && (
//         <View className="absolute bottom-5 self-center bg-white rounded-xl px-4 py-2 shadow-lg">
//           <Text className="text-base font-semibold">📍 {selected.name}</Text>
//           <Text className="text-sm">Lat: {selected.latitude}</Text>
//           <Text className="text-sm">Long: {selected.longitude}</Text>
//         </View>
//       )}
//     </View>
//   )
// }
